---
title: 'Dependency Injection'
---

**It's time to wire everything together!** In this section, you'll learn how to use dependency injection to connect your model and views, creating a cohesive diagram application.

## What is Dependency Injection?

Dependency injection is a design pattern that helps manage complex applications by:

1. **Decoupling components** - Each part of your application can be developed and tested independently
2. **Centralizing configuration** - All connections between components are defined in one place
3. **Enabling extensibility** - New components can be easily added without changing existing code

> 💡 **Key Insight**: Sprotty uses [InversifyJS](https://inversify.io/), a powerful dependency injection framework for TypeScript, to manage its components.

## Creating Your DI Configuration

Let's create a configuration that connects your model elements to their view implementations and sets up the diagram viewer.

Create a new file called `di.config.ts` in your `src` directory:

```typescript
import { Container, ContainerModule } from 'inversify';
import {
    configureModelElement, configureViewerOptions, ConsoleLogger, loadDefaultModules,
    LocalModelSource, LogLevel, PolylineEdgeView, RectangularNode, SEdgeImpl,
    SGraphImpl, SGraphView, SRoutingHandleImpl, SRoutingHandleView, TYPES
} from 'sprotty';
import { TaskNodeView } from './views';

export default (containerId: string) => {
    const myModule = new ContainerModule((bind, unbind, isBound, rebind) => {
        bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();
        rebind(TYPES.ILogger).to(ConsoleLogger).inSingletonScope();
        rebind(TYPES.LogLevel).toConstantValue(LogLevel.log);

        const context = { bind, unbind, isBound, rebind };
        configureModelElement(context, 'graph', SGraphImpl, SGraphView);
        configureModelElement(context, 'task', RectangularNode, TaskNodeView);
        configureModelElement(context, 'edge', SEdgeImpl, PolylineEdgeView);
        configureModelElement(context, 'routing-point', SRoutingHandleImpl, SRoutingHandleView);
        configureModelElement(context, 'volatile-routing-point', SRoutingHandleImpl, SRoutingHandleView);

        configureViewerOptions(context, {
            needsClientLayout: false,
            baseDiv: containerId
        });
    });

    const container = new Container();
    loadDefaultModules(container);
    container.load(myModule);
    return container;
}
```

## Understanding the Configuration

Let's break down this configuration into manageable parts:

### Module Creation

```typescript
const myModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    // Configuration goes here
});
```

This creates a new InversifyJS module that will contain all our bindings. The function parameters provide methods to register and manage dependencies.

### Core Services

```typescript
bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();
rebind(TYPES.ILogger).to(ConsoleLogger).inSingletonScope();
rebind(TYPES.LogLevel).toConstantValue(LogLevel.log);
```

These lines configure essential Sprotty services:

- `ModelSource` - Provides the model data (we're using `LocalModelSource` for client-only diagrams)
- `ILogger` - Handles logging (we're using `ConsoleLogger` to log to the browser console)
- `LogLevel` - Sets the logging verbosity

### Model Element Configuration

```typescript
const context = { bind, unbind, isBound, rebind };
configureModelElement(context, 'graph', SGraphImpl, SGraphView);
configureModelElement(context, 'task', RectangularNode, TaskNodeView);
configureModelElement(context, 'edge', SEdgeImpl, PolylineEdgeView);
configureModelElement(context, 'routing-point', SRoutingHandleImpl, SRoutingHandleView);
configureModelElement(context, 'volatile-routing-point', SRoutingHandleImpl, SRoutingHandleView);
```

This is where the magic happens! Each `configureModelElement` call maps a model element type to:

1. A model implementation class that handles the element's behavior and data
2. A view implementation class that handles the element's rendering

| Type | Model Implementation | View Implementation | Purpose |
|------|---------------------|---------------------|---------|
| 'graph' | SGraphImpl | SGraphView | The root diagram element |
| 'task' | RectangularNode | TaskNodeView | Our custom task nodes |
| 'edge' | SEdgeImpl | PolylineEdgeView | Connections between tasks |
| 'routing-point' | SRoutingHandleImpl | SRoutingHandleView | Handles for edge routing |
| 'volatile-routing-point' | SRoutingHandleImpl | SRoutingHandleView | Handles for edge routing |

### Viewer Options

```typescript
configureViewerOptions(context, {
    needsClientLayout: false,
    baseDiv: containerId
});
```

This configures options for the diagram viewer:

- `needsClientLayout: false` - We're providing explicit positions for our elements
- `baseDiv: containerId` - The ID of the HTML element where the diagram will be rendered

### Container Setup

```typescript
const container = new Container();
loadDefaultModules(container);
container.load(myModule);
return container;
```

Finally, we:

1. Create a new InversifyJS container
2. Load Sprotty's default modules (providing core functionality)
3. Load our custom module
4. Return the configured container

## The Power of Type Mapping

The most important concept to understand is how Sprotty uses the type string to map model elements to their implementations and views:

1. In your model, you specify a `type` property (e.g., `type: 'task'`)
2. In your DI configuration, you map that type to implementations (e.g., `configureModelElement(context, 'task', RectangularNode, TaskNodeView)`)
3. When Sprotty renders your diagram, it uses this mapping to find the right view for each element

This powerful mechanism allows you to:

- Use different views for the same model element type in different contexts
- Extend existing element types with new behaviors
- Create completely custom element types with specialized rendering

## Project Structure So Far

After adding dependency injection, your project structure has grown to include:

```bash
hello-world/
├── node_modules/        # Dependencies installed by npm
├── package.json         # Project configuration
├── package-lock.json    # Dependency lock file
├── tsconfig.json        # TypeScript configuration
├── src/
│   ├── model.ts         # Custom node type definitions
│   ├── model-source.ts  # Diagram model data structure
│   ├── views.tsx        # Custom view implementations
│   └── di.config.ts     # Dependency injection configuration
└── static/
    ├── index.html       # HTML entry point
    └── styles.css       # CSS styling for the diagram
```

The new file we've created in this section:

- `src/di.config.ts` - The dependency injection configuration that connects our models to views and sets up the diagram infrastructure

This configuration is the "glue" that ties all of our components together, creating a coherent system where:

- Models provide the data structure
- Views handle the rendering
- Dependency injection connects them according to type mappings

## What's Next?

In the next section, we'll [put everything together]({{< ref "/docs/learn/putting-it-together" >}}) to create a working diagram application.
