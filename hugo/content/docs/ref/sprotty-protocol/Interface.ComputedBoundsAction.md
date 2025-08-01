
[sprotty-protocol](../globals) / ComputedBoundsAction

# Interface: ComputedBoundsAction

Defined in: [actions.ts:292](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L292)

Sent from the client to the model source (e.g. a DiagramServer) to transmit the result of bounds
computation as a response to a RequestBoundsAction. If the server is responsible for parts of
the layout (see `needsServerLayout` viewer option), it can do so after applying the computed bounds
received with this action. Otherwise there is no need to send the computed bounds to the server,
so they can be processed locally by the client.

## Extends

- [`ResponseAction`](../Interface.ResponseAction)

## Properties

### alignments?

> `optional` **alignments**: [`ElementAndAlignment`](../Interface.ElementAndAlignment)[]

Defined in: [actions.ts:296](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L296)

***

### bounds

> **bounds**: [`ElementAndBounds`](../Interface.ElementAndBounds)[]

Defined in: [actions.ts:294](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L294)

***

### kind

> **kind**: `"computedBounds"`

Defined in: [actions.ts:293](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L293)

#### Overrides

[`ResponseAction`](../Interface.ResponseAction).[`kind`](../Interface.ResponseAction.md#kind)

***

### responseId

> **responseId**: `string`

Defined in: [actions.ts:87](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L87)

#### Inherited from

[`ResponseAction`](../Interface.ResponseAction).[`responseId`](../Interface.ResponseAction.md#responseid)

***

### revision?

> `optional` **revision**: `number`

Defined in: [actions.ts:295](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L295)
