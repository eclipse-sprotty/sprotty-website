
[sprotty-protocol](../globals) / DiagramServer

# Class: DiagramServer

Defined in: [diagram-server.ts:31](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L31)

An instance of this class is responsible for handling a single diagram client. It holds the current
state of the diagram and manages communication with the client via actions.

## Constructors

### Constructor

> **new DiagramServer**(`dispatch`, `services`): `DiagramServer`

Defined in: [diagram-server.ts:49](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L49)

#### Parameters

##### dispatch

\<`A`\>(`action`) => `Promise`\<`void`\>

##### services

[`DiagramServices`](../Interface.DiagramServices)

#### Returns

`DiagramServer`

## Properties

### actionHandlerRegistry?

> `protected` `optional` **actionHandlerRegistry**: [`ServerActionHandlerRegistry`](../Class.ServerActionHandlerRegistry)

Defined in: [diagram-server.ts:46](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L46)

***

### diagramGenerator

> `protected` `readonly` **diagramGenerator**: [`IDiagramGenerator`](../Interface.IDiagramGenerator)

Defined in: [diagram-server.ts:44](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L44)

***

### dispatch()

> `readonly` **dispatch**: \<`A`\>(`action`) => `Promise`\<`void`\>

Defined in: [diagram-server.ts:42](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L42)

#### Type Parameters

##### A

`A` *extends* [`Action`](../Interface.Action)

#### Parameters

##### action

`A`

#### Returns

`Promise`\<`void`\>

***

### layoutEngine?

> `protected` `readonly` `optional` **layoutEngine**: [`IModelLayoutEngine`](../Interface.IModelLayoutEngine)

Defined in: [diagram-server.ts:45](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L45)

***

### requests

> `protected` `readonly` **requests**: `Map`\<`string`, [`Deferred`](../Class.Deferred)\<[`ResponseAction`](../Interface.ResponseAction)\>\>

Defined in: [diagram-server.ts:47](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L47)

***

### state

> `readonly` **state**: [`DiagramState`](../Interface.DiagramState) & `object`

Defined in: [diagram-server.ts:33](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L33)

#### Type declaration

##### lastSubmittedModelType?

> `optional` **lastSubmittedModelType**: `string`

## Accessors

### needsClientLayout

#### Get Signature

> **get** **needsClientLayout**(): `boolean`

Defined in: [diagram-server.ts:83](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L83)

Whether the client needs to compute the layout of parts of the model. This affects the behavior
of `submitModel`.

This setting is determined by the `DiagramOptions` that are received with the `RequestModelAction`
from the client. If the client does not specify whether it needs client layout, the default value
is `true`.

##### Returns

`boolean`

***

### needsServerLayout

#### Get Signature

> **get** **needsServerLayout**(): `boolean`

Defined in: [diagram-server.ts:98](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L98)

Whether the server needs to compute the layout of parts of the model. This affects the behavior
of `submitModel`.

This setting is determined by the `DiagramOptions` that are received with the `RequestModelAction`
from the client. If the client does not specify whether it needs server layout, the default value
is `false`.

##### Returns

`boolean`

## Methods

### accept()

> **accept**(`action`): `Promise`\<`void`\>

Defined in: [diagram-server.ts:108](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L108)

Called when an action is received from the client.

#### Parameters

##### action

[`Action`](../Interface.Action)

#### Returns

`Promise`\<`void`\>

***

### handleAction()

> `protected` **handleAction**(`action`): `Promise`\<`void`\>

Defined in: [diagram-server.ts:160](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L160)

#### Parameters

##### action

[`Action`](../Interface.Action)

#### Returns

`Promise`\<`void`\>

***

### handleComputedBounds()

> `protected` **handleComputedBounds**(`action`): `Promise`\<`void`\>

Defined in: [diagram-server.ts:242](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L242)

#### Parameters

##### action

[`ComputedBoundsAction`](../Interface.ComputedBoundsAction)

#### Returns

`Promise`\<`void`\>

***

### handleLayout()

> `protected` **handleLayout**(`action`): `Promise`\<`void`\>

Defined in: [diagram-server.ts:250](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L250)

#### Parameters

##### action

[`LayoutAction`](../Interface.LayoutAction)

#### Returns

`Promise`\<`void`\>

***

### handleRequestModel()

> `protected` **handleRequestModel**(`action`): `Promise`\<`void`\>

Defined in: [diagram-server.ts:182](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L182)

#### Parameters

##### action

[`RequestModelAction`](../Interface.RequestModelAction)

#### Returns

`Promise`\<`void`\>

***

### rejectRemoteRequest()

> **rejectRemoteRequest**(`action`, `error`): `void`

Defined in: [diagram-server.ts:149](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L149)

Send a `RejectAction` to the client to notify that a request could not be fulfilled.

#### Parameters

##### action

`undefined` | [`Action`](../Interface.Action)

##### error

`Error`

#### Returns

`void`

***

### request()

> **request**\<`Res`\>(`action`): `Promise`\<`Res`\>

Defined in: [diagram-server.ts:132](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L132)

Send a request action to the client. The resulting promise is resolved when a matching
response is received and rejected when a `RejectAction` is received.

#### Type Parameters

##### Res

`Res` *extends* [`ResponseAction`](../Interface.ResponseAction)

#### Parameters

##### action

[`RequestAction`](../Interface.RequestAction)\<`Res`\>

#### Returns

`Promise`\<`Res`\>

***

### setModel()

> **setModel**(`newRoot`): `Promise`\<`void`\>

Defined in: [diagram-server.ts:60](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L60)

Set the model and submit it to the client.

#### Parameters

##### newRoot

[`SModelRoot`](../Interface.SModelRoot)

#### Returns

`Promise`\<`void`\>

***

### submitModel()

> `protected` **submitModel**(`newRoot`, `update`, `cause?`): `Promise`\<`void`\>

Defined in: [diagram-server.ts:201](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L201)

Submit a model to the client after it has been updated in the server state.

#### Parameters

##### newRoot

[`SModelRoot`](../Interface.SModelRoot)

##### update

`boolean`

##### cause?

[`Action`](../Interface.Action)

#### Returns

`Promise`\<`void`\>

***

### updateModel()

> **updateModel**(`newRoot`): `Promise`\<`void`\>

Defined in: [diagram-server.ts:69](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-server.ts#L69)

Update the model to a new state and submit it to the client.

#### Parameters

##### newRoot

[`SModelRoot`](../Interface.SModelRoot)

#### Returns

`Promise`\<`void`\>
