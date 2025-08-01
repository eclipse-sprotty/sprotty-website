
### currentRoot

> `protected` **currentRoot**: `SModelRoot`

Defined in: [packages/sprotty/src/model-source/diagram-server.ts:61](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/diagram-server.ts#L61)

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`currentRoot`](../Class.DiagramServerProxy.md#currentroot)

***

### lastSubmittedModelType

> `protected` **lastSubmittedModelType**: `string`

Defined in: [packages/sprotty/src/model-source/diagram-server.ts:66](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/diagram-server.ts#L66)

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`lastSubmittedModelType`](../Class.DiagramServerProxy.md#lastsubmittedmodeltype)

***

### logger

> `protected` **logger**: [`ILogger`](../Interface.ILogger)

Defined in: [packages/sprotty/src/model-source/diagram-server.ts:56](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/diagram-server.ts#L56)

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`logger`](../Class.DiagramServerProxy.md#logger)

***

### viewerOptions

> `protected` **viewerOptions**: [`ViewerOptions`](../Interface.ViewerOptions)

Defined in: [packages/sprotty/src/model-source/model-source.ts:50](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/model-source.ts#L50)

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`viewerOptions`](../Class.DiagramServerProxy.md#vieweroptions)

***

### webSocket?

> `protected` `optional` **webSocket**: `WebSocket`

Defined in: [packages/sprotty/src/model-source/websocket.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/websocket.ts#L27)

## Accessors

### model

#### Get Signature

> **get** **model**(): `SModelRoot`

Defined in: [packages/sprotty/src/model-source/diagram-server.ts:68](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/diagram-server.ts#L68)

##### Returns

`SModelRoot`

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`model`](../Class.DiagramServerProxy.md#model)

## Methods

### commitModel()

> **commitModel**(`newRoot`): `SModelRoot` \| `Promise`\<`SModelRoot`\>

Defined in: [packages/sprotty/src/model-source/diagram-server.ts:210](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/diagram-server.ts#L210)

Commit changes from the internal SModel back to the currentModel.

This method is meant to be called only by CommitModelCommand and other commands
that need to feed the current internal model back to the model source. It does
not have any side effects such as triggering layout or bounds computation, as the
internal model is already current. See `CommitModelAction` for details.

#### Parameters

##### newRoot

`SModelRoot`

the new model.

#### Returns

`SModelRoot` \| `Promise`\<`SModelRoot`\>

the previous model.

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`commitModel`](../Class.DiagramServerProxy.md#commitmodel)

***

### disconnect()

> **disconnect**(): `void`

Defined in: [packages/sprotty/src/model-source/websocket.ts:39](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/websocket.ts#L39)

#### Returns

`void`

***

### forwardToServer()

> `protected` **forwardToServer**(`action`): `void`

Defined in: [packages/sprotty/src/model-source/diagram-server.ts:96](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/diagram-server.ts#L96)

#### Parameters

##### action

`Action`

#### Returns

`void`

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`forwardToServer`](../Class.DiagramServerProxy.md#forwardtoserver)

***

### handle()

> **handle**(`action`): `void` \| `Action` \| [`ICommand`](../Interface.ICommand)

Defined in: [packages/sprotty/src/model-source/diagram-server.ts:89](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/diagram-server.ts#L89)

#### Parameters

##### action

`Action`

#### Returns

`void` \| `Action` \| [`ICommand`](../Interface.ICommand)

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`handle`](../Class.DiagramServerProxy.md#handle)

***

### handleComputedBounds()

> `protected` **handleComputedBounds**(`action`): `boolean`

Defined in: [packages/sprotty/src/model-source/diagram-server.ts:184](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/diagram-server.ts#L184)

If the server requires to compute a layout, the computed bounds are forwarded. Otherwise they
are applied to the current model locally and a model update is triggered.

#### Parameters

##### action

`ComputedBoundsAction`

#### Returns

`boolean`

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`handleComputedBounds`](../Class.DiagramServerProxy.md#handlecomputedbounds)

***

### handleExportSvgAction()

> `protected` **handleExportSvgAction**(`action`): `boolean`

Defined in: [packages/sprotty/src/model-source/diagram-server.ts:200](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/diagram-server.ts#L200)

#### Parameters

##### action

`ExportSvgAction`

#### Returns

`boolean`

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`handleExportSvgAction`](../Class.DiagramServerProxy.md#handleexportsvgaction)

***

### handleLocally()

> `protected` **handleLocally**(`action`): `boolean`

Defined in: [packages/sprotty/src/model-source/diagram-server.ts:132](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/diagram-server.ts#L132)

Check whether the given action should be handled locally. Returns true if the action should
still be sent to the server, and false if it's only handled locally.

#### Parameters

##### action

`Action`

#### Returns

`boolean`

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`handleLocally`](../Class.DiagramServerProxy.md#handlelocally)

***

### handleRequestModel()

> `protected` **handleRequestModel**(`action`): `boolean`

Defined in: [packages/sprotty/src/model-source/diagram-server.ts:166](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/diagram-server.ts#L166)

#### Parameters

##### action

`RequestModelAction`

#### Returns

`boolean`

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`handleRequestModel`](../Class.DiagramServerProxy.md#handlerequestmodel)

***

### handleServerStateAction()

> `protected` **handleServerStateAction**(`action`): `boolean`

Defined in: [packages/sprotty/src/model-source/diagram-server.ts:206](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/diagram-server.ts#L206)

#### Parameters

##### action

[`ServerStatusAction`](../Class.ServerStatusAction)

#### Returns

`boolean`

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`handleServerStateAction`](../Class.DiagramServerProxy.md#handleserverstateaction)

***

### initialize()

> **initialize**(`registry`): `void`

Defined in: [packages/sprotty/src/model-source/diagram-server.ts:72](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/diagram-server.ts#L72)

#### Parameters

##### registry

[`ActionHandlerRegistry`](../Class.ActionHandlerRegistry)

#### Returns

`void`

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`initialize`](../Class.DiagramServerProxy.md#initialize)

***

### listen()

> **listen**(`webSocket`): `void`

Defined in: [packages/sprotty/src/model-source/websocket.ts:29](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/websocket.ts#L29)

#### Parameters

##### webSocket

`WebSocket`

#### Returns

`void`

***

### messageReceived()

> `protected` **messageReceived**(`data`): `void`

Defined in: [packages/sprotty/src/model-source/diagram-server.ts:113](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/diagram-server.ts#L113)

Called when a message is received from the remote diagram server.

#### Parameters

##### data

`any`

#### Returns

`void`

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`messageReceived`](../Class.DiagramServerProxy.md#messagereceived)

***

### sendMessage()

> `protected` **sendMessage**(`message`): `void`

Defined in: [packages/sprotty/src/model-source/websocket.ts:46](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/websocket.ts#L46)

Send a message to the remote diagram server.

#### Parameters

##### message

`ActionMessage`

#### Returns

`void`

#### Overrides

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`sendMessage`](../Class.DiagramServerProxy.md#sendmessage)

***

### storeNewModel()

> `protected` **storeNewModel**(`action`): `void`

Defined in: [packages/sprotty/src/model-source/diagram-server.ts:152](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/diagram-server.ts#L152)

Put the new model contained in the given action into the model storage, if there is any.

#### Parameters

##### action

`Action`

#### Returns

`void`

#### Inherited from

[`DiagramServerProxy`](../Class.DiagramServerProxy).[`storeNewModel`](../Class.DiagramServerProxy.md#storenewmodel)
