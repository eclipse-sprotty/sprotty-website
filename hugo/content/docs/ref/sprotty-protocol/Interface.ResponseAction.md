
[sprotty-protocol](../globals) / ResponseAction

# Interface: ResponseAction

Defined in: [actions.ts:86](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L86)

A response action is sent to respond to a request action. The `responseId` must match
the `requestId` of the preceding request. In case the `responseId` is empty or undefined,
the action is handled as standalone, i.e. it was fired without a preceding request.

## Extends

- [`Action`](../Interface.Action)

## Extended by

- [`RejectAction`](../Interface.RejectAction)
- [`SetModelAction`](../Interface.SetModelAction)
- [`SetPopupModelAction`](../Interface.SetPopupModelAction)
- [`ComputedBoundsAction`](../Interface.ComputedBoundsAction)
- [`SelectionResult`](../Interface.SelectionResult)
- [`ViewportResult`](../Interface.ViewportResult)
- [`ExportSvgAction`](../Interface.ExportSvgAction)

## Properties

### kind

> **kind**: `string`

Defined in: [actions.ts:40](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L40)

#### Inherited from

[`Action`](../Interface.Action).[`kind`](../Interface.Action.md#kind)

***

### responseId

> **responseId**: `string`

Defined in: [actions.ts:87](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L87)
