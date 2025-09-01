
[sprotty-protocol](../globals) / ServerActionHandler

# Type Alias: ServerActionHandler()\<A\>

> **ServerActionHandler**\<`A`\> = (`action`, `state`, `server`) => `void` \| `Promise`\<`void`\>

Defined in: [action-handler.ts:21](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/action-handler.ts#L21)

## Type Parameters

### A

`A` *extends* [`Action`](../Interface.Action) = [`Action`](../Interface.Action)

## Parameters

### action

`A`

### state

[`DiagramState`](../Interface.DiagramState)

### server

[`DiagramServer`](../Class.DiagramServer)

## Returns

`void` \| `Promise`\<`void`\>
