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
import {CenterAction, FitToScreenAction} from "sprotty-protocol";
import { LocalModelSource, TYPES } from "sprotty";
import createASCETContainer from "./ascet-example/di.config";
import createLangiumSprottyContainer from "./langium-diagram/diagram-frontend/di.config";
import { model } from "./ascet-example/model-source";
import { createMonacoEditor } from './langium-diagram/monaco-config';
import { LSWorkerDiagramServerProxy } from "./langium-diagram/diagram-frontend/ls-worker-proxy";

export default function runExample() {
    const ascetContainer = createASCETContainer('sprotty-ascet-example');
    const ascetModelSource = ascetContainer.get<LocalModelSource>(TYPES.ModelSource);
    ascetModelSource.setModel(model);
    ascetModelSource.actionDispatcher.dispatch(<FitToScreenAction>{kind: 'fit', elementIds: [], animate: false, padding: 60})

    const client = createMonacoEditor('monaco-editor');
    const langiumContainer = createLangiumSprottyContainer('sprotty-langium-diagram', client.getLanguageClient());
    const langiumModelSource = langiumContainer.get<LSWorkerDiagramServerProxy>(TYPES.ModelSource);
    langiumModelSource.start();
    langiumModelSource.actionDispatcher.dispatch(<FitToScreenAction>{kind: 'fit', elementIds: [], animate: false, padding: 50})
}

document.addEventListener("DOMContentLoaded", () => runExample());
