
[sprotty-protocol](../globals) / RejectAction

# Interface: RejectAction

Defined in: [actions.ts:103](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L103)

A reject action is fired to indicate that a request must be rejected.

## Extends

- [`ResponseAction`](../Interface.ResponseAction)

## Properties

### detail?

> `optional` **detail**: [`JsonAny`](../TypeAlias.JsonAny)

Defined in: [actions.ts:106](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L106)

***

### kind

> **kind**: `"rejectRequest"`

Defined in: [actions.ts:104](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L104)

#### Overrides

[`ResponseAction`](../Interface.ResponseAction).[`kind`](../Interface.ResponseAction.md#kind)

***

### message

> **message**: `string`

Defined in: [actions.ts:105](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L105)

***

### responseId

> **responseId**: `string`

Defined in: [actions.ts:87](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L87)

#### Inherited from

[`ResponseAction`](../Interface.ResponseAction).[`responseId`](../Interface.ResponseAction.md#responseid)
