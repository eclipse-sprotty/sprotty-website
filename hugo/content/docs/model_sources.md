---
title: 'Model Sources'
weight: 400
---
When drawing a diagram with Sprotty we need a place to define and update the schema of the diagram to draw. For that Sprotty uses so-called model sources. 
Sprotty currently offers two different model sources: The `LocalModelSource` for local models and the `DiagramServer` for remote ones.
The following sections will explain how to use and work with them.
## Local Model Source
The `LocalModelSource` allows to set and modify the model through function calls and keeps the model schema saved locally.
To see how to use this model source, let's have a look at the following example:
```Typescript
import {SNode, ...} from 'sprotty-protocol';
export default runExample() {
    const container = createContainer('sprotty-showcase');
    const modelSource = container.get<LocalModelSource>(TYPES.ModelSource);
    modelSource.setModel({
        type: 'graph'
        children: [
            <SNode>{
                ...
            }
            ...
        ]
    });

    document.getElementById('addButton').onClick(() => {
        modelSource.addElements([{parentId: 'graph', {
            type: 'node'
            ...
            }}])
    })
}
```
In this example, we have a hard-coded data structure containing all our initial elements which are set as the model. 
Be aware that by defining the model this way we are defining the model schema and not the actual model. Because of that, we should use the types for our nodes, edges, etc. from `sprotty-protocol` and not the `sprotty` main package.

After defining the model schema we can then use methods like `addElements()` from the `LocalDataSource` to add new nodes at the click of a button. The `LocalDataSource` then handles updating the model and notifying the `ActionDispatcher` about the update so that the view can receive an animated update.

Through methods like this, the `LocalModelSource` can also be used as a facade over the action-based API of Sprotty. It handles actions for bounds calculation and model updates.

## Diagram Server
When having the source based on which we want to generate the Diagram remotely, like in a worker or on a remote server, we can use Sprotty's DiagramServer. It communicates with the client through so-called `Action` objects which can be serialized to plain JSON. First, we of course have to create a new `DiagramServer` at our remote source. For that we can just use its constructor which looks like this:
```Typescript
constructor(dispatch: <A extends Action>(action: A) => Promise<void>, services: DiagramServices)
```
For the first parameter, we need a dispatch method to send actions from the server to the client. That can be as simple as 
```Typescript
async action => {
    connection?.sendNotification(DiagramActionNotification.type, { clientId, action })
}
```

As the second parameter, we need the `DiagramServices` from our server-side DI-container. the `DiagramServices` look like this:
```Typescript
export interface DiagramServices {
    readonly DiagramGenerator: IDiagramGenerator
    readonly ModelLayoutEngine?: IModelLayoutEngine
    readonly ServerActionHandlerRegistry?: ServerActionHandlerRegistry
}
```

Here we define our `DiagramGenerator` which the server uses to create the schema of the Diagram. 
We can also optionally define a `ModelLayoutEngine`, like the `ElkLayoutEngine` from [sprotty-elk](https://github.com/eclipse-sprotty/sprotty/tree/master/packages/sprotty-elk), if we want to do server-side layouting.
Lastly, we can define a custom `ServerActionHandlerRegistry` to overwrite the default handling of incoming actions. 

On client-side, we then need a `DiagramServerProxy` that handles the communication and forwards actions to the `ActionDipatcher`. Out of the box, Sprotty offers the `WebSocketDiagramServerProxy` for communicating through WebSockets with the `DiagramServer`.
Should a different form of communication be necessary we would have to [create a custom proxy](#creating-a-custom-model-source-proxy).

Similar to the [LocalModelSource](#local-model-source) we register the proxy as our `ModelSource`.
```Typescript
bind(TYPES.ModelSource).to(WebSocketDiagramServerProxy).inSingletonScope();
```
Then we just need to call `listen` on the ModelSource and hand it the WebSocket we're communicating with.
```Typescript
const modelSource = container.get<WebSocketDiagramServerProxy>(TYPES.ModelSource);
modelSource.listen(websocket);
```
After that communication is established and setting/updating our view should work.

## Protocols
Based on where layouting should be done there are 3 different protocols through which the `DiagramServer` and client can communicate.
On client-side, this can be configured through the `configureViewerOptions` in the dependency injection container.
```Typescript
configureViewerOptions(context, {
    needsClientLayout: false,
    needServerLayout: true,
    baseDiv: containerId
});
```

On server-side layouting options need to be set in the `DiagramServer`
```Typescript
diagramServer.setNeedsClientLayout(false);
diagramServer.setNeedsServerLayout(true);
```

### 1. No Layout Computation / Server-Only Layout

In this scenario, the server needs to provide a model with complete layout information, so that no further processing by the client is required.
- Client requests a model
    - C → S: `RequestModelAction`
    - C ← S: `SetModelAction`
- Server updates the model
    - C ← S: `UpdateModelAction`

### 2. Client-Only Layout

The server sends RequestBoundsAction to the client instead of updating the model directly. The client does not forward the resulting ComputedBoundsAction to the server because that would be an unnecessary round-trip. The updated bounds are applied locally in the client instead.
- Client requests a model
    - C → S: `RequestModelAction`
    - C ← S: `RequestBoundsAction`
- Server updates the model
    - C ← S: `RequestBoundsAction`

### 3. Client and Server Layout

Same as scenario 2, but here the `ComputedBoundsAction` is processed on the server so it can apply its own layout engine to the updated model.
- Client requests a model
    - C → S: `RequestModelAction`
    - C ← S: `RequestBoundsAction`
    - C → S: `ComputedBoundsAction`
    - C ← S: `UpdateModelAction`
- Server updates the model
    - C ← S: `RequestBoundsAction`
    - C → S: `ComputedBoundsAction`
    - C ← S: `UpdateModelAction`


## Creating a custom model source proxy
In case communication between the `DiagramServer` and client does not work through WebSockets, for example when the `DiagramServer` is running in a worker or the sprotty client is in a vscode webview (see [sprotty-vscode](https://github.com/eclipse-sprotty/sprotty-vscode)), we can easily implement our own proxy.
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

First, we need to extend `DiagramServerProxy`. This already gives us most of our needed functionality and makes this proxy a `ModelSource`.
Then we need to listen for incoming messages and pass them to the `messageReceived()` function which deserializes them and passes them to the `ActionDispatcher`.
Lastly, we only need to implement the `sendMessage()` method to allow actions coming from the `ActionDispatcher` to be transferred to the `DiagramServer`.

