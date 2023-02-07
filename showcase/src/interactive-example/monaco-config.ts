import { buildWorkerDefinition } from "monaco-editor-workers";
import { MonacoEditorLanguageClientWrapper } from "monaco-editor-wrapper";

export function createMonacoEditor(containerId: string) {
    buildWorkerDefinition('/node_modules/monaco-editor-workers/dist/workers', new URL('../', window.location.href).href, false);

    MonacoEditorLanguageClientWrapper.addMonacoStyles('monaco-editor-styles');
    const client = new MonacoEditorLanguageClientWrapper('state-machine-example-code');
    const config = client.getEditorConfig();

    config.setMainLanguageId('statemachine');
    config.setMonarchTokensProvider({
        keywords: [
            'actions', 'commands', 'end', 'events', 'initialState', 'state', 'statemachine'
        ],

        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // identifiers and keywords
                [/[a-z_$][\w$]*/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'identifier'
                    }
                }],

                // whitespace
                { include: '@whitespace' }
            ],

            comment: [
                [/[^\/*]+/, 'comment'],
                [/\/\*/, 'comment', '@push'],    // nested comment
                ["\\*/", 'comment', '@pop'],
                [/[\/*]/, 'comment']
            ],

            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/\/\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
            ]
        }
    });
    config.setMainCode(`// Create your own statemachine here!
statemachine TrafficLight
events
    switchCapacity
    next
initialState PowerOff
state PowerOff
    switchCapacity => RedLight
end
state RedLight
    switchCapacity => PowerOff
    next => GreenLight
end
state YellowLight
    switchCapacity => PowerOff
    next => RedLight
end
state GreenLight
    switchCapacity => PowerOff
    next => YellowLight
end`);
    config.setTheme('vs-dark');

    config.setUseLanguageClient(true);
    config.setUseWebSocket(false);

    const workerURL = new URL('/languageServer.js',  new URL('../', window.location.href).href);

    const lsWorker = new Worker(workerURL.href, {
        type: 'classic',
        name: 'LS'
    });
    client.setWorker(lsWorker);

    client.startEditor(document.getElementById(containerId));

    window.addEventListener("resize", () => client.updateLayout());
}