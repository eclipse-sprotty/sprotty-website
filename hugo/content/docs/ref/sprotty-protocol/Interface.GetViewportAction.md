
[sprotty-protocol](../globals) / GetViewportAction

# Interface: GetViewportAction

Defined in: [actions.ts:586](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L586)

Request action for retrieving the current viewport and canvas bounds.

## Extends

- [`RequestAction`](../Interface.RequestAction)\<[`ViewportResult`](../Interface.ViewportResult)\>

## Properties

### \_?

> `readonly` `optional` **\_**: [`ViewportResult`](../Interface.ViewportResult)

Defined in: [actions.ts:57](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L57)

Used to ensure correct typing. Clients must not use this property

#### Inherited from

[`RequestAction`](../Interface.RequestAction).[`_`](../Interface.RequestAction.md#_)

***

### kind

> **kind**: `"getViewport"`

Defined in: [actions.ts:587](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L587)

#### Overrides

[`RequestAction`](../Interface.RequestAction).[`kind`](../Interface.RequestAction.md#kind)

***

### requestId

> **requestId**: `string`

Defined in: [actions.ts:52](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L52)

#### Inherited from

[`RequestAction`](../Interface.RequestAction).[`requestId`](../Interface.RequestAction.md#requestid)
