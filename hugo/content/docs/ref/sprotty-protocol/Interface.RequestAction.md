
[sprotty-protocol](../globals) / RequestAction

# Interface: RequestAction\<Res\>

Defined in: [actions.ts:51](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L51)

A request action is tied to the expectation of receiving a corresponding response action.
The `requestId` property is used to match the received response with the original request.

## Extends

- [`Action`](../Interface.Action)

## Extended by

- [`RequestModelAction`](../Interface.RequestModelAction)
- [`RequestPopupModelAction`](../Interface.RequestPopupModelAction)
- [`RequestBoundsAction`](../Interface.RequestBoundsAction)
- [`GetSelectionAction`](../Interface.GetSelectionAction)
- [`GetViewportAction`](../Interface.GetViewportAction)
- [`RequestExportSvgAction`](../Interface.RequestExportSvgAction)

## Type Parameters

### Res

`Res` *extends* [`ResponseAction`](../Interface.ResponseAction)

## Properties

### \_?

> `readonly` `optional` **\_**: `Res`

Defined in: [actions.ts:57](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L57)

Used to ensure correct typing. Clients must not use this property

***

### kind

> **kind**: `string`

Defined in: [actions.ts:40](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L40)

#### Inherited from

[`Action`](../Interface.Action).[`kind`](../Interface.Action.md#kind)

***

### requestId

> **requestId**: `string`

Defined in: [actions.ts:52](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L52)
