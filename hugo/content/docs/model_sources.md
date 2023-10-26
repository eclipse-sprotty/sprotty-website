---
title: 'Model Sources'
weight: 400
---
When drawing a diagram with Sprotty we need a place to define and update the schema of the diagram to draw. Sprotty uses *model sources* to do this.
Sprotty currently offers two different model sources: The `LocalModelSource` for local models and the `DiagramServer` for remote ones.
{{< mermaid class="text-center">}}
flowchart TD;
ActionDispatcher
ModelSource
LocalModelSource
DiagramServerProxy
DiagramServer
ActionDispatcher <-.->|Action| ModelSource
ModelSource --- LocalModelSource
ModelSource --- DiagramServerProxy
DiagramServerProxy <-.->|Action| DiagramServer
{{< /mermaid>}}
Regardless of where your model-source is located, Sprotty handles them in a similar fashion. All communication between `ActionDispatcher` and model source is always through [actions](../communication_and_protocols) and is bi-directional.
This is a powerful feature of Sprotty as it allows both flexibility regarding where and how the Diagram is generated, as well as changing or updating and reacting to interactions with the diagram simultaneously.

The following sections will explain how to use and work with the different types of model sources.

## General usage

Regardless of the model source we are using, the first thing we have to do is to register our model source in the front-end [DI-container](../dependency_injection) like this:

```Typescript
bind(TYPES.ModelSource).to(ModelSourceClassOrProxy).inSingletonScope();
```

After that, we can retrieve the model source with the following code to further configure and use it.

```Typescript
const modelSource = container.get<LocalModelSource>(TYPES.ModelSource);
```

## Local Model Source

A `LocalModelSource` instance allows us to set and modify the model through function calls, and keeps the model schema saved locally.
To see how to use this model source, let's have a look at the following example:

```Typescript
import {SNode} from 'sprotty-protocol';
export default runExample() {
    const container = createContainer('sprotty-showcase');
    const modelSource = container.get<LocalModelSource>(TYPES.ModelSource);
    modelSource.setModel({
        type: 'graph'
        children: [
            <SNode>{
                type: 'node',
                id: 'main_node',
                text: 'node1',
                position: {x: 0, y: 0}
            }
        ]
    });

    document.getElementById('addButton').addEventListener('click', () => {
    modelSource.addElements([
        {
            parentId: 'graph',
            element: <SNode>{
                type: 'node',
                id: 'new_node',
                text: 'new node',
                position: {x: 100, y: 100}
            }
        }])
    })
}
```

In this example, we have a hard-coded data structure containing all the initial elements which are set in the model.
Be aware that by defining the model this way we are defining the *model schema* - a data structure describing the model - and not the actual *model* itself.
The *model* in this context means instances of the classes containing logic Sprotty uses for rendering. The *model schema* is used by Sprotty to generate the *model*.
Due to this, we should use the interfaces for our nodes, edges, etc. from `sprotty-protocol` and not the classes from the `sprotty` main package.
For disambiguation, model classes are suffixed with `Impl` in Sprotty, while interfaces (contained in the package `sprotty-protocol`) are not. This means that `SNode` is an interface, while `SNodeImpl` is a class.

After defining the *model schema* we can then use methods like `addElements()` from our `LocalModelSource` to add new nodes at the click of a button. The `LocalModelSource` then handles updating the model and notifying the `ActionDispatcher` about the update, so that the view can receive an animated update.

Through methods like the ones outlined above, the `LocalModelSource` can also be used as a facade over the action-based API of Sprotty. It handles actions for bounds calculation and model updates.

## Diagram Server

When the model needs to be generated from a remote source, like in a worker or from a server, we can use Sprotty's `DiagramServer` model source. It communicates with the client through `Action` objects which can be serialized to plain JSON.

On the client-side, instead of registering an actual `ModelSource` we can use a `DiagramServerProxy`. The Proxy handles the communication and forwards actions to the `ActionDispatcher`. Out of the box, Sprotty offers the `WebSocketDiagramServerProxy` for communicating through WebSockets with the `DiagramServer`.
Should a different form of communication be necessary we would have to [create a custom proxy](#creating-a-custom-model-source-proxy).

Using the `WebSocketDiagramServerProxy` is quite simple. We just need to call `listen` on the ModelSource and pass it the WebSocket we're communicating with.

```Typescript
const modelSource = container.get<WebSocketDiagramServerProxy>(TYPES.ModelSource);
modelSource.listen(websocket);
```

For creating the `DiagramServer` itself, let's look at an example.

```Typescript
// Creating a new websocket server
const wss = new WebSocketServer.Server({ port: 8080 });

// create our DiagramServices
const elkFactory: ElkFactory = () => new SocketElkServer();
const services: DiagramServices = {
    DiagramGenerator: new RandomGraphGenerator(),
    ModelLayoutEngine: new ElkLayoutEngine(elkFactory)
}
 
// Creating connection using websocket
wss.on("connection", ws => {

    const diagramServer = new DiagramServer(action => {
        ws.send(JSON.stringify(action));
    }, services)

    ws.on('message' data => {
        diagramServer.accept(data.action);
    });
});
```

In the example above, we assume we have a simple [nodeJs WebSocket server](https://github.com/websockets/ws) and want to create a `DiagramServer` for it.

As we can see, there are two parts to creating the `DiagramServer`.
First, we need a dispatch method to send actions from the server to the client. This can be as simple as calling `ws.send()` with the serialized action.
Second, we need the `DiagramServices`. The `DiagramServices` type looks like this:

```Typescript
export interface DiagramServices {
    readonly DiagramGenerator: IDiagramGenerator
    readonly ModelLayoutEngine?: IModelLayoutEngine
    readonly ServerActionHandlerRegistry?: ServerActionHandlerRegistry
}
```

There are 3 components to the `DiagramServices`. One is mandatory, the other two are optional:

- The `DiagramGenerator` which the server uses to create the schema of the Diagram
- Optionally the `ModelLayoutEngine`, like the `ElkLayoutEngine` from [sprotty-elk](https://github.com/eclipse-sprotty/sprotty/tree/master/packages/sprotty-elk), if we want to do server-side layouting
- Optionally the `ServerActionHandlerRegistry` for overwriting the default handling of incoming actions

## Creating a Custom Model Source Proxy

In case communication between the `DiagramServer` and client does not work through WebSockets, for example when the `DiagramServer` is running in a worker or the sprotty client is in a vscode webview (see [sprotty-vscode](https://github.com/eclipse-sprotty/sprotty-vscode)), we can easily implement our own proxy instead.

```Typescript
export class WebWorkerDiagramProxy extends DiagramServerProxy {
    constructor(private worker: Worker) {
        super()
        const proxy = this;
        worker.onmessage = function(event) {
            proxy.messageReceived(event.data)
        }

    }

    protected sendMessage(message: ActionMessage): void {
        this.worker.postMessage(JSON.stringify(message));
    }
}
```

Following the example above, first we need to extend `DiagramServerProxy`. This already gives us most of our needed functionality and makes this proxy a `ModelSource`.
Then we need to listen for incoming messages and pass them to the `messageReceived()` function, which deserializes and passes them to the `ActionDispatcher`.
Lastly, we need to implement the `sendMessage()` method to allow actions coming from the `ActionDispatcher` to be transferred to the `DiagramServer`.

Now our custom model source proxy is able to propagate all actions between the `ActionDispatcher` and our `DiagramServer` running in the worker, which gives us access to all of sprotty's functionality.
