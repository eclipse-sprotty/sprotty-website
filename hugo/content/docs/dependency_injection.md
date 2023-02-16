# Sprotty configuration and dependency injection  
As seen in the [getting started](../getting_started) guide sprotty relies heavily on dependency injection (DI) through [InversifyJs](https://inversify.io/) for configuration of its varous components. This chapter will take a closer look at how to work with this.

## Why dependency injection
DI allows us to
- not care about the instantiation and life-cycle of service components,
- manage singletons like the various registries without using the global scope,
- easily mock components in tests,
- exchange default implementations with custom ones with minimum code changes,
- modularize the configuration of specific features and scenarios and merge these modules for the final application

## The container
The DI-container is the main point of configuration. The standard in sprotty is naming the file containing the container `di.config.ts`.

```typescript
export const createContainer = (containerId: string) => {
    const myModule = new ContainerModule((bind, unbind, isBound, rebind) => {
        bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();
        const context = { bind, unbind, isBound, rebind };
        configureModelElement(context, 'graph', SGraph, SGraphView);
        configureModelElement(context, 'task', SNode, TaskNodeView);
        configureModelElement(context, 'edge', SEdge, PolylineEdgeView);
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
The container is build from multiple modules. Through `loadDefaultModules()` all modules are loaded for default sprotty functionality. we can of course also load other non default modules like the `edgeIntersectionModule` for extra functionality.

Most important is our own module where the core of the configuration happens. Here we can configure singleton scope classes like our [datasource](../datasources) or rebind default default sprotty components like for example the logger to a custom implementation. We use Symbols for bindings instead of using classes directly. All Symbols can be found in the `TYPES` object.

Through `configureModelElement` we can link our model to specific view components through the type property. Meaning if we have 
```Typescript
<SNode & TaskNode>{
            type: 'task',
            id: 'task01',
            name: 'First Task',
            isFinished: true,
            ...
}
```
in our model, sprotty will try to convert this datastructure to an instance of the actual `SNode` class and render it with the `TaskNodeView`.

lastly we configure our viewer options. Here we configure all the dom elements needed by sprotty like for example the base div where our Diagram is rendered or the hidden div used by the first render cycle for determining micro layout. Another thing configured here is layouting. Specificily should layouting be done on client or servreside or both. This also determines the protocol spoken by client and server. 

## Features
Model elements can further be configured through features. 
```typescript
configureModelElement(context, 'task', SNode, TaskNodeView, {
    enable: [customFeature],
    disable: [moveFeature]
});
```
the `configureModelElement` method takes an optional last paramter of an object containing arrays for `enabled` and `disabled` features containing Symbols representing representing those features. Through this we can disable default functionality like dragging or selecting nodes and add functionality, either custom or loaded through other non default modules.

## Dependency Injection specialities

### Multi bindings
Sometimes there is more than one implementation bound to a specific interface in Sprotty. This is when we use multi-bindings. Here is an example for the VNodeDecorators.
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

