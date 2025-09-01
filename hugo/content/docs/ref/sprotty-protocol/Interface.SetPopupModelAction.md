
[sprotty-protocol](../globals) / SetPopupModelAction

# Interface: SetPopupModelAction

Defined in: [actions.ts:228](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L228)

Sent from the model source to the client to display a popup in response to a RequestPopupModelAction.
This action can also be used to remove any existing popup by choosing EMPTY_ROOT as root element.

## Extends

- [`ResponseAction`](../Interface.ResponseAction)

## Properties

### kind

> **kind**: `"setPopupModel"`

Defined in: [actions.ts:229](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L229)

#### Overrides

[`ResponseAction`](../Interface.ResponseAction).[`kind`](../Interface.ResponseAction.md#kind)

***

### newRoot

> **newRoot**: [`SModelRoot`](../Interface.SModelRoot)

Defined in: [actions.ts:230](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L230)

***

### responseId

> **responseId**: `string`

Defined in: [actions.ts:87](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L87)

#### Inherited from

[`ResponseAction`](../Interface.ResponseAction).[`responseId`](../Interface.ResponseAction.md#responseid)
