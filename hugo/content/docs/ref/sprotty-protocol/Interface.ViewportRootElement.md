
[sprotty-protocol](../globals) / ViewportRootElement

# Interface: ViewportRootElement

Defined in: [model.ts:42](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L42)

Usually the root of a model is also a viewport.

## Extends

- [`SModelRoot`](../Interface.SModelRoot).`Partial`\<[`Viewport`](../Interface.Viewport)\>.`Partial`\<[`BoundsAware`](../Interface.BoundsAware)\>

## Extended by

- [`SGraph`](../Interface.SGraph)

## Properties

### canvasBounds?

> `optional` **canvasBounds**: [`Bounds`](../Interface.Bounds)

Defined in: [model.ts:35](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L35)

#### Inherited from

[`SModelRoot`](../Interface.SModelRoot).[`canvasBounds`](../Interface.SModelRoot.md#canvasbounds)

***

### children?

> `optional` **children**: [`SModelElement`](../Interface.SModelElement)[]

Defined in: [model.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L27)

#### Inherited from

[`SModelRoot`](../Interface.SModelRoot).[`children`](../Interface.SModelRoot.md#children)

***

### cssClasses?

> `optional` **cssClasses**: `string`[]

Defined in: [model.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L28)

#### Inherited from

[`SModelRoot`](../Interface.SModelRoot).[`cssClasses`](../Interface.SModelRoot.md#cssclasses)

***

### id

> **id**: `string`

Defined in: [model.ts:26](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L26)

#### Inherited from

[`SModelRoot`](../Interface.SModelRoot).[`id`](../Interface.SModelRoot.md#id)

***

### position?

> `optional` **position**: [`Point`](../Interface.Point)

Defined in: [model.ts:135](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L135)

#### Inherited from

[`Locateable`](../Interface.Locateable).[`position`](../Interface.Locateable.md#position)

***

### revision?

> `optional` **revision**: `number`

Defined in: [model.ts:36](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L36)

#### Inherited from

[`SModelRoot`](../Interface.SModelRoot).[`revision`](../Interface.SModelRoot.md#revision)

***

### scroll?

> `optional` **scroll**: [`Point`](../Interface.Point)

Defined in: [model.ts:111](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L111)

#### Inherited from

[`Viewport`](../Interface.Viewport).[`scroll`](../Interface.Viewport.md#scroll)

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

[`SModelRoot`](../Interface.SModelRoot).[`type`](../Interface.SModelRoot.md#type)

***

### zoom?

> `optional` **zoom**: `number`

Defined in: [model.ts:123](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L123)

#### Inherited from

[`Viewport`](../Interface.Viewport).[`zoom`](../Interface.Viewport.md#zoom)
