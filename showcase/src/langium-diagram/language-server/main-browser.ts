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
startLanguageServer(shared);

addDiagramHandler(connection, shared);

shared.workspace.TextDocuments.onDidOpen(e => {
    connection.sendNotification(DiagramActionNotification.type, {clientId: 'sprotty-showcase', action: {kind: serverReadyKind, uri: e.document.uri} as ServerReadyAction})
})