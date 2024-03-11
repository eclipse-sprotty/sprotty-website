---
title: 'Communication with Actions'
---
{{< toc >}}

Interactions between the client and server are based on an event-based protocol. Sprotty makes a distinction between two types of events: `Actions` and `Commands`. Actions are used to communicate between the client and the server, while commands are used to apply changes to the diagram on the client side.

## Actions

Actions are used to communicate between the client and the server in a bidirectional manner. They are plain JSON serializable objects so that they can easily be passed through all kinds of APIs. They can be distinguished through their `KIND` string property. For a list of available actions, see [this reference page]({{< ref "/docs/actions-reference" >}})

We can further distinguish between three types of actions:

### Action

This is a "fire and forget" event. It is sent from the client to the server, or vice versa, to notify the other side of a certain event. The other side can react to this event, but it does not need to send a response.

```typescript
export interface MyAction extends Action {
    kind: typeof MyAction.KIND
}

export namespace MyAction {
    export const KIND = 'my-action'

    export function create(): MyAction {
        return { kind: KIND }
    }
}

// for dispatching the action
dispatcher.dispatch(MyAction.create())
// or
dispatcher.dispatch({ kind: MyAction.KIND })
```

### RequestAction

This type of action is sent to request a certain piece of information. The other side is expected to respond with a `ResponseAction`.

```typescript
export interface MyRequestAction extends RequestAction {
    kind: typeof MyRequestAction.KIND
}

export namespace MyRequestAction {
    export const KIND = 'my-request-action'

    export function create(): MyRequestAction {
        return { kind: KIND }
    }
}

// for dispatching the action
const response = dispatcher.request<MyResponseAction>(MyRequestAction.create())
// or
const response = dispatcher.request({ kind: MyRequestAction.KIND })
```

### ResponseAction

This type of action is sent as a response to a `RequestAction`. It contains the requested information.

```typescript
export interface MyResponseAction extends ResponseAction {
    kind: typeof MyResponseAction.KIND
}

export namespace MyResponseAction {
    export const KIND = 'my-response-action'

    export function create(): MyResponseAction {
        return { kind: KIND }
    }
}
```

## Commands

Commands are used to apply changes to the diagram on the client side. They are triggered by their associated action.

```typescript
export class MyCommand extends Command {
    static  KIND = 'my-command'

    constructor(@inject(TYPES.Action) protected readonly action: MyAction) {
        super()
    }

    execute(context: CommandExecutionContext): CommandReturn {
        // apply changes to the diagram
    }

    undo(context: CommandExecutionContext): CommandReturn {
        // revert changes to the diagram
    }

    redo(context: CommandExecutionContext): CommandReturn {
        // re-apply changes to the diagram
    }

    // A `CommandReturn` is a SModelRootImpl, or a Promise<SModelRootImpl>, or a `CommandResult`(i.e. { model: SModelRootImpl, modelChanged: boolean, cause?: Action })
}
```

Commands need to be registered in the dependency injection container.

```typescript
const myContainer = new ContainerModule((bind, unbind, isBound, rebind) => {
    ...
    const context = { bind, isBound }
    configureCommand(context, MyCommand)
})
```

## ModelSource

A ModelSource is responsible for handling actions. A local ModelSource is used to handle actions on the client side, while a remote ModelSource is used to handle actions on the server side.

Every action that the designated ModelSource is supposed to handle needs to be registered inside the `initialize` method, and the method containing the logic for handling the action needs to be implemented in the ModelSource and selected via a switch in the `handle` method.

```typescript
// the class can extend LocalModelSource, DiagramServerProxy, or any derivative of ModelSource
export class MyModelSource extends LocalModelSource { 
    initialize(registry: ActionHandlerRegistry): void {
        super.initialize(registry)
        registry.register(MyAction.KIND, this)
    }

    handle(action: Action): void {
        switch (action.kind) {
            case MyAction.KIND:
                this.handleMyAction(action as MyAction)
                break
            default:
                super.handle(action)
        }
    }

    protected handleMyAction(action: MyAction): void {
        // handle the action
    }
}
```

## ActionDispatcher

The ActionDispatcher collects actions, converts them to command if necessary, and dispatches them to their respective handlers.

```typescript
export class ActionDispatcher implements IActionDispatcher {
    // dispatch a single action
    dispatch(action: Action): Promise<void> {
        ...
    }

    // dispatch multiple actions
    dispatchAll(actions: Action[]): Promise<void> {
        ...
    }

    // dispatch a RequestAction
    request<Res extends ResponseAction>(action: RequestAction<Res>): Promise<Res> {
        ...
    }
}
```

## Action Flow

An action (i.e. "fire and forget" event) is sent to the action dispatcher. The action dispatcher then dispatches the action to its respective handler. The handler can then react to the action and a Command may or may not be triggered on the client. Here we will look at how an Action sent from the Client is handled by the ActionDispatcher and its respective ActionHandler on the server side:

{{< mermaid class="text-center">}}
sequenceDiagram
participant C as Client
participant AD as ActionDispatcher
participant AH as ActionHandler
C ->> AD: An Action is sent to the ActionDispatcher
AD ->> AH: The Action is forwarded to the corresponding ActionHandler
AH -->> C: The Action may trigger a Command
{{</mermaid>}}

This is the simplest scenario. In reality, the ActionHandler may also send another Action to the ActionDispatcher, creating an Action chain. In most cases, the ActionHandler will apply some changes to the model and then send another action to update the model on the client side.

## RequestAction Flow

A RequestAction is sent from the client to the server. The server is expected to produce a ResponseAction as a response to the RequestAction. Here we will look at how a RequestAction sent from the Client is handled by the ActionDispatcher and its respective handler on the server side:

{{< mermaid class="text-center">}}
sequenceDiagram
participant C as Client
participant AD as ActionDispatcher
participant RAH as RequestActionHandler
participant RespAH as ResponseActionHandler
C ->> AD: A RequestAction is sent
AD ->> RAH: The RequestAction is forwarded to the corresponding ActionHandler
RAH ->> AD: A ResponseAction is sent
AD ->> RespAH: The ResponseAction is forwarded to the corresponding ActionHandler
RespAH -->> C: The Action may trigger a Command
{{</mermaid>}}
