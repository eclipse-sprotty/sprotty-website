import { inject } from "inversify";
import { DiagramActionNotification } from "langium-sprotty";
import { MonacoLanguageClient } from "monaco-languageclient";
import { ActionHandlerRegistry, DiagramServerProxy } from "sprotty";
import { RequestModelAction, ActionMessage } from "sprotty-protocol";
import { ServerReadyAction } from "../protocol/handshake";

export class LSWorkerDiagramServerProxy extends DiagramServerProxy {

    constructor(@inject(MonacoLanguageClient) private client: MonacoLanguageClient) {
        super();
    }

    start() {
        this.client.onNotification(DiagramActionNotification.type, (action) => {
            if(action.action.kind === 'document_ready') {
                this.client.sendNotification(DiagramActionNotification.type, {clientId: this.clientId, action: RequestModelAction.create({
                        sourceUri: (action.action as ServerReadyAction).uri,
                        needsClientLayout: false,
                        needsServerLayout: true
                    })});
            } else {
                this.actionDispatcher.dispatch(action.action);
                this.storeNewModel(action.action);
            }
        });
    }

    protected sendMessage(message: ActionMessage): void {
        this.client.sendNotification(DiagramActionNotification.type, message);
    }
}