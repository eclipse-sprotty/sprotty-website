---
title: 'Communication and protocols'
weight: 500
---
Sportty uses actions to communicate between `ModelSource` and `ActionDispatcher` regardless of if the model source is local or remote. 
The core of this communication follows specific protocols. This Chapter tries to give an overview of the protocols and their used actions.
## Actions
Actions are plain JSON serializable objects so that they can easily be passed through all kinds of APIs. They can be distinguished through their `KIND` string property.
In this section, the most important actions for understanding the basic communication protocols are described.
For more info on existing actions see [actions.ts](https://github.com/eclipse-sprotty/sprotty/blob/master/packages/sprotty-protocol/src/actions.ts)  
### ComputedBoundsAction
Sent from the client to the model source to transmit the result of bounds
computation for micro-layout as a response to a RequestBoundsAction

### RequestBoundsAction
Sent from the model source to the client to request bounds for the given model. This triggers the micro-layout computation.
### RequestModelAction
This is sent from client to model source to request a new model. Usually, this is the first action sent to initiate the communication.
optionally this can contain an `options` object containing configuration for the `DiagramServer`, like properties for `needsClientLayout` and `needsServerLayout`
### SetModelAction
This is sent from the model source to the client to set the model. It contains the schema for the new graph.
Should a model already exist in the client, it is overwritten.
### UpdateModelAction
Sent from model source to client to update the current model. Allows animating the transition from the old to the new model and contains properties for that.

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
In this, first the client requests and receives the model from the server. After that, the server can update the model whenever necessary.

### 2. Client-Only Layout

The server sends RequestBoundsAction to the client instead of updating the model directly. The client does not forward the resulting ComputedBoundsAction to the server because that would be an unnecessary round-trip. The updated bounds are applied locally in the client instead.
{{< mermaid class="text-center">}}
sequenceDiagram
participant C as Client
participant S as Server
Note over C,S: Client requests model
C->>S: RequestModelAction
S->>C: RequestBoundsAction
Note over C,S: Server updates model
loop when model changes
    S->>C: RequestBoundsAction
end
{{< /mermaid>}}
This is very similiar to 1. only that insted of `SetModelAction` and `UpdateModelAction` we only use the `RequestBoundsAction` which also contains the full graph

### 3. Client and Server Layout

Same as scenario 2, but here the `ComputedBoundsAction` is processed on the server so it can apply its own layout engine to the updated model.
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

