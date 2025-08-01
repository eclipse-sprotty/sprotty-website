
### lastSubmittedModelType

> `protected` **lastSubmittedModelType**: `string`

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:58](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L58)

The `type` property of the model root is used to determine whether a model update
is a change of the previous model or a totally new one.

***

### layoutEngine?

> `protected` `optional` **layoutEngine**: `IModelLayoutEngine`

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:50](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L50)

***

### logger

> `protected` `readonly` **logger**: [`ILogger`](../Interface.ILogger)

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:47](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L47)

***

### popupModelProvider?

> `protected` `optional` **popupModelProvider**: [`IPopupModelProvider`](../Interface.IPopupModelProvider)

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:49](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L49)

***

### viewerOptions

> `protected` **viewerOptions**: [`ViewerOptions`](../Interface.ViewerOptions)

Defined in: [packages/sprotty/src/model-source/model-source.ts:50](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/model-source.ts#L50)

#### Inherited from

[`ModelSource`](../Class.ModelSource).[`viewerOptions`](../Class.ModelSource.md#vieweroptions)

## Accessors

### model

#### Get Signature

> **get** **model**(): `SModelRoot`

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:60](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L60)

##### Returns

`SModelRoot`

#### Set Signature

> **set** **model**(`root`): `void`

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:64](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L64)

##### Parameters

###### root

`SModelRoot`

##### Returns

`void`

#### Overrides

[`ModelSource`](../Class.ModelSource).[`model`](../Class.ModelSource.md#model)

## Methods

### addElements()

> **addElements**(`elements`): `Promise`\<`void`\>

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:194](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L194)

Modify the current model by adding new elements.

#### Parameters

##### elements

(`SModelElement` \| \{ `element`: `SModelElement`; `parentId`: `string`; \})[]

#### Returns

`Promise`\<`void`\>

***

### applyMatches()

> **applyMatches**(`matches`): `Promise`\<`void`\>

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:185](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L185)

Modify the current model with an array of matches.

#### Parameters

##### matches

[`Match`](../Interface.Match)[]

#### Returns

`Promise`\<`void`\>

***

### commitModel()

> **commitModel**(`newRoot`): `SModelRoot` \| `Promise`\<`SModelRoot`\>

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:84](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L84)

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

#### Overrides

[`ModelSource`](../Class.ModelSource).[`commitModel`](../Class.ModelSource.md#commitmodel)

***

### doSubmitModel()

> `protected` **doSubmitModel**(`newRoot`, `update`, `cause?`, `index?`): `Promise`\<`void`\>

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:155](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L155)

Submit the given model with an `UpdateModelAction` or a `SetModelAction` depending on the
`update` argument. If available, the model layout engine is invoked first.

#### Parameters

##### newRoot

`SModelRoot`

##### update

`boolean` | [`Match`](../Interface.Match)[]

##### cause?

`Action`

##### index?

`SModelIndex`

#### Returns

`Promise`\<`void`\>

***

### getSelection()

> **getSelection**(): `Promise`\<`FluentIterable`\<`SModelElement`\>\>

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:107](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L107)

Get the current selection from the model.

#### Returns

`Promise`\<`FluentIterable`\<`SModelElement`\>\>

***

### getViewport()

> **getViewport**(): `Promise`\<`Viewport` & `object`\>

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:128](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L128)

Get the current viewport from the model.

#### Returns

`Promise`\<`Viewport` & `object`\>

***

### handle()

> **handle**(`action`): `void`

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:246](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L246)

#### Parameters

##### action

`Action`

#### Returns

`void`

#### Overrides

[`ModelSource`](../Class.ModelSource).[`handle`](../Class.ModelSource.md#handle)

***

### handleExportSvgAction()

> `protected` **handleExportSvgAction**(`action`): `void`

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:278](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L278)

#### Parameters

##### action

`ExportSvgAction`

#### Returns

`void`

***

### handleRequestModel()

> `protected` **handleRequestModel**(`action`): `void`

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:263](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L263)

#### Parameters

##### action

`RequestModelAction`

#### Returns

`void`

***

### handleRequestPopupModel()

> `protected` **handleRequestPopupModel**(`action`): `void`

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:267](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L267)

#### Parameters

##### action

`RequestPopupModelAction`

#### Returns

`void`

***

### initialize()

> **initialize**(`registry`): `void`

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:68](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L68)

#### Parameters

##### registry

[`ActionHandlerRegistry`](../Class.ActionHandlerRegistry)

#### Returns

`void`

#### Overrides

[`ModelSource`](../Class.ModelSource).[`initialize`](../Class.ModelSource.md#initialize)

***

### removeElements()

> **removeElements**(`elements`): `Promise`\<`void`\>

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:216](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L216)

Modify the current model by removing elements.

#### Parameters

##### elements

(`string` \| \{ `elementId`: `string`; `parentId`: `string`; \})[]

#### Returns

`Promise`\<`void`\>

***

### setModel()

> **setModel**(`newRoot`): `Promise`\<`void`\>

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:79](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L79)

Set the model without incremental update.

#### Parameters

##### newRoot

`SModelRoot`

#### Returns

`Promise`\<`void`\>

***

### submitModel()

> `protected` **submitModel**(`newRoot`, `update`, `cause?`): `Promise`\<`void`\>

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:141](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L141)

If client layout is active, run a `RequestBoundsAction` and wait for the resulting
`ComputedBoundsAction`, otherwise call `doSubmitModel(…)` directly.

#### Parameters

##### newRoot

`SModelRoot`

##### update

`boolean` | [`Match`](../Interface.Match)[]

##### cause?

`Action`

#### Returns

`Promise`\<`void`\>

***

### updateModel()

> **updateModel**(`newRoot?`): `Promise`\<`void`\>

Defined in: [packages/sprotty/src/model-source/local-model-source.ts:95](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/local-model-source.ts#L95)

Apply an incremental update to the model with an animation showing the transition to
the new state. If `newRoot` is undefined, the current root is submitted; in that case
it is assumed that it has been modified before.

#### Parameters

##### newRoot?

`SModelRoot`

#### Returns

`Promise`\<`void`\>
