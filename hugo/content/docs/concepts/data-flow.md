---
title: 'Data Flow'
weight: 3
---

{{< toc >}}

Now that you understand the [Core Components]({{< relref "core-components" >}}) of Sprotty's architecture, let's explore how data flows through the system. The data flow in Sprotty follows a unidirectional pattern, where all changes are initiated by actions and processed through a well-defined pipeline.

## Unilateral Data Flow

Here is how the unilateral data flow goes:

- An event occurs. For example, the application requests the data model, or a user selects a node in the diagram
- The **Model Source** reacts to this event and may send the corresponding **Action** to the **Action Dispatcher**
- The **Action Dispatcher** looks up the corresponding handler for the **Action**
- The **Action** may be converted to a **Command** and forwarded to the **Command Stack**
- The **Command Stack** executes the **Command**, resulting in a model update and notifying the **Viewer**
- The **Viewer** sends the new model to the DOM

{{< mermaid class="text-center">}}
flowchart LR
    ExternalEvent --> ModelSource
    ModelSource -->|Create Action| ActionDispatcher
    ActionDispatcher -->|Create Command| CommandStack
    CommandStack -->|Update Model| Viewer
    Viewer -->|Update DOM| DOM
{{< /mermaid>}}

## Next Steps

Understanding data flow is essential for building robust diagramming applications. In the next section, [Extension Points]({{< relref "extension-points" >}}), you'll learn how to customize and extend Sprotty's functionality by working with these data flow patterns.
