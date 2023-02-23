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

import "reflect-metadata";
import { LocalModelSource, TYPES } from "sprotty";
import createASCETContainer from "./sprotty-ASCET-example/di.config";
import createLangiumSprottyContainer from "./interactive-example/diagram-frontend/di.config";
import { model } from "./sprotty-ASCET-example/model-source";
import { createMonacoEditor } from './interactive-example/monaco-config';
import { LSWorkerDiagramServerProxy } from "./interactive-example/diagram-frontend/ls-worker-proxy";

export default function runExample() {
    if (location.pathname.startsWith('/showcase')) {
        const client = createMonacoEditor('monaco-editor');
        const container = createLangiumSprottyContainer('sprotty-showcase', client.getLanguageClient());
        const modelSource = container.get<LSWorkerDiagramServerProxy>(TYPES.ModelSource);
        modelSource.start();
    } else {
        const container = createASCETContainer('sprotty-showcase');
        const modelSource = container.get<LocalModelSource>(TYPES.ModelSource);
        modelSource.setModel(model);
    }
}

document.addEventListener("DOMContentLoaded", () => runExample());
