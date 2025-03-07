---
title: 'Communication and Protocols'
---
{{< toc >}}
Sprotty uses actions to communicate between `ModelSource` and `ActionDispatcher` regardless if the model source is local or remote.
The core of this communication follows specific protocols. This Chapter will give an overview of these protocols and their used actions.

## Actions

Actions are plain JSON serializable objects so that they can easily be passed through all kinds of APIs. They can be distinguished through their `KIND` string property.
In this section, the most important actions for understanding the basic communication protocols are described.
For more info on existing actions see [actions.ts](https://github.com/eclipse-sprotty/sprotty/blob/master/packages/sprotty-protocol/src/actions.ts)

### ComputedBoundsAction

Sent from the client to the model source to transmit the result of bounds computation for micro-layout.
This is sent as a response to a RequestBoundsAction

### RequestBoundsAction

Sent from the model source to the client to request bounds for the given model. This triggers the micro-layout computation.

### RequestModelAction

Sent from client to model source to request a new model. Usually, this is the first action sent to initiate the communication.
Optionally this can contain an `options` object containing configuration for the `DiagramServer`, like properties for `needsClientLayout` and `needsServerLayout`.

### SetModelAction

Sent from the model source to the client to set the model. It contains the schema for the new graph.
Should a model already exist in the client, it is overwritten.

### UpdateModelAction

Sent from model source to client to update the current model. Allows animating the transition from the old to the new model and contains properties for the transition.

## Protocols

Based on where layouting should be done there are 3 different protocols through which the `DiagramServer` and client can communicate.
On the client-side, this can be configured through the `configureViewerOptions` in the dependency injection container.

```Typescript
configureViewerOptions(context, {
    needsClientLayout: false,
    needServerLayout: true,
    baseDiv: containerId
});
```

On the server-side layout options need to be set in the `DiagramServer`

```Typescript
diagramServer.setNeedsClientLayout(false);
diagramServer.setNeedsServerLayout(true);
```

### 1. No Layout Computation / Server-Only Layout

In this scenario, the server needs to provide a model with complete layout information, so that no further processing by the client is required.
{{< mermaid class="text-center">}}
sequenceDiagram
participant C as Client
participant S as Server
Note over C,S: Client requests model
C->>S: RequestModelAction
S->>C: SetModelAction
Note over C,S: Server updates model
loop when model changes
    S->>C: UpdateModelAction
end
{{< /mermaid>}}
First the client requests and receives the model from the server. After that, the server can update the model whenever necessary.

### 2. Client-Only Layout

The server sends `RequestBoundsAction` (highlighted in yellow) to the client instead of updating the model directly. The client does not forward the resulting `ComputedBoundsAction` to the server because that would be an unnecessary round-trip. The updated bounds are applied locally in the client instead.
{{< mermaid class="text-center">}}
sequenceDiagram
participant C as Client
participant S as Server
Note over C,S: Client requests model
C->>S: RequestModelAction
rect rgb(240, 240, 180, .4)
    S->>C: RequestBoundsAction
end
Note over C,S: Server updates model
loop when model changes
    rect rgb(240, 240, 180, .4)
        S->>C: RequestBoundsAction
    end
end
{{< /mermaid>}}
This is very similar to scenario 1 (with server-only layout). However, instead of `SetModelAction` and `UpdateModelAction` we use the `RequestBoundsAction` which contains the full graph

### 3. Client and Server Layout

This is similar to the second scenario above, but here the `ComputedBoundsAction` is processed on the server so it can apply its own layout engine to the updated model.
{{< mermaid class="text-center">}}
sequenceDiagram
participant C as Client
participant S as Server
Note over C,S: Client requests model
C ->> S: RequestModelAction
S ->> C: RequestBoundsAction
C ->> S: ComputedBoundsAction
S ->> C: UpdateModelAction
Note over C,S: Server updates model
loop when model changes
    S ->> C: RequestBoundsAction
    C ->> S: ComputedBoundsAction
    S ->> C: UpdateModelAction
end
{{< /mermaid>}}
