
### commandStack

> `protected` **commandStack**: [`ICommandStack`](../Interface.ICommandStack)

Defined in: [packages/sprotty/src/base/actions/action-dispatcher.ts:49](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action-dispatcher.ts#L49)

***

### diagramLocker

> `protected` **diagramLocker**: [`IDiagramLocker`](../Interface.IDiagramLocker)

Defined in: [packages/sprotty/src/base/actions/action-dispatcher.ts:52](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action-dispatcher.ts#L52)

***

### initialized

> `protected` **initialized**: `undefined` \| `Promise`\<`void`\>

Defined in: [packages/sprotty/src/base/actions/action-dispatcher.ts:56](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action-dispatcher.ts#L56)

***

### logger

> `protected` **logger**: [`ILogger`](../Interface.ILogger)

Defined in: [packages/sprotty/src/base/actions/action-dispatcher.ts:50](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action-dispatcher.ts#L50)

***

### postponedActions

> `protected` **postponedActions**: [`PostponedAction`](../Interface.PostponedAction)[] = `[]`

Defined in: [packages/sprotty/src/base/actions/action-dispatcher.ts:58](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action-dispatcher.ts#L58)

***

### requests

> `protected` `readonly` **requests**: `Map`\<`string`, `Deferred`\<`ResponseAction`\>\>

Defined in: [packages/sprotty/src/base/actions/action-dispatcher.ts:59](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action-dispatcher.ts#L59)

***

### syncer

> `protected` **syncer**: [`AnimationFrameSyncer`](../Class.AnimationFrameSyncer)

Defined in: [packages/sprotty/src/base/actions/action-dispatcher.ts:51](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action-dispatcher.ts#L51)

## Methods

### dispatch()

> **dispatch**(`action`): `Promise`\<`void`\>

Defined in: [packages/sprotty/src/base/actions/action-dispatcher.ts:76](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action-dispatcher.ts#L76)

Dispatch an action by querying all handlers that are registered for its kind.
The returned promise is resolved when all handler results (commands or actions)
have been processed.

#### Parameters

##### action

`Action`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IActionDispatcher`](../Interface.IActionDispatcher).[`dispatch`](../Interface.IActionDispatcher.md#dispatch)

***

### dispatchAll()

> **dispatchAll**(`actions`): `Promise`\<`void`\>

Defined in: [packages/sprotty/src/base/actions/action-dispatcher.ts:91](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action-dispatcher.ts#L91)

Calls `dispatch` on every action in the given array. The returned promise
is resolved when the promises of all `dispatch` calls have been resolved.

#### Parameters

##### actions

`Action`[]

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IActionDispatcher`](../Interface.IActionDispatcher).[`dispatchAll`](../Interface.IActionDispatcher.md#dispatchall)

***

### handleAction()

> `protected` **handleAction**(`action`): `Promise`\<`void`\>

Defined in: [packages/sprotty/src/base/actions/action-dispatcher.ts:112](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action-dispatcher.ts#L112)

#### Parameters

##### action

`Action`

#### Returns

`Promise`\<`void`\>

***

### handleBlocked()

> `protected` **handleBlocked**(`action`, `predicate`): `Promise`\<`void`\>

Defined in: [packages/sprotty/src/base/actions/action-dispatcher.ts:163](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action-dispatcher.ts#L163)

#### Parameters

##### action

`Action`

##### predicate

(`action`) => `boolean`

#### Returns

`Promise`\<`void`\>

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [packages/sprotty/src/base/actions/action-dispatcher.ts:61](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action-dispatcher.ts#L61)

#### Returns

`Promise`\<`void`\>

***

### request()

> **request**\<`Res`\>(`action`): `Promise`\<`Res`\>

Defined in: [packages/sprotty/src/base/actions/action-dispatcher.ts:102](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action-dispatcher.ts#L102)

Dispatch a request. The returned promise is resolved when a response with matching
identifier is dispatched. That response is _not_ passed to the registered action
handlers. Instead, it is the responsibility of the caller of this method to handle
the response properly. For example, it can be sent to the registered handlers by
passing it again to the `dispatch` method.

#### Type Parameters

##### Res

`Res` *extends* `ResponseAction`

#### Parameters

##### action

`RequestAction`\<`Res`\>

#### Returns

`Promise`\<`Res`\>

#### Implementation of

[`IActionDispatcher`](../Interface.IActionDispatcher).[`request`](../Interface.IActionDispatcher.md#request)
