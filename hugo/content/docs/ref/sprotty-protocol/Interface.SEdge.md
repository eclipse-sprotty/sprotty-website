
[sprotty-protocol](../globals) / SEdge

# Interface: SEdge

Defined in: [model.ts:78](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L78)

Model element class for edges, which are the connectors in a graph. An edge has a source and a target,
each of which can be either a node or a port. The source and target elements are referenced via their ids.

## Extends

- [`SModelElement`](../Interface.SModelElement).`Partial`\<[`Selectable`](../Interface.Selectable)\>.`Partial`\<[`Hoverable`](../Interface.Hoverable)\>.`Partial`\<[`Fadeable`](../Interface.Fadeable)\>

## Properties

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

[`SModelElement`](../Interface.SModelElement).[`id`](../Interface.SModelElement.md#id)

***

### opacity?

> `optional` **opacity**: `number`

Defined in: [model.ts:217](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L217)

#### Inherited from

[`Fadeable`](../Interface.Fadeable).[`opacity`](../Interface.Fadeable.md#opacity)

***

### routerKind?

> `optional` **routerKind**: `string`

Defined in: [model.ts:81](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L81)

***

### routingPoints?

> `optional` **routingPoints**: [`Point`](../Interface.Point)[]

Defined in: [model.ts:82](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L82)

***

### selected?

> `optional` **selected**: `boolean`

Defined in: [model.ts:201](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L201)

#### Inherited from

[`Selectable`](../Interface.Selectable).[`selected`](../Interface.Selectable.md#selected)

***

### sourceId

> **sourceId**: `string`

Defined in: [model.ts:79](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L79)

***

### targetId

> **targetId**: `string`

Defined in: [model.ts:80](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L80)

***

### type

> **type**: `string`

Defined in: [model.ts:25](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L25)

#### Inherited from

[`SModelElement`](../Interface.SModelElement).[`type`](../Interface.SModelElement.md#type)
