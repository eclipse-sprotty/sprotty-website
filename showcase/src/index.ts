import "reflect-metadata";
import { LocalModelSource, TYPES } from "sprotty";
import createASCETContainer from "./sprotty-ASCET-example/di.config";
import createLangiumSprottyContainer from "./interactive-example/diagram-frontend/di.config";
import { model } from "./sprotty-ASCET-example/model-source";
import { createMonacoEditor } from './interactive-example/monaco-config';
import { SprottyStarter } from "./interactive-example/diagram-frontend/SprottyStarter";

export default function runExample() {
    if (location.pathname.startsWith('/showcase')) {
        const client = createMonacoEditor('monaco-editor');
        const container = createLangiumSprottyContainer('sprotty-showcase');
        new SprottyStarter(client, container, 'sprotty-showcase').start();
    } else {
        const container = createASCETContainer('sprotty-showcase');
        const modelSource = container.get<LocalModelSource>(TYPES.ModelSource);
        modelSource.setModel(model);
    }
}

document.addEventListener("DOMContentLoaded", () => runExample());
