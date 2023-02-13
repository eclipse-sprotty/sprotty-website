---
title: 'Overview'
weight: 100
---
The base architecture is inspired by Flux and other reactive web frameworks. The key feature is a unidirectional cyclic event flow. As opposed to the classical model-view-controller pattern, the event flow is always clear, will not form feedback loops and should be a lot easier to test.

{{< mermaid class="text-center" >}}
flowchart LR;
ActionHandler
ActionDispatcher
ModelSource
DiagramServer
CommandStack
SModel
Viewer
DOM
View
ActionHandler -->|Command| ActionDispatcher
ActionDispatcher -->|Action| ActionHandler
ModelSource -->|Action| ActionDispatcher
ActionDispatcher -->|Action| ModelSource
DiagramServer -.- ModelSource
ActionDispatcher -->|Command| CommandStack
SModel -.- CommandStack
CommandStack -->|SModel| Viewer
Viewer -->|Action| ActionDispatcher
Viewer -->|VDOM| DOM
View -->|VDOM| Viewer
Viewer -->|SModelElement| View
{{< /mermaid >}}

## S(protty)Model
The diagram is stored in a model called `SModel`. All elements inherit from `SModelElement`. An `SModelElement` has a unique string ID and a type to look up its `View`. The model elements are organized in a tree, induced by the properties `parent` and `children`. The root of is always an instance of `SModelRoot`, which holds an index of the model to allow fast lookup of elements by ID.

## SModel Schema
As Sprotty is also suitable for a client/server scenario, the graph model has to be serializable. The serialized JSON type of an `SModelElement` is called its schema. In the schema, cross-references are represented by IDs of the referred element. For example, an `SEdgeSchema` refers to its source using the id of its source `SNode`. Deserializing a schema to create the corresponding model is the task of an `SModelFactory`.

## SModelExtensions
`SModelExtensions` are interfaces that describe additional data of an `SModelElement` that is needed for some `Feature`, e.g.

* `Selectable`: An element can be selected.
* `Moveable`: An element can be moved.
* `BoundsAware`: An element with a width and height that can be updated.
* `Scrollable`: An element that stores an additonal Point that describes its scrolling state.
* `Zoomable`: An element that can be zoomed in and out. Zoom state is described by a number.
* `Viewport`: An SModelRoot that is both, Zoomable and Scrollable.

## SGraph
The base architecture of Sprotty does not presume that the visualization is a graph with nodes and edges. As this is a common case, we have added the graph abstractions as a library. An `SGraph` contains `SNode`s connected by `SEdge`s. `SLabel`s denote some text in the diagram, e.g. inside a node. `SCompartment`s stand for an area within a node that shows a couple of `SLabel`s, like the attribute compartment in the node for a class in a class diagram.

## Actions
`Actions` describe certain operations on the graph model. As plain JSON objects they can be serialized. They are the protocol messages that are exchanged between client and server. In actions, model elements are referred to by ID.

## Action Dispatcher
The `ActionDispatcher` receives actions either from the `Viewer` or from a `ModelSource`. It converts them to `commands` using `ActionHandlers` and passes them to the `CommandStack`. All operations on the diagram must be passed through the `ActionDispatcher`, so the `CommandStack` and the `Viewer` must never be invoked directly.

## Action Handler
An `IActionHandler` takes an action and either converts it to a `command`, thus adding the behavior, or forwards it to another component. The `ModelSource` is also an implementation of `IActionHandler` and is the entry point for the model to be visualized.

## Model Source
There are two different `ModelSources`: the `LocalModelSource` offers an API to control the model directly in the client, while the `DiagramServer` delegates to a remote source, e.g. through a WebSocket.

## Commands
`Commands` correspond to `Actions` and describe the actual behavior of the operation. They have the typical methods `execute()`, `undo()`and `redo()`, each of which take the current model and a command execution context as parameter, and return the new model or a promise for it. The latter serves to chain asynchronous commands, e.g. animations.

## Animated commands
Animated commands use an `Animation` to report updates to the Viewer on every rendering pass, during `duration` milliseconds from the start of the execution, before they resolve their promise. An example is the `MoveCommand`, which smoothly interpolates the positions between start and end position.

## Command Stack
The `CommandStack` executes the commands it receives from the `ActionDispatcher`. It chains the promises returned by the execution methods and keeps an undo and a redo stack. It merges the current commands with the last one, e.g. to only keep the start and end point of a move by drag operation. Once the new graph model is available, it is forwarded to the Viewer.

## Viewer
The `Viewer` creates a virtual DOM from the new graph model and uses it to patch the current DOM. The viewer is also responsible to add event listeners and animations using its `Decorators`.

## View
A `View` knows how to turn a graph model element and its children into a virtual DOM node.

## View Registry
The `Viewer` uses the `ViewRegistry` to look up the `View` for a graph model element using its ID.

## VNodeDecorators
`VNodeDecorators` are applied by the `Viewer` to the `View` elements, e.g. in order to register event listeners and animations.

## Mouse/Key Tool
Sprotty collects events from the DOM centrally in the `MouseTool` or `KeyTool`. These postprocessors dispatch the events to their registered `Listeners`, which usually belong to some `Feature`. `Listeners` are registered using dependency injection.

## Features
A `Feature` usually stands for some sort of interaction of the user with the diagram. It typically consists of:

* A singleton `Symbol` as an identifier. The method `SModelElement#hasFeature(feature: Symbol)` should return true if the model element supports this feature.
* An `SModelExtension` to store additional information in the model to support the feature, i.e. the (x,y)-position of a moveable element.
* Act`ions to trigger the interaction.
* `Commands` to execute the interaction.
* `Listeners` that listen to the events that trigger the interaction on the DOM elements.
* A `Module` to register all the above to the client infrastructure (see Dependency Injection).