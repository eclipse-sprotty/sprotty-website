
[sprotty-protocol](../globals) / ServerActionHandlerRegistry

# Class: ServerActionHandlerRegistry

Defined in: [action-handler.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/action-handler.ts#L28)

Use this service to register handlers to specific actions. The `DiagramServer` queries this registry
when an action is received from the client, and falls back to the built-in behavior if no handlers
are found.

## Constructors

### Constructor

> **new ServerActionHandlerRegistry**(): `ServerActionHandlerRegistry`

#### Returns

`ServerActionHandlerRegistry`

## Properties

### handlers

> `protected` `readonly` **handlers**: `Map`\<`string`, [`ServerActionHandler`](../TypeAlias.ServerActionHandler)\<[`Action`](../Interface.Action)\>[]\>

Defined in: [action-handler.ts:30](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/action-handler.ts#L30)

## Methods

### getHandler()

> **getHandler**(`kind`): `undefined` \| [`ServerActionHandler`](../TypeAlias.ServerActionHandler)\<[`Action`](../Interface.Action)\>[]

Defined in: [action-handler.ts:35](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/action-handler.ts#L35)

Returns the action handlers for the given action kind, or `undefined` if there are none.

#### Parameters

##### kind

`string`

#### Returns

`undefined` \| [`ServerActionHandler`](../TypeAlias.ServerActionHandler)\<[`Action`](../Interface.Action)\>[]

***

### onAction()

> **onAction**\<`A`\>(`kind`, `handler`): `void`

Defined in: [action-handler.ts:42](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/action-handler.ts#L42)

Add an action handler to be called when an action of the specified kind is received.

#### Type Parameters

##### A

`A` *extends* [`Action`](../Interface.Action)

#### Parameters

##### kind

`string`

##### handler

[`ServerActionHandler`](../TypeAlias.ServerActionHandler)\<`A`\>

#### Returns

`void`

***

### removeActionHandler()

> **removeActionHandler**\<`A`\>(`kind`, `handler`): `void`

Defined in: [action-handler.ts:53](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/action-handler.ts#L53)

Remove an action handler that was previously added with `onAction`.

#### Type Parameters

##### A

`A` *extends* [`Action`](../Interface.Action)

#### Parameters

##### kind

`string`

##### handler

[`ServerActionHandler`](../TypeAlias.ServerActionHandler)\<`A`\>

#### Returns

`void`
