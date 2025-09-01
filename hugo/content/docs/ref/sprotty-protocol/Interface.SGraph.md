
[sprotty-protocol](../globals) / SGraph

# Interface: SGraph

Defined in: [model.ts:48](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L48)

Root element for graph-like models.

## Extends

- [`ViewportRootElement`](../Interface.ViewportRootElement).`Partial`\<[`LayoutableChild`](../Interface.LayoutableChild)\>

## Properties

### ~~bounds?~~

> `optional` **bounds**: [`Bounds`](../Interface.Bounds)

Defined in: [model.ts:52](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L52)

#### Deprecated

Use `position` and `size` instead.

***

### canvasBounds?

> `optional` **canvasBounds**: [`Bounds`](../Interface.Bounds)

Defined in: [model.ts:35](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L35)

#### Inherited from

[`ViewportRootElement`](../Interface.ViewportRootElement).[`canvasBounds`](../Interface.ViewportRootElement.md#canvasbounds)

***

### children

> **children**: [`SModelElement`](../Interface.SModelElement)[]

Defined in: [model.ts:49](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L49)

#### Overrides

[`ViewportRootElement`](../Interface.ViewportRootElement).[`children`](../Interface.ViewportRootElement.md#children)

***

### cssClasses?

> `optional` **cssClasses**: `string`[]

Defined in: [model.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L28)

#### Inherited from

[`ViewportRootElement`](../Interface.ViewportRootElement).[`cssClasses`](../Interface.ViewportRootElement.md#cssclasses)

***

### id

> **id**: `string`

Defined in: [model.ts:26](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L26)

#### Inherited from

[`ViewportRootElement`](../Interface.ViewportRootElement).[`id`](../Interface.ViewportRootElement.md#id)

***

### layoutOptions?

> `optional` **layoutOptions**: [`ModelLayoutOptions`](../Interface.ModelLayoutOptions)

Defined in: [model.ts:150](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L150)

#### Inherited from

[`LayoutableChild`](../Interface.LayoutableChild).[`layoutOptions`](../Interface.LayoutableChild.md#layoutoptions)

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

[`ViewportRootElement`](../Interface.ViewportRootElement).[`revision`](../Interface.ViewportRootElement.md#revision)

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

[`ViewportRootElement`](../Interface.ViewportRootElement).[`type`](../Interface.ViewportRootElement.md#type)

***

### zoom?

> `optional` **zoom**: `number`

Defined in: [model.ts:123](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L123)

#### Inherited from

[`Viewport`](../Interface.Viewport).[`zoom`](../Interface.Viewport.md#zoom)
