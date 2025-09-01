
[sprotty-protocol](../globals) / GetSelectionAction

# Interface: GetSelectionAction

Defined in: [actions.ts:396](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L396)

Request action for retrieving the current selection.

## Extends

- [`RequestAction`](../Interface.RequestAction)\<[`SelectionResult`](../Interface.SelectionResult)\>

## Properties

### \_?

> `readonly` `optional` **\_**: [`SelectionResult`](../Interface.SelectionResult)

Defined in: [actions.ts:57](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L57)

Used to ensure correct typing. Clients must not use this property

#### Inherited from

[`RequestAction`](../Interface.RequestAction).[`_`](../Interface.RequestAction.md#_)

***

### kind

> **kind**: `"getSelection"`

Defined in: [actions.ts:397](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L397)

#### Overrides

[`RequestAction`](../Interface.RequestAction).[`kind`](../Interface.RequestAction.md#kind)

***

### requestId

> **requestId**: `string`

Defined in: [actions.ts:52](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L52)

#### Inherited from

[`RequestAction`](../Interface.RequestAction).[`requestId`](../Interface.RequestAction.md#requestid)
