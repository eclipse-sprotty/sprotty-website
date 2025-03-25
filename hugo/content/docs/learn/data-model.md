---
title: 'Data Model'
---

**Every great diagram starts with a solid data model.** In this section, you'll learn how to define the structure of your Sprotty Model (a.k.a. SModel) using default and custom TypeScript interfaces.

## Understanding Sprotty's Core Model

Sprotty organizes diagrams as a hierarchical graph structure where elements have specific roles and relationships. Let's explore the fundamental building blocks:

| Element | Description | Common Use Cases |
|---------|-------------|------------------|
| `SGraph` | The root container element that holds the entire diagram | The main diagram canvas |
| `SNode` | Visual elements with position and size | Boxes, shapes, entities, components |
| `SEdge` | Connections between nodes | Lines, arrows, relationships, flows |
| `SPort` | Specialized connection points on nodes | Input/output points, connectors, anchors |
| `SLabel` | Text elements that can attach to other elements | Titles, descriptions, annotations |

> 💡 **Key Insight**: Sprotty's model is JSON-serializable by design, enabling seamless transfer between client and server components or persistence to storage.

## Creating Your Custom Node Type

Sprotty provides a set of core interfaces in the `sprotty-protocol` package that ensure type safety across your diagram model. You can extend these interfaces to add domain-specific properties.

For our task management diagram, we'll create a custom node type by extending Sprotty's `SNode` interface. This custom type will represent tasks with specific properties such as name and status.

Create a new file called `model.ts` in your `src` directory:

```typescript
import { SNode } from 'sprotty-protocol';

export interface TaskNode extends SNode {
    name: string;        // The display name of the task
    isRunning: boolean;  // Indicates if the task is currently in progress
    isFinished: boolean; // Indicates if the task has been completed
}
```

Our `TaskNode` interface enhances the standard `SNode` with three task-specific properties:

- `name`: A descriptive string identifying the task
- `isRunning`: A boolean flag indicating whether the task is currently active
- `isFinished`: A boolean flag indicating whether the task has been completed

## Building Your Diagram Model

Now we'll create the actual diagram model data structure that defines our task management diagram. This model will include multiple task nodes and their relationships.

Create a new file called `model-source.ts` in your `src` directory:

```typescript
import { SEdge, SGraph } from 'sprotty-protocol';
import { TaskNode } from './model';

export const graph: SGraph = {
    type: 'graph',
    id: 'graph',
    children: [
        <TaskNode>{
            type: 'task',
            id: 'task01',
            name: 'First Task',
            isFinished: true,
            isRunning: false,
            position: { x: 0, y: 0 },
            size: { width: 100, height: 100 }
        },
        <TaskNode>{
            type: 'task',
            id: 'task02',
            name: 'Second Task',
            isFinished: false,
            isRunning: true,
            position: { x: 0, y: 200 },
            size: { width: 100, height: 100 }
        },
        <TaskNode>{
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

## Breaking Down the Model

Let's examine the key components of our SModel:

### The Root Graph Element

```typescript
export const graph: SGraph = {
    type: 'graph',
    id: 'graph',
    children: [ /* ... */ ]
};
```

This creates the root container for our diagram—an `SGraph` with a unique identifier and an array of child elements. All diagram elements must be descendants of this root element.

### Task Node Elements

Each task node in our model contains:

- A unique `id` for identification and referencing
- A `type` value ('task') that links to the appropriate view (more on that in the next chapters...)
- Precise positioning (`position.x`, `position.y`) and dimensions (`size.width`, `size.height`)
- Domain-specific properties that define the task's state (`name`, `isRunning`, `isFinished`)

### Edge Connection Element

```typescript
<SEdge>{
    type: 'edge',
    id: 'edge01',
    sourceId: 'task01',
    targetId: 'task02',
    routerKind: 'manhattan',
}
```

This edge element creates a visual connection between two tasks, where:

- `sourceId` references the starting node (First Task)
- `targetId` references the ending node (Second Task)
- `routerKind: 'manhattan'` specifies a routing algorithm that draws the connection with right-angle turns, similar to city streets

## Understanding the Model Semantics

Our completed model represents a simple task workflow with the following relationships:

- **First Task** (completed) → connects to → **Second Task** (in progress)
- **Third Task** (not started) remains disconnected from the workflow

This structure demonstrates a sequential dependency where the second task can only begin after the first task is finished.

## Project Structure So Far

At this point, your project structure should look like this:

```bash
hello-world/
├── node_modules/        # Dependencies installed by npm
├── package.json         # Project configuration
├── package-lock.json    # Dependency lock file
├── tsconfig.json        # TypeScript configuration
├── src/
│   ├── model.ts         # Custom node type definitions
│   └── model-source.ts  # Diagram model data structure
└── static/
    └── index.html       # HTML entry point
```

We've created two key files that define our diagram's data model:

- `src/model.ts` - Contains our `TaskNode` interface definition
- `src/model-source.ts` - Contains the actual diagram model with nodes and edges

In the next sections, we'll add more files to create views for rendering our model and wire everything together.

## What's Next?

In the next section, we'll learn how to [create custom views]({{< ref "/docs/learn/views" >}}) that transform this data model into visually appealing SVG elements. The views will use the properties we've defined to create visual distinctions between tasks in different states.
