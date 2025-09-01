
[sprotty-protocol](../globals) / SNode

# Interface: SNode

Defined in: [model.ts:63](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L63)

Model element class for nodes, which are the main entities in a graph. A node can be connected to
another node via an SEdge. Such a connection can be direct, i.e. the node is the source or target of
the edge, or indirect through a port, i.e. it contains an SPort which is the source or target of the edge.

## Extends

- [`SShapeElement`](../Interface.SShapeElement).`Partial`\<[`LayoutContainer`](../Interface.LayoutContainer)\>.`Partial`\<[`Selectable`](../Interface.Selectable)\>.`Partial`\<[`Hoverable`](../Interface.Hoverable)\>.`Partial`\<[`Fadeable`](../Interface.Fadeable)\>

## Properties

### anchorKind?

> `optional` **anchorKind**: `string`

Defined in: [model.ts:64](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L64)

***

### children?

> `optional` **children**: [`SModelElement`](../Interface.SModelElement)[]

Defined in: [model.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L27)

#### Inherited from

[`SShapeElement`](../Interface.SShapeElement).[`children`](../Interface.SShapeElement.md#children)

***

### cssClasses?

> `optional` **cssClasses**: `string`[]

Defined in: [model.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L28)

#### Inherited from

[`SShapeElement`](../Interface.SShapeElement).[`cssClasses`](../Interface.SShapeElement.md#cssclasses)

***

### hoverFeedback?

> `optional` **hoverFeedback**: `boolean`

Defined in: [model.ts:209](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L209)

#### Inherited from

[`Hoverable`](../Interface.Hoverable).[`hoverFeedback`](../Interface.Hoverable.md#hoverfeedback)

***

### id

> **id**: `string`

Defined in: [model.ts:26](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L26)

#### Inherited from

[`SShapeElement`](../Interface.SShapeElement).[`id`](../Interface.SShapeElement.md#id)

***

### layout?

> `optional` **layout**: [`LayoutKind`](../TypeAlias.LayoutKind)

Defined in: [model.ts:179](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L179)

#### Inherited from

[`LayoutContainer`](../Interface.LayoutContainer).[`layout`](../Interface.LayoutContainer.md#layout)

***

### layoutOptions?

> `optional` **layoutOptions**: [`ModelLayoutOptions`](../Interface.ModelLayoutOptions)

Defined in: [model.ts:150](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L150)

#### Inherited from

[`LayoutableChild`](../Interface.LayoutableChild).[`layoutOptions`](../Interface.LayoutableChild.md#layoutoptions)

***

### opacity?

> `optional` **opacity**: `number`

Defined in: [model.ts:217](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L217)

#### Inherited from

[`Fadeable`](../Interface.Fadeable).[`opacity`](../Interface.Fadeable.md#opacity)

***

### position?

> `optional` **position**: [`Point`](../Interface.Point)

Defined in: [model.ts:135](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L135)

#### Inherited from

[`Locateable`](../Interface.Locateable).[`position`](../Interface.Locateable.md#position)

***

### selected?

> `optional` **selected**: `boolean`

Defined in: [model.ts:201](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L201)

#### Inherited from

[`Selectable`](../Interface.Selectable).[`selected`](../Interface.Selectable.md#selected)

***

### size?

> `optional` **size**: [`Dimension`](../Interface.Dimension)

Defined in: [model.ts:142](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L142)

#### Inherited from

[`BoundsAware`](../Interface.BoundsAware).[`size`](../Interface.BoundsAware.md#size)

***

### type

> **type**: `string`

Defined in: [model.ts:25](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L25)

#### Inherited from

[`SShapeElement`](../Interface.SShapeElement).[`type`](../Interface.SShapeElement.md#type)
