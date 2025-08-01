
[sprotty-protocol](../globals) / SetModelAction

# Interface: SetModelAction

Defined in: [actions.ts:145](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L145)

Sent from the model source to the client in order to set the model. If a model is already present, it is replaced.

## Extends

- [`ResponseAction`](../Interface.ResponseAction)

## Properties

### kind

> **kind**: `"setModel"`

Defined in: [actions.ts:146](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L146)

#### Overrides

[`ResponseAction`](../Interface.ResponseAction).[`kind`](../Interface.ResponseAction.md#kind)

***

### newRoot

> **newRoot**: [`SModelRoot`](../Interface.SModelRoot)

Defined in: [actions.ts:147](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L147)

***

### responseId

> **responseId**: `string`

Defined in: [actions.ts:87](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L87)

#### Inherited from

[`ResponseAction`](../Interface.ResponseAction).[`responseId`](../Interface.ResponseAction.md#responseid)
