---
title: 'Getting Started'
weight: 200
---
Our 'Getting Started' example consists of a simple application that displays a list of tasks, their status, and the relationship between them in a HTML page.

The main steps to integrate Sprotty into our application are as follows:
1. [Set-up](#setting-up-our-application) your application.
2. [Define your model](#define-your-model) by creating subclasses of `SModelElement`.
3. [Implement views](#implement-views) to generate SVGs for each type of model element.
4. [Configure the diagram](#configure-the-diagram) through dependency injection.
5. [Connect to a model source](#connect-to-a-model-source), either local or remote

## Setting-up our application
Our example application is based on TypeScript. In the following we will set up our project to be ready for receiving Sprotty.
1. Create a new directory and navigate to it
2. Initialize the project by running
    ```shell
    npm init -y
    ```
    This will create a `package.json` file.
3. Modify `package.json` to add a build script and necessary dependencies
    ```json
    {
        "scripts": {
        "build": "esbuild ./index.ts --bundle --sourcemap --outfile=./out/index.js"
        },
        "devDependencies": {
            "esbuild": "^0.17.8",
            "typescript": "^4.9.5"
        },
        "dependencies": {
            "reflect-metadata": "^0.1.13",
            "sprotty": "^0.13.0"
        }
    }
    ```
4. Initialize the TypeScript project
    ```shell
    npx tsc --init
    ```
    This will create `tsconfig.json` file at the root of your project. You should overwrite this files with the following:
    ```json
    {
        "$schema": "https://json.schemastore.org/tsconfig",
        "compilerOptions": {
        "target": "ES2019",
        "module": "commonjs",
        "esModuleInterop": true,
        "sourceMap": true,
        "experimentalDecorators": true,
        "jsx": "react",
        "types": [
            "reflect-metadata"
        ]
        },
        "lib": [
            "ES2019",
            "DOM"
        ]
    }
    ```
5. Install dependencies running `npm i`
6. Create a `index.html` file at the root of your project
    ```html
    <head>
        <script src="./out/index.js" type="text/javascript"></script>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <div id="sprotty-container"></div>
    </body>
    ```
7. Add some default CSS styles by creating a `styles.css` file at the root of the project:
    ```css
    .sprotty-graph {
        width: 100%;
        height: 100%;
    }
    .sprotty-edge {
        fill: none;
        stroke: black;
        stroke-width: 1px;
    }
    ```
Our project is now set-up and ready for integrating Sprotty diagrams.

## Define your model
Sprotty comes with a set of model classes that you can reuse for your application. e.g. `SNode` and `SEdge` for graphs and `SChildElement` for other views. However, it is often necessary to add application-specific properties to model elements, so their graphical views can be parameterized.

We will define a new interface for our nodes called `TaskNode`, extending Sprotty's `SNode` with application-specific properties. Create a new file `models.ts` at the root of the project:
```typescript
import { SNode } from "sprotty-protocol"

export interface TaskNode extends SNode {
    name: string;
    isRunning: boolean;
    isFinished: boolean;
}
```

## Implement views
A view maps a model element to its graphical representation. You can create your own views by creating a class implementing `IView` or extending a view already available in Sprotty.

In the following example we use the JSX syntax to create a SVG group with a `rect` and a `text` element. Add a new file `view.tsx` (note the `tsx` extension) at the root of the project:
```typescript
/** @jsx svg */
import { svg } from 'sprotty/lib/lib/jsx';
import { injectable } from 'inversify';
import { VNode } from 'snabbdom';
import { IView, RenderingContext, SNode } from 'sprotty';
import { TaskNode } from './models';

@injectable()
export class TaskNodeView implements IView {
    render(node: Readonly<SNode & TaskNode>, context: RenderingContext): VNode {
        const position = 50;
        return <g>
            <rect class-sprotty-node={true} class-task={true}
                class-running={node.isRunning}
                class-finished={node.isFinished}
                width={node.size.width}
                height={node.size.height}
            >
            </rect>
            <text x={position} y={position + 5}>{node.name}</text>
        </g>;
    }
}
```

The SVG elements are styled with CSS using classes that are injected using the `class-myClass={boolean expression}` in the jsx expression. Add the following to `styles.css`:
```css
.sprotty-node.task {
    fill: #c0e0fc;
    stroke: #444;
    stroke-width: 1;
}

.sprotty-node.task.running {
    fill: #f00;
}

.sprotty-node.task.finished {
    fill: #0f0;
}

text {
    stroke-width: 0;
    stroke: #000;
    fill: #000;
    font-family: sans-serif;
    font-size: 10pt;
    text-anchor: middle;
}
```
## Configure the diagram
The configuration of our Sprotty application is done via Dependency Injection using [InversifyJS](https://inversify.io/). We recommend defining your InversifyJS container in a file named `di.config.ts` which could look like this:

```typescript
import { Container, ContainerModule } from 'inversify';
import { configureModelElement, configureViewerOptions, loadDefaultModules, LocalModelSource, PolylineEdgeView, SEdge, SGraph, SGraphView, SNode, TYPES } from 'sprotty';
import { TaskNodeView } from './views';

export const createContainer = (containerId: string) => {
    const myModule = new ContainerModule((bind, unbind, isBound, rebind) => {
        bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();

        const context = { bind, unbind, isBound, rebind };
        configureModelElement(context, 'graph', SGraph, SGraphView);
        configureModelElement(context, 'task', SNode, TaskNodeView);
        configureModelElement(context, 'edge', SEdge, PolylineEdgeView);

        configureViewerOptions(context, {
            needsClientLayout: false,
            baseDiv: containerId
        });
    });

    const container = new Container();
    loadDefaultModules(container);
    container.load(myModule);
    return container;
};
```
Views are registered using `configureModelElement` which takes a `context`, a type, an element class, and a view.
`loadDefaultModules` is used to include Sprotty's default modules, while `container.load` can be used to include extra modules required by our application.

## Connect to a model source
Sprotty supports two kinds of model sources:

* LocalModelSource allows to create models directly in TypeScript or JavaScript.
* WebSocketDiagramServer delegates to a remote source that is connected via web socket.

In this example, we consider the local variant. To enable the model source, we add the following line to our module definition (see previous section):
```ts
bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope()
```
Afterwards you can use the LocalModelSource to initialize and update the model. For example, the following `graph` consists of three task nodes with a connection between the first two. Create a new file `model-source.ts` at the root of the project:
```typescript
import { SGraph, SEdge, SNode } from "sprotty-protocol";
import { TaskNode } from "./models";

export const graph: SGraph = {
    type: 'graph',
    id: 'graph',
    children: [
        <SNode & TaskNode>{
            type: 'task',
            id: 'task01',
            name: 'First Task',
            isFinished: true,
            isRunning: false,
            position: { x: 0, y: 0 },
            size: { width: 100, height: 100 }
        },
        <SNode & TaskNode>{
            type: 'task',
            id: 'task02',
            name: 'Second Task',
            isFinished: false,
            isRunning: true,
            position: { x: 0, y: 200 },
            size: { width: 100, height: 100 }
        },
        <SNode & TaskNode>{
            type: 'task',
            id: 'task03',
            name: 'Third Task',
            isFinished: false,
            isRunning: false,
            position: { x: 150, y: 0 },
            size: { width: 100, height: 100 }
        },
        <SEdge>{
            type: 'edge',
            id: 'edge01',
            sourceId: 'task01',
            targetId: 'task02',
            routerKind: 'manhattan',
        }
    ]
};
```

Finally, we need to create the entry point of our application in a `index.ts` file:
```typescript
import "reflect-metadata";
import { LocalModelSource, TYPES } from 'sprotty';
import { createContainer } from './di.config';
import { graph } from './model-source';

export default function run() {
    const container = createContainer("sprotty-container");
    const modelSource = container.get<LocalModelSource>(TYPES.ModelSource);
    modelSource.setModel(graph);
}

document.addEventListener("DOMContentLoaded", () => run());
```

That's it! Run `npm run build` and open your HTML file, you should see the following diagram! There is some level of interactivity by default, try it out! Select nodes by clicking on them and move them around by dragging, adjust the zoom-level with the mouse wheel, navigate the diagram by panning via left-click and drag outside of a node.
![Getting started diagram](/getting-started-diagram.png)
