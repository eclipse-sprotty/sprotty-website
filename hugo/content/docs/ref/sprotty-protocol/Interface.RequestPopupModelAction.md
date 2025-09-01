
[sprotty-protocol](../globals) / RequestPopupModelAction

# Interface: RequestPopupModelAction

Defined in: [actions.ts:206](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L206)

Triggered when the user hovers the mouse pointer over an element to get a popup with details on
that element. This action is sent from the client to the model source, e.g. a DiagramServer.
The response is a SetPopupModelAction.

## Extends

- [`RequestAction`](../Interface.RequestAction)\<[`SetPopupModelAction`](../Interface.SetPopupModelAction)\>

## Properties

### \_?

> `readonly` `optional` **\_**: [`SetPopupModelAction`](../Interface.SetPopupModelAction)

Defined in: [actions.ts:57](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L57)

Used to ensure correct typing. Clients must not use this property

#### Inherited from

[`RequestAction`](../Interface.RequestAction).[`_`](../Interface.RequestAction.md#_)

***

### bounds

> **bounds**: [`Bounds`](../Interface.Bounds)

Defined in: [actions.ts:209](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L209)

***

### elementId

> **elementId**: `string`

Defined in: [actions.ts:208](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L208)

***

### kind

> **kind**: `"requestPopupModel"`

Defined in: [actions.ts:207](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L207)

#### Overrides

[`RequestAction`](../Interface.RequestAction).[`kind`](../Interface.RequestAction.md#kind)

***

### requestId

> **requestId**: `string`

Defined in: [actions.ts:52](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L52)

#### Inherited from

[`RequestAction`](../Interface.RequestAction).[`requestId`](../Interface.RequestAction.md#requestid)
