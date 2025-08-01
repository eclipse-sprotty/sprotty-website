
[sprotty-protocol](../globals) / RequestModelAction

# Interface: RequestModelAction

Defined in: [actions.ts:126](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L126)

Sent from the client to the model source (e.g. a DiagramServer) in order to request a model. Usually this
is the first message that is sent to the source, so it is also used to initiate the communication.
The response is a SetModelAction or an UpdateModelAction.

## Extends

- [`RequestAction`](../Interface.RequestAction)\<[`SetModelAction`](../Interface.SetModelAction)\>

## Properties

### \_?

> `readonly` `optional` **\_**: [`SetModelAction`](../Interface.SetModelAction)

Defined in: [actions.ts:57](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L57)

Used to ensure correct typing. Clients must not use this property

#### Inherited from

[`RequestAction`](../Interface.RequestAction).[`_`](../Interface.RequestAction.md#_)

***

### kind

> **kind**: `"requestModel"`

Defined in: [actions.ts:127](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L127)

#### Overrides

[`RequestAction`](../Interface.RequestAction).[`kind`](../Interface.RequestAction.md#kind)

***

### options?

> `optional` **options**: [`JsonMap`](../Interface.JsonMap)

Defined in: [actions.ts:128](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L128)

***

### requestId

> **requestId**: `string`

Defined in: [actions.ts:52](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L52)

#### Inherited from

[`RequestAction`](../Interface.RequestAction).[`requestId`](../Interface.RequestAction.md#requestid)
