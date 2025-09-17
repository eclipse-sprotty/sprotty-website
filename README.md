# Eclipse Sprotty Project Website

[![Deployment](https://github.com/eclipse-sprotty/sprotty-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/eclipse-sprotty/sprotty-website/actions/workflows/deploy.yml)
[![Gitpod - Code Now](https://img.shields.io/badge/Gitpod-code%20now-blue.svg?longCache=true)](https://gitpod.io/#https://github.com/eclipse-sprotty/sprotty-website)

This repository contains the source for the website of Eclipse Sprotty:

[https://sprotty.org](https://sprotty.org)

The main repository is found at [eclipse-sprotty/sprotty](https://github.com/eclipse-sprotty/sprotty).

## Repository Structure

- `hugo` – [Hugo](https://gohugo.io) content including static web pages and documentation in Markdown format
- `tailwind` – [Tailwind CSS](https://tailwindcss.com) configuration
- `showcase` – Live examples of Sprotty diagrams

## How to generate reference documentation

The reference documentation is generated using [TypeDoc](https://typedoc.org/) and requires manual steps in order to be integrated into the website structure.

1. Install typedoc and typedoc-plugin-markdown globally

    ```bash
    npm i -g typedoc typedoc-plugin-markdown
    ```

2. Navigate to the package you want to create the reference for (ex: sprotty-protocol)

3. Generate documentation

    ```bash
    npx typedoc src/index --skipErrorChecking --plugin typedoc-plugin-markdown --flattenOutputFiles
    ```

4. This should have generated a new docs folder with many markdown files in the root of the package

5. Copy the content of this folder into the correct place in sprotty-website (hugo/content/docs/ref/[library]).

6. In sprotty-website run the `process-docs` script. This is needed to adapt the generated links to what hugo is expecting

    ```bash
    npm run process-docs
    ```
