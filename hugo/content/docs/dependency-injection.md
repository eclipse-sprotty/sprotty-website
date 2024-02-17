---
title: 'Sprotty configuration and dependency injection'
--- 
{{< toc >}}
As seen in the [getting started](../getting-started) guide, Sprotty relies heavily on dependency injection (DI) through [InversifyJs](https://inversify.io/) for the configuration of its various components. This chapter will take a closer look at how to work with this.

## Why dependency injection?

DI allows us to:

- not care about the instantiation and life-cycle of service components
- manage singletons like the various registries without using the global scope
- easily mock components in tests
- exchange default implementations with custom ones with minimum code changes
- modularize the configuration of specific features and scenarios and merge these modules for the final application

## The container

The DI-container is the main point of configuration. The standard in Sprotty is to name this file `di.config.ts`.

```typescript
export const createContainer = (containerId: string) => {
    const myModule = new ContainerModule((bind, unbind, isBound, rebind) => {
        bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();
        const context = { bind, unbind, isBound, rebind };
        configureModelElement(context, 'graph', SGraphImpl, SGraphView);
        configureModelElement(context, 'task', SNodeImpl, TaskNodeView);
        configureModelElement(context, 'edge', SEdgeImpl, PolylineEdgeView);
        configureViewerOptions(context, {
            needsClientLayout: false,
            baseDiv: containerId
        });
    });
    const container = new Container();
    loadDefaultModules(container);
    container.load(myModule, edgeIntersectionModule);
    return container;
};
```

The container is built from multiple modules. Through `loadDefaultModules()` all modules are loaded for default Sprotty functionalities. We can also load other optional modules like the `edgeIntersectionModule` for extra functionality.

Most important is our own module where the core of the configuration happens. Here we can configure singleton scope classes like our [model source](../model_sources) or rebind default Sprotty components (for example the logger) to a custom implementation. We use Symbols for bindings instead of using classes directly. All Symbols can be found in the `TYPES` object.

Using `configureModelElement` we can link our model to specific view components through the type property. Meaning if we have the following SNode,
in our model, Sprotty will try to convert this data structure to an instance of the actual `SNodeImpl` class and render it with the `TaskNodeView`.

```Typescript
<SNode & TaskNode>{
            type: 'task',
            id: 'task01',
            name: 'First Task',
            isFinished: true,
            ...
}
```

Lastly, we need to configure our viewer options. Here we configure all the DOM elements needed by Sprotty, for example the base `div` inside of which our diagram is rendered, or the hidden `div` used by the first render cycle for determining micro layout. Another thing configured here is the layout. Specifically, if layout calculation should be done on client-side, server-side or both. This also determines the protocol spoken by the client and server.

## Features

Model elements can further be configured through [features](../features).

```typescript
configureModelElement(context, 'task', SNodeImpl, TaskNodeView, {
    enable: [customFeature],
    disable: [moveFeature]
});
```

the `configureModelElement` method takes an optional object as the last parameter containing arrays for `enabled` and `disabled` features, which in turn contain Symbols representing those features. Through this, we can disable default functionality like dragging or selecting nodes and add functionality, either custom or loaded from other non-default modules.

## Creating custom components

As described previously Sprotty uses InversifyJs for dependency injection. That means when creating custom features, views, etc. we have to use this too.
As an example, let's look at Sprotty's `PolylineEdgeView`.

```Typescript
@injectable()
export class PolylineEdgeView extends RoutableView {

    @inject(EdgeRouterRegistry) edgeRouterRegistry: EdgeRouterRegistry;
    ...
}
```

The most important thing for our component to be made available in Sprotty is annotating it with [`@injectable()`](https://github.com/inversify/InversifyJS/blob/master/src/annotation/injectable.ts). Otherwise the dependency injection won't work.

Now, as seen in the example [above](#the-container), we can just bind it in the container like this:

```Typescript
configureModelElement(context, 'edge', SEdge, PolylineEdgeView);
```

After that we can use all features of inversifyJs and inject other components registered in our container with [`@inject(...)`](https://github.com/inversify/InversifyJS/blob/master/src/annotation/inject.ts)

For more information on inversifyJs have a look to their [documentation](https://github.com/inversify/InversifyJS/blob/master/wiki/readme.md)

## Dependency Injection specialties

### Multi bindings

Sometimes there is more than one implementation bound to a specific interface in Sprotty. This is when we use multi-bindings. Here is an example of the `VNodeDecorator`.

```Typescript
@multiInject(TYPES.VNodePostprocessor)@optional() protected postprocessors: VNodePostprocessor[]
```

### Provider Bindings

Sprotty's circular event flow introduces a cyclic dependency between the components `ActionDispatcher`, `CommandStack` and `Viewer`. To handle these, we have to use provider bindings like this:

```Typescript
// action-dispatcher.ts
export type IActionDispatcherProvider = () => Promise<IActionDispatcher>;
```

```Typescript
// di.config.ts 
bind(TYPES.IActionDispatcher).to(ActionDispatcher).inSingletonScope();
bind(TYPES.IActionDispatcherProvider).toProvider<IActionDispatcher>(ctx => {
    return () => {
        return new Promise<IActionDispatcher>((resolve) => {
            resolve(ctx.container.get<IActionDispatcher>(TYPES.IActionDispatcher));
        });
    };
});
```
