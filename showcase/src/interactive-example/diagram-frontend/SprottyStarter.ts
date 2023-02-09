import { Container } from "inversify";
import { DiagramActionNotification } from "langium-sprotty";
import { MonacoEditorLanguageClientWrapper } from "monaco-editor-wrapper/.";
import { MonacoLanguageClient } from "monaco-languageclient/.";
import { LocalModelSource, ModelSource, TYPES } from "sprotty";
import { RequestModelAction, SetModelAction, RequestBoundsAction, ActionMessage } from "sprotty-protocol";
import { LanguageServerReady } from "../message-protcol/handshake";

export class SprottyStarter  {

    private modelSource: LocalModelSource
    

    constructor(private client: MonacoEditorLanguageClientWrapper, container: Container, private clientId: string) {
        this.modelSource = container.get<LocalModelSource>(TYPES.ModelSource);
    }

    start() {
        this.client.getLanguageClient().onNotification(DiagramActionNotification.type, (action) => {
            this.modelSource.setModel((action.action as RequestBoundsAction).newRoot);
        });
        setTimeout(() => {
            this.client.getLanguageClient().sendNotification(DiagramActionNotification.type, {clientId: this.clientId, action: RequestModelAction.create({
                sourceUri: this.client.getEditor().getModel().uri.toString(),
                needsClientLayout: false,
                needsServerLayout: true
             })});
        }, 2000)
    }
}