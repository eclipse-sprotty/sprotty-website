
[sprotty-protocol](../globals) / SModelElement

# Interface: SModelElement

Defined in: [model.ts:24](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L24)

Base type for all elements of the diagram model.
Each model element must have a unique ID and a type that is used to look up its view.

## Extended by

- [`SModelRoot`](../Interface.SModelRoot)
- [`SShapeElement`](../Interface.SShapeElement)
- [`SEdge`](../Interface.SEdge)
- [`PreRenderedElement`](../Interface.PreRenderedElement)

## Properties

### children?

> `optional` **children**: `SModelElement`[]

Defined in: [model.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L27)

***

### cssClasses?

> `optional` **cssClasses**: `string`[]

Defined in: [model.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L28)

***

### id

> **id**: `string`

Defined in: [model.ts:26](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L26)

***

### type

> **type**: `string`

Defined in: [model.ts:25](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L25)
