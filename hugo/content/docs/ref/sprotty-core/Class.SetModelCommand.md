
### KIND

> `readonly` `static` **KIND**: `"setModel"` = `SetModelAction.KIND`

Defined in: [packages/sprotty/src/base/features/set-model.ts:26](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/features/set-model.ts#L26)

## Accessors

### blockUntil

#### Get Signature

> **get** **blockUntil**(): (`action`) => `boolean`

Defined in: [packages/sprotty/src/base/features/set-model.ts:49](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/features/set-model.ts#L49)

##### Returns

> (`action`): `boolean`

###### Parameters

###### action

`Action`

###### Returns

`boolean`

## Methods

### execute()

> **execute**(`context`): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/base/features/set-model.ts:35](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/features/set-model.ts#L35)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Overrides

[`ResetCommand`](../Class.ResetCommand).[`execute`](../Class.ResetCommand.md#execute)

***

### redo()

> **redo**(`context`): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/base/features/set-model.ts:45](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/features/set-model.ts#L45)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Overrides

[`ResetCommand`](../Class.ResetCommand).[`redo`](../Class.ResetCommand.md#redo)

***

### undo()

> **undo**(`context`): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/base/features/set-model.ts:41](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/features/set-model.ts#L41)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Overrides

[`ResetCommand`](../Class.ResetCommand).[`undo`](../Class.ResetCommand.md#undo)
