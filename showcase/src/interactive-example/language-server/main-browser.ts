/******************************************************************************
 * Copyright 2022 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/
import 'reflect-metadata'
import { createConnection, BrowserMessageReader, BrowserMessageWriter } from 'vscode-languageserver/browser.js';
import { startLanguageServer, EmptyFileSystem } from 'langium';
import { createStatemachineServices } from './statemachine-module';
import { addDiagramHandler } from 'langium-sprotty';

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
