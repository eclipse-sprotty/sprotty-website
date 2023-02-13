/******************************************************************************
 * Copyright 2022 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/
import 'reflect-metadata'
import { createConnection, BrowserMessageReader, BrowserMessageWriter } from 'vscode-languageserver/browser.js';
import { startLanguageServer, EmptyFileSystem } from 'langium';
import { createStatemachineServices } from './statemachine-module';
import { addDiagramHandler, DiagramActionNotification } from 'langium-sprotty';
import { ServerReadyAction, serverReadyKind } from '../protocol/handshake';

/* browser specific setup code */
const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

const connection = createConnection(messageReader, messageWriter);

// Inject the shared services and language-specific services
const { shared } = createStatemachineServices({connection, ...EmptyFileSystem });

// Start the language server with the shared services
console.log("starting language server");
startLanguageServer(shared);

addDiagramHandler(connection, shared);

shared.workspace.TextDocuments.onDidOpen(e => {
    connection.sendNotification(DiagramActionNotification.type, {clientId: 'sprotty-showcase', action: {kind: serverReadyKind, uri: e.document.uri} as ServerReadyAction})
})