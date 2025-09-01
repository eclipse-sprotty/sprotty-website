#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * JavaScript script to process documentation files in hugo/content/docs/ref
 * 
 * This script:
 * 1. Recursively finds all files in hugo/content/docs/ref
 * 2. Renames globals.md files to _index.md
 * 3. For all .md files:
 *    - Removes content from start until (and including) "***"
 *    - Changes links with .md extension to have no extension
 */

const REF_DIR = path.join(__dirname, '..', 'hugo', 'content', 'docs', 'ref');

function getAllMarkdownFiles(dir) {
    const files = [];

    function walkDir(currentDir) {
        const entries = fs.readdirSync(currentDir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(currentDir, entry.name);

            if (entry.isDirectory()) {
                walkDir(fullPath);
            } else if (entry.isFile() && entry.name.endsWith('.md')) {
                files.push(fullPath);
            }
        }
    }

    walkDir(dir);
    return files;
}

function renameGlobalsFiles(files) {
    let renamedCount = 0;

    const globalsFiles = files.filter(file => path.basename(file) === 'globals.md');

    for (const globalsFile of globalsFiles) {
        const dir = path.dirname(globalsFile);
        const newPath = path.join(dir, '_index.md');

        try {
            fs.renameSync(globalsFile, newPath);
            console.log(`Renamed: ${globalsFile} -> ${newPath}`);
            renamedCount++;
        } catch (error) {
            console.error(`Error renaming ${globalsFile}:`, error);
        }
    }

    return renamedCount;
}

function removeReadmeFiles(files) {
    let removedCount = 0;

    const readmeFiles = files.filter(file => path.basename(file) === 'README.md');

    for (const readmeFile of readmeFiles) {
        try {
            fs.unlinkSync(readmeFile);
            console.log(`Removed: ${readmeFile}`);
            removedCount++;
        } catch (error) {
            console.error(`Error removing ${readmeFile}:`, error);
        }
    }

    return removedCount;
}

function processFileContent(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        let processedContent = content;
        let linksUpdated = 0;

        // Check if this is an _index.md file
        const fileName = path.basename(filePath);
        const isIndexFile = fileName === '_index.md';

        // Remove content from start until (and including) "***"
        const tripleStarIndex = processedContent.indexOf('***');
        if (tripleStarIndex !== -1) {
            // Find the end of the line containing "***"
            const lineEndIndex = processedContent.indexOf('\n', tripleStarIndex);
            if (lineEndIndex !== -1) {
                processedContent = processedContent.substring(lineEndIndex + 1);
            } else {
                // If no newline found after ***, remove everything including ***
                processedContent = '';
            }
        }

        // Replace markdown links with .md extension to have no extension
        // Pattern: [text](filename.md) -> [text](filename)
        // Also handles [text](path/filename.md) -> [text](path/filename)
        const linkPattern = /\[([^\]]*)\]\(([^)]*?)\.md\)/g;
        processedContent = processedContent.replace(linkPattern, (match, text, link) => {
            linksUpdated++;
            return `[${text}](${link})`;
        });

        // For non-index files, prepend relative links with "../" if not already present
        if (!isIndexFile) {
            // Pattern to match markdown links that are relative (not absolute URLs, not already starting with ../, not anchors)
            const relativeLinkPattern = /\[([^\]]*)\]\(([^)]*?)\)/g;
            processedContent = processedContent.replace(relativeLinkPattern, (match, text, link) => {
                // Skip if it's already an absolute URL (starts with http:// or https://)
                if (link.startsWith('http://') || link.startsWith('https://')) {
                    return match;
                }
                // Skip if it's already starts with ../
                if (link.startsWith('../')) {
                    return match;
                }
                // Skip if it's an anchor link (starts with #)
                if (link.startsWith('#')) {
                    return match;
                }
                // Skip if it's an absolute path (starts with /)
                if (link.startsWith('/')) {
                    return match;
                }
                // Skip if it's empty
                if (!link.trim()) {
                    return match;
                }

                // Prepend with ../
                linksUpdated++;
                return `[${text}](../${link})`;
            });
        }

        const contentChanged = content !== processedContent;

        if (contentChanged) {
            fs.writeFileSync(filePath, processedContent, 'utf-8');
            console.log(`Processed: ${filePath} (${linksUpdated} links updated)`);
        }

        return { contentChanged, linksUpdated };
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
        return { contentChanged: false, linksUpdated: 0 };
    }
}

function main() {
    console.log('Starting documentation processing...');
    console.log(`Processing directory: ${REF_DIR}`);

    if (!fs.existsSync(REF_DIR)) {
        console.error(`Directory does not exist: ${REF_DIR}`);
        process.exit(1);
    }

    const stats = {
        filesProcessed: 0,
        filesRenamed: 0,
        filesRemoved: 0,
        linksUpdated: 0,
        errors: []
    };

    try {
        // Get all markdown files
        const markdownFiles = getAllMarkdownFiles(REF_DIR);
        console.log(`Found ${markdownFiles.length} markdown files`);

        // Rename globals.md files to _index.md
        stats.filesRenamed = renameGlobalsFiles(markdownFiles);

        // Remove README.md files
        stats.filesRemoved = removeReadmeFiles(markdownFiles);

        // Get updated file list after renaming and removing files
        const updatedFiles = getAllMarkdownFiles(REF_DIR);

        // Process each file
        for (const filePath of updatedFiles) {
            const result = processFileContent(filePath);
            if (result.contentChanged) {
                stats.filesProcessed++;
            }
            stats.linksUpdated += result.linksUpdated;
        }

        // Print summary
        console.log('\n=== Processing Summary ===');
        console.log(`Files renamed: ${stats.filesRenamed}`);
        console.log(`Files removed: ${stats.filesRemoved}`);
        console.log(`Files processed: ${stats.filesProcessed}`);
        console.log(`Links updated: ${stats.linksUpdated}`);

        if (stats.errors.length > 0) {
            console.log('\nErrors encountered:');
            stats.errors.forEach(error => console.log(`  - ${error}`));
        }

        console.log('\nDocumentation processing completed!');

    } catch (error) {
        console.error('Failed to process documentation:', error);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = { main, processFileContent, renameGlobalsFiles, removeReadmeFiles, getAllMarkdownFiles }; 