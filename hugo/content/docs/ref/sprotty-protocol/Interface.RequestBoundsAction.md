
[sprotty-protocol](../globals) / RequestBoundsAction

# Interface: RequestBoundsAction

Defined in: [actions.ts:269](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L269)

Sent from the model source to the client to request bounds for the given model. The model is
rendered invisibly so the bounds can derived from the DOM. The response is a ComputedBoundsAction.
This hidden rendering round-trip is necessary if the client is responsible for parts of the layout
(see `needsClientLayout` viewer option).

## Extends

- [`RequestAction`](../Interface.RequestAction)\<[`ComputedBoundsAction`](../Interface.ComputedBoundsAction)\>

## Properties

### \_?

> `readonly` `optional` **\_**: [`ComputedBoundsAction`](../Interface.ComputedBoundsAction)

Defined in: [actions.ts:57](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L57)

Used to ensure correct typing. Clients must not use this property

#### Inherited from

[`RequestAction`](../Interface.RequestAction).[`_`](../Interface.RequestAction.md#_)

***

### kind

> **kind**: `"requestBounds"`

Defined in: [actions.ts:270](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L270)

#### Overrides

[`RequestAction`](../Interface.RequestAction).[`kind`](../Interface.RequestAction.md#kind)

***

### newRoot

> **newRoot**: [`SModelRoot`](../Interface.SModelRoot)

Defined in: [actions.ts:271](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L271)

***

### requestId

> **requestId**: `string`

Defined in: [actions.ts:52](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L52)

#### Inherited from

[`RequestAction`](../Interface.RequestAction).[`requestId`](../Interface.RequestAction.md#requestid)
