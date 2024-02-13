---
title: 'sportty-elk'
---

{{< toc >}}

The `sprotty-elk` module provides a layout engine for Sprotty diagrams based on the Eclipse Layout Kernel (ELK).

## Configuration

In order to use ELK with Sprotty, several steps need to be done in order to inject the required components into the Sprotty container. If you are not already familiar with Sprotty's dependency injection, you should first read the [Sprotty documentation](../dependency_injection).

A good example of how to use ELK with Sprotty can be found in the [random graph example](https://github.com/eclipse-sprotty/sprotty/blob/master/examples/random-graph/src/di.config.ts).

### Create a new Elk Factory

Outside of the `ContainerModule`, you need to create a new `ElkFactory`.

```typescript
import { ElkFactory } from 'sprotty-elk/lib/inversify';
import ElkConstructor from 'elkjs/lib/elk.bundled.js';

export default (containerId: string) => {
    ...
    const elkFactory: ElkFactory = () => new ElkConstructor({
        algorithms: [], // array of layout algorithms to be integrated into the layout engine
        defaultLayoutOptions: {}, // default layout options to be used by the layout engine
        workerUrl: 'url' // URL to the ELK worker (elk-worker.js). If set, ELK will use a web worker to perform the layout computation
    });

}
```

All parameters in the `ElkConstructor` are optional. The `algorithms` parameter is an array of layout algorithms to be integrated into the layout engine. By default `layered`, `stress`, `mrtree`, `radial`, `force`, and `disco` are available. If you want to use a different algorithm, you need to specify it in the `algorithms` parameter. Note that `box`, `fixed`, and `random` are always included.

### Bind the ElkFactory to the ContainerModule

The ElkFactory needs to be bound in the `ContainerMoule`.

```typescript
const myModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    ...
    bind(ElkFactory).toFactory(elkFactory);
});
```

### Bind the ElkLayoutEngine to the ContainerModule

```typescript
const myModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    ...
    bind(TYPES.IModelLayoutEngine).toService(ElkLayoutEngine);
});
```

### Bind the LayoutConfigurator to the ContainerModule

```typescript
const myModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    ...
    bind(MyLayoutConfigurator).toSelf().inSingletonScope();
    rebind(ILayoutConfigurator).to(RandomGraphLayoutConfigurator).inSingletonScope();
});
```

### Load the ElkLayoutModule to the Container

```typescript
const container = new Container();
    loadDefaultModules(container);
    container.load(elkLayoutModule, myModule);
    return container;
```

## Process

1. The Sprotty SModel is turned into an ELK graph.
2. Optional preprocessing of the ELK graph.
3. The ELK graph is laid out.
4. Optional postprocessing of the ELK graph.
5. Position and size information is transferred to the Sprotty SModel.

## Transformation of an SModel to an ELK graph

An ELK graph is comprised of ElkNodes, ElkEdges, ElkPorts, and ElkLabels. On the other hand, a SModel can be comprised of an arbitrary number of nodes, edges, ports, and labels subtypes.

The first thing we need to do is transform our SModel elements to ELK elements. This relies heavily on the `basic_type:sub_type` syntax. Only the basic type is considered when transforming SModel elements to their Elk counterpart. For example, an SModel node with the type `node:my_type` will be transformed into an ElkNode. Similarly, SModel elements of basic type `edge` will be transformed into an ElkEdge, `label` to ElkLabel, and `port` to ElkPort.

This transformation is done by the `ElkLayoutEngine` class, via the `transformGraph` method. The `transformGraph` method will traverse the SModel from its root (which is turned into an ElkNode instance) and transform its children into Elk elements. Every transformation of an SModel element is accompanied by the transformation of its children, if any.

The root element of the SModel **must be** of basic type `graph`.

## Preprocessing

Once the SModel has been transformed into an ELK graph, we can apply some preprocessing to the graph. This is done by implementing a class implementing the `ILayoutPreprocessor` interface, and passing it to the constructor of the `ElkLayoutEngine`. The preprocessor class needs to implement a `preprocess` method, which will receive the ELK graph, the Sprotty graph, and the index.

By default, no preprocessing is done.

## Layout

After preprocessing, the ELK graph is laid out. During that time, ELK will apply layout options to the respective ELK graph elements. By default, no options are applied.

In order to apply your own set of options to the layout engine, you need to implement a class extending the `DefaultLayoutConfigurator`.

```typescript
export class MyLayoutConfigurator extends DefaultLayoutConfigurator {
    // options for the graph element
    protected override graphOptions(sgraph: SGraph, index: SModelIndex): LayoutOptions | undefined {
        return {"optionKey": "optionValue"};
    }
    
    // options for node elements
    protected override nodeOptions(snode: SNode, index: SModelIndex): LayoutOptions | undefined {
        return {"optionKey": "optionValue"};
    }

    // options for edge elements
    protected override edgeOptions(sedge: SEdge, index: SModelIndex): LayoutOptions | undefined {
        return {"optionKey": "optionValue"};
    }

    // options for label elements
    protected override labelOptions(slabel: SLabel, index: SModelIndex): LayoutOptions | undefined {
        return {"optionKey": "optionValue"};
    }

    // options for port elements
    protected override portOptions(sport: SPort, index: SModelIndex): LayoutOptions | undefined {
        return {"optionKey": "optionValue"};
    }
}
```

The complete list of available options can be found in the [ELK documentation](https://eclipse.dev/elk/reference.html).

## Postprocessing

Once the ELK graph has been laid out, we can apply some postprocessing to the graph. This is done by implementing a class implementing the `ILayoutPostprocessor` interface, and passing it to the constructor of the `ElkLayoutEngine`. The postprocessor class needs to implement a `postprocess` method, which will receive the ELK graph, the Sprotty graph, and the index. This postprecessor should be used to apply any changes to the ELK graph that are not possible to be done during the layout phase.

## Back to the SModel

Once the ELK graph has been laid out and postprocessed, the position and size information is transferred back to the SModel.
