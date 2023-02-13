import { Action } from "sprotty-protocol";

export const serverReadyKind = 'document_ready'

export interface ServerReadyAction extends Action {
    kind: typeof serverReadyKind;
    uri: string;
}