
[sprotty-protocol](../globals) / IModelLayoutEngine

# Interface: IModelLayoutEngine

Defined in: [diagram-services.ts:63](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-services.ts#L63)

This service is responsible for the "macro layout" of a model, that is the positioning
and sizing of the main structural elements of a model. In a graph, macro layout affects
positions of nodes and routings of edges, but not necessarily the layout of labels and
compartments inside a node, which are often arranged on the client side ("micro layout").

## Methods

### layout()

> **layout**(`model`, `index?`): [`SModelRoot`](../Interface.SModelRoot) \| `Promise`\<[`SModelRoot`](../Interface.SModelRoot)\>

Defined in: [diagram-services.ts:64](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-services.ts#L64)

#### Parameters

##### model

[`SModelRoot`](../Interface.SModelRoot)

##### index?

[`SModelIndex`](../Class.SModelIndex)

#### Returns

[`SModelRoot`](../Interface.SModelRoot) \| `Promise`\<[`SModelRoot`](../Interface.SModelRoot)\>
