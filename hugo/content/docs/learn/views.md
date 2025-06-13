---
title: 'Views'
---

**Now it's time to bring your diagram to life!** In this section, you'll learn how to create custom views that transform your data model into beautiful, interactive SVG elements.

## How Sprotty Rendering Works

Sprotty uses a powerful rendering system that maps model elements to view implementations. When your diagram is rendered:

1. Sprotty traverses your model tree
2. For each element, it finds the corresponding view implementation
3. The view converts the model element into SVG elements
4. These SVG elements are composed to create your complete diagram

> 💡 **Key Insight**: Sprotty uses [snabbdom](https://github.com/snabbdom/snabbdom), a virtual DOM library, to efficiently update only the parts of the diagram that change.

## Creating a Custom Task Node View

Let's create a view for our `TaskNode` type that will render each task as a rectangle with its name and visual indicators for its status.

Create a new file called `views.tsx` in your `src` directory:

```typescript
/** @jsx svg */
import { svg } from 'sprotty/lib/lib/jsx';
import { injectable } from 'inversify';
import { VNode } from 'snabbdom';
import { IView, RenderingContext, SNodeImpl } from 'sprotty';
import { TaskNode } from './model';

@injectable()
export class TaskNodeView implements IView {
    render(node: Readonly<SNodeImpl & TaskNode>, context: RenderingContext): VNode {
        return <g>
            <rect class-sprotty-node={true}
                class-task={true}
                class-running={node.isRunning}
                class-finished={node.isFinished}
                class-selected={node.selected}
                class-mouseover={node.hoverFeedback}
                width={node.size.width}
                height={node.size.height} >
            </rect>
            <text x={node.size.width / 2} y={node.size.height / 2 + 5}>{node.name}</text>
            {context.renderChildren(node)}
        </g>;
    }
}
```

## Understanding the View Code

Let's break down the key parts of our view implementation:

### JSX for SVG

```typescript
/** @jsx svg */
import { svg } from 'sprotty/lib/lib/jsx';
```

These lines enable JSX syntax for creating SVG elements. The `@jsx svg` comment tells the TypeScript compiler to use the `svg` function for JSX expressions.

> 💡 **Hint**: Be sure that jsx is enabled in the tsconfig.

### The View Class

```typescript
@injectable()
export class TaskNodeView implements IView {
    render(node: Readonly<SNodeImpl & TaskNode>, context: RenderingContext): VNode {
        // ...
    }
}
```

- The `@injectable()` decorator makes this class available for dependency injection
- The class implements Sprotty's `IView` interface
- The `render` method takes a node and a rendering context, and returns a virtual DOM node

### Creating SVG Elements

```typescript
return <g>
    <rect class-sprotty-node={true}
        class-task={true}
        class-running={node.isRunning}
        class-finished={node.isFinished}
        class-selected={node.selected}
        class-mouseover={node.hoverFeedback}
        width={node.size.width}
        height={node.size.height} >
    </rect>
    <text x={node.size.width / 2} y={node.size.height / 2 + 5}>{node.name}</text>
    {context.renderChildren(node)}
</g>;
```

This JSX code creates:

- An SVG group (`<g>`) that contains all elements for this node
- A rectangle (`<rect>`) with dynamic CSS classes based on the node's state
- A text element (`<text>`) centered in the rectangle, displaying the node's name
- Any children of the node, rendered using the context

## Dynamic Styling with CSS Classes

The `class-*` attributes in our view are a special Sprotty syntax that adds CSS classes conditionally:

| Attribute | Effect |
|-----------|--------|
| `class-sprotty-node={true}` | Always adds the 'sprotty-node' class |
| `class-task={true}` | Always adds the 'task' class |
| `class-running={node.isRunning}` | Adds the 'running' class only if `node.isRunning` is true |
| `class-finished={node.isFinished}` | Adds the 'finished' class only if `node.isFinished` is true |
| `class-selected={node.selected}` | Adds the 'selected' class when the node is selected |
| `class-mouseover={node.hoverFeedback}` | Adds the 'mouseover' class when the mouse is over the node |

## Styling Your Diagram with CSS

Now, let's create a CSS file to style our diagram elements. Create a file called `styles.css` in your `static` directory:

```css
body > .sprotty {
    height: calc(100vh - 22px);
    border: 3px solid #eee;
}

.sprotty-graph {
    height: 100%;
    width: 100%;
}

/* Task node styling */
.sprotty-node.task {
    fill: #c0e0fc;
    stroke: #444;
    stroke-width: 1;
}

.sprotty-node.task.mouseover {
    stroke: #bebebe;
}

.sprotty-node.task.selected {
    stroke-width: 2;
}

.sprotty-node.task.running {
    fill: #b54949;
}

.sprotty-node.task.finished {
    fill: #81BB41;
}

/* Edge styling */
.sprotty-edge {
    fill: none;
    stroke: #252525;
    stroke-width: 2px;
}

.sprotty-edge.mouseover {
    stroke: #949494;
}

.sprotty-routing-handle {
    fill: #bebebe;
    stroke: #949494;
    stroke-width: 2px;
}

/* Text styling */
text {
    stroke-width: 0;
    fill: #000;
    font-family: sans-serif;
    font-size: 10pt;
    text-anchor: middle;
}
```

## CSS Styling Explained

Our CSS defines styles for different elements and states:

### Container Styling

- `.sprotty` sets the size and border of the diagram container
- `.sprotty-graph` ensures the graph fills the container

### Node Styling

- `.sprotty-node.task` sets the default appearance of task nodes (light blue with dark border)
- `.sprotty-node.task.running` changes the color to red for running tasks
- `.sprotty-node.task.finished` changes the color to green for finished tasks
- `.sprotty-node.task.selected` and `.sprotty-node.task.mouseover` provide visual feedback for interaction

### Edge and Text Styling

- `.sprotty-edge` styles the connections between nodes
- `text` styles the text elements in our diagram

## Visual Result

With these styles, our diagram will have:

- Blue rectangles for waiting tasks
- Red rectangles for running tasks
- Green rectangles for finished tasks
- Dark lines connecting related tasks
- Clear text labels for each task

## Project Structure So Far

After completing this section, your project structure has expanded to include:

```bash
hello-world/
├── node_modules/        # Dependencies installed by npm
├── package.json         # Project configuration
├── package-lock.json    # Dependency lock file
├── tsconfig.json        # TypeScript configuration
├── src/
│   ├── model.ts         # Custom node type definitions
│   ├── model-source.ts  # Diagram model data structure
│   └── views.tsx        # Custom view implementations
└── static/
    ├── index.html       # HTML entry point
    └── styles.css       # CSS styling for the diagram
```

We've added two important files to our project:

- `src/views.tsx` - Contains our `TaskNodeView` implementation for rendering task nodes
- `static/styles.css` - Contains CSS styles that enhance the visual appearance of our diagram

These additions provide the visual representation layer for our diagram, transforming the abstract data model into concrete SVG elements with appealing styles.

## What's Next?

In the next section, we'll learn how to [configure dependency injection]({{< ref "/docs/learn/dependency-injection" >}}) to wire everything together.
