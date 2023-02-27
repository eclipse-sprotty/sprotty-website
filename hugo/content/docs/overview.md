---
title: 'Overview'
weight: 100
---
The base architecture of Sprotty revolves around an unidirectional cyclic flow of information between three major components: the [`ActionDispatcher`](#action-dispatcher), the [`CommandStack`](#command-stack), and the [`Viewer`](#viewer). This leads to a clear and easily testable flow of data which prevents feedback loops.

{{< mermaid class="text-center">}}
flowchart TD;
ActionDispatcher
CommandStack
Viewer
ActionDispatcher -->|Command| CommandStack
CommandStack -->|SModel| Viewer
Viewer -->|Action| ActionDispatcher
{{< /mermaid>}}

## Action Dispatcher
The main role of the `ActionDispatcher` is to receive an [`Action`](#action) and produce a corresponding command to be transmitted to the [`CommandStack`](#command-stack) using `ActionHandlers`. All operations on the diagram must be passed through the `ActionDispatcher`, so the [`CommandStack`](#command-stack) and the [`Viewer`](#viewer) must never be invoked directly.

 The `ActionDispatcher` also communicates with the [`ModelSource`](#model-source) through [`Action`](#action)s in a bidirectional manner, for example to inject external data into the loop or apply edits to the [`ModelSource`](#model-source).

{{< mermaid class="text-center">}}
flowchart LR;
ModelSource
ActionDispatcher
ModelSource -->|Action| ActionDispatcher
ActionDispatcher -->|Action| ModelSource
{{< /mermaid>}}

### Action
`Action`s are objects without behavior, JSON structures that describe what should happen but not how it should happen. As such, they can be serialized and serve as protocol messages that are exchanged between the client and the server. In actions, model elements are referred to by ID.

### Model Source
There are two different `ModelSource`s: the `LocalModelSource` offers an API to control the model directly in the client, while the `DiagramServer` delegates to a remote source, e.g. through a WebSocket or a VSCode extension.

## Command Stack
The `CommandStack` executes the commands it receives from the [`ActionDispatcher`](#action-dispatcher). It chains the promises returned by the execution methods and keeps an undo and a redo stack. It merges the current commands with the last one, e.g. to only keep the start and end point of a move by drag operation. It is responsible for producing a graph model (namely [`SModel`](#sprottymodel)) and forwards it to the [`Viewer`](#viewer) to be rendered.

## Command
`Command`s describe the behavior of their corresponding [`Action`](#action). They have the typical methods `execute()`, `undo()`and `redo()`, each of which take the current model and a command execution context as parameter, and return the new model or a promise for it. The latter serves to chain asynchronous commands such as animations.

### S(protty)Model
The diagram is stored in an internal model called `SModel`. The root of the diagram is always an instance of `SModelRoot` and holds an index of the model to allow fast lookup of elements by ID. All elements of a diagram inherit `SModelElement` which has a unique ID and a mandatory type referring to its [`View`](#view). The model elements are organized in a tree derived from the `children` and `parent` properties of each `SModelElement`. It can be useful to introduce domain-specific information into the `SModel`. This can be achieved via creating new element classes that inherits from any related `SModelElement`.

{{< mermaid class="text-center">}}
flowchart BT;
SModelElement
SShapeElement
SEdge
SNode
SPort
SLabel
CustomEdge
CustomNode
CustomPort
CustomLabel
SShapeElement --> SModelElement
SEdge --> SModelElement
CustomEdge -.-> SEdge
SNode --> SShapeElement
CustomNode -.-> SNode
SPort --> SShapeElement
CustomPort -.-> SPort
SLabel --> SShapeElement
CustomLabel -.-> SLabel
{{< /mermaid>}}

## Viewer
The `Viewer` is responsible for turning the internal model into its representation in the DOM. The conversion from an `SModel` to its representation in the DOM is not direct. Instead, Sprotty first creates a `VirtualDOM` and uses it to patch the actual DOM. This approach saves on expensive modification of the DOM by applying only the minimum amount of modification to it. 
The `Viewer` receives an [`SModel`](#sprottymodel) from the [`CommandStack`](#command-stack) and traverses it to apply a corresponding [`View`](#view) to every element.
The viewer is also responsible to add event listeners and animations using its `Decorator`s. The received events should be converted to [`Action`](#action)s and transferred to the [`ActionDispatcher`](#action-dispatcher)

{{< mermaid class="text-center">}}
flowchart LR;
Viewer
ViewRegistry
Views
VirtualDOM
DOM
Viewer --> ViewRegistry
ViewRegistry --> Views
Views -->|render| VirtualDOM
VirtualDOM -->|patch| DOM
DOM -->|event| Viewer
{{< /mermaid>}}

### View Registry
The [`Viewer`](#viewer) uses the `ViewRegistry` to look up the [`View`](#view) for a graph model element using its ID.

### View
A `View` knows how to turn a graph model element and its children into a virtual DOM node. It uses JSX technology and contains a `render` method producing one or a group of SVG elements.
