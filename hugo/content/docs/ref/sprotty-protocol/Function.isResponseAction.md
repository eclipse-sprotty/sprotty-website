
[sprotty-protocol](../globals) / isResponseAction

# Function: isResponseAction()

> **isResponseAction**(`object?`): `object is ResponseAction`

Defined in: [actions.ts:96](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L96)

A response action is sent to respond to a request action. The `responseId` must match
the `requestId` of the preceding request. In case the `responseId` is empty or undefined,
the action is handled as standalone, i.e. it was fired without a preceding request.

## Parameters

### object?

[`Action`](../Interface.Action)

## Returns

`object is ResponseAction`
