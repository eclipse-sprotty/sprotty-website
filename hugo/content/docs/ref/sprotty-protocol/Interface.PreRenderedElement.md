
[sprotty-protocol](../globals) / PreRenderedElement

# Interface: PreRenderedElement

Defined in: [model.ts:314](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L314)

Pre-rendered elements contain HTML or SVG code to be transferred to the DOM. This can be useful to
render complex figures or to compute the view on the server instead of the client code.

## Extends

- [`SModelElement`](../Interface.SModelElement)

## Extended by

- [`ShapedPreRenderedElement`](../Interface.ShapedPreRenderedElement)

## Properties

### children?

> `optional` **children**: [`SModelElement`](../Interface.SModelElement)[]

Defined in: [model.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L27)

#### Inherited from

[`SModelElement`](../Interface.SModelElement).[`children`](../Interface.SModelElement.md#children)

***

### code

> **code**: `string`

Defined in: [model.ts:315](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L315)

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

### type

> **type**: `string`

Defined in: [model.ts:25](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L25)

#### Inherited from

[`SModelElement`](../Interface.SModelElement).[`type`](../Interface.SModelElement.md#type)
