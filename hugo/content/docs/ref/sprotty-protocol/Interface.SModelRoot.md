
[sprotty-protocol](../globals) / SModelRoot

# Interface: SModelRoot

Defined in: [model.ts:34](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L34)

Base type for the root element of the diagram model tree.

## Extends

- [`SModelElement`](../Interface.SModelElement)

## Extended by

- [`ViewportRootElement`](../Interface.ViewportRootElement)
- [`HtmlRoot`](../Interface.HtmlRoot)

## Properties

### canvasBounds?

> `optional` **canvasBounds**: [`Bounds`](../Interface.Bounds)

Defined in: [model.ts:35](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L35)

***

### children?

> `optional` **children**: [`SModelElement`](../Interface.SModelElement)[]

Defined in: [model.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L27)

#### Inherited from

[`SModelElement`](../Interface.SModelElement).[`children`](../Interface.SModelElement.md#children)

***

### cssClasses?

> `optional` **cssClasses**: `string`[]

Defined in: [model.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L28)

#### Inherited from

[`SModelElement`](../Interface.SModelElement).[`cssClasses`](../Interface.SModelElement.md#cssclasses)

***

### id

> **id**: `string`

Defined in: [model.ts:26](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L26)

#### Inherited from

[`SModelElement`](../Interface.SModelElement).[`id`](../Interface.SModelElement.md#id)

***

### revision?

> `optional` **revision**: `number`

Defined in: [model.ts:36](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L36)

***

### type

> **type**: `string`

Defined in: [model.ts:25](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L25)

#### Inherited from

[`SModelElement`](../Interface.SModelElement).[`type`](../Interface.SModelElement.md#type)
