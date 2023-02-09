import { addDiagramHandler } from "langium-sprotty";
import { buildWorkerDefinition } from "monaco-editor-workers";
import { MonacoEditorLanguageClientWrapper } from "monaco-editor-wrapper";
import { CloseAction, ErrorAction, MessageType, MonacoLanguageClient, MonacoServices, ProtocolNotificationType0 } from "monaco-languageclient";
import { BrowserMessageReader, BrowserMessageWriter } from "vscode-languageserver-protocol/browser";

export function createMonacoEditor(containerId: string): MonacoEditorLanguageClientWrapper {
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

    config.setUseLanguageClient(true);
    config.setUseWebSocket(false);

    const workerURL = new URL('../language-server.js',  window.location.href);

    const lsWorker = new Worker(workerURL, {type: 'classic'});
    client.setWorker(lsWorker);

    client.startEditor(document.getElementById(containerId));

    window.addEventListener("resize", () => client.updateLayout());

    return client;
}