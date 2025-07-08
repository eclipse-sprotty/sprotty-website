---
title: 'Core Components'
---

{{< toc >}}

Let's dive into the four components that form the foundation of Sprotty's architecture. Understanding these components is key for building effective diagramming applications.

## Model Source

 The **Model Source** serves as the entry point for diagram data and manages the lifecycle of the diagram model. It acts as a bridge between data sources and the Sprotty event cycle.

 **Key responsibilities:**

- Model management
- Action processing

Sprotty provides two types of Model Source to accommodate different use cases":

### LocalModelSource

The `LocalModelSource` manages the model directly in the client, providing a facade over the action-based API.

**Key Features**:

- Direct model control
- Handle actions locally

**Use Cases:**

- Standalone diagram applications
- Offline-capable applications
- Client-side only diagramming tools
- Fast prototyping and demos

### DiagramServerProxy

The `DiagramServerProxy` connects to remote data sources and manages client-server communication.

**Key Features:**

- Remote communication with server
- Holds a `clientId` for multi-client scenarios
- Can handle actions locally or forward them to the server

**Use Cases:**

- Collaborative diagram editors
- Integration with backend systems
- Multi-users environment
- Cloud-based diagramming applications
- IDE Extensions (e.g. VSCode Extensions)

## Action Dispatcher

The **Action Dispatcher** is Sprotty's central nervous system, responsible for routing actions to their respective handlers and managing the flow of commands and responses throughout the application.

**Key Responsibilities:**

- Map actions to their respective handlers
- Dispatch actions and handles async request/response patterns
<!-- AI GENERATED BELOW -->

## Command Stack

The **Command Stack** is the core state management that handles all model modifications through a command pattern with undo/redo capabilities. It bridges the actions and the actual model changes.

**Key Responsibilities:**

- Manages command execution (asynchronously)
- Manages undo/redo stacks
- Coordinate model updates with the Viewer

## Viewer

The **Viewer** is the rendering engine in Sprotty that transforms the internal model into visual representations using a virtual DOM (VDOM) approach. It manages the conversion from model elements to SVG elements.

**Key Responsibilities:**

- Map model elements to their representation as SVG elements
- Applies pre and post-postprocessing to virtual nodes
- Render individual model elements and their children recursively

## Next Steps

Now that you understand the core components, explore how they work together in the [Data Flow]({{< relref "data-flow" >}}) section to see how information moves through the system and how these components coordinate to provide a seamless diagramming experience.
