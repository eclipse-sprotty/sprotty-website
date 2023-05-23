/********************************************************************************
 * Copyright (c) 2023 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import { addDiagramHandler } from "langium-sprotty";
import { buildWorkerDefinition } from "monaco-editor-workers";
import { MonacoEditorLanguageClientWrapper } from "monaco-editor-wrapper";
import { CloseAction, ErrorAction, MessageType, MonacoLanguageClient, MonacoServices, ProtocolNotificationType0 } from "monaco-languageclient";
import { BrowserMessageReader, BrowserMessageWriter } from "vscode-languageserver-protocol/browser";

export function createMonacoEditor(containerId: string): MonacoEditorLanguageClientWrapper {
    buildWorkerDefinition('/showcase/monaco-workers', new URL('../', window.location.href).href, false);

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

    const workerURL = new URL('../showcase/language-server.js',  window.location.href);

    const lsWorker = new Worker(workerURL, {type: 'classic'});
    client.setWorker(lsWorker);

    client.startEditor(document.getElementById(containerId));

    window.addEventListener("resize", () => client.updateLayout());

    return client;
}