
### originalModel

> **originalModel**: `SModelRoot`

Defined in: [packages/sprotty/src/model-source/commit-model.ts:52](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/commit-model.ts#L52)

***

### KIND

> `readonly` `static` **KIND**: `"commitModel"` = `CommitModelAction.KIND`

Defined in: [packages/sprotty/src/model-source/commit-model.ts:48](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/commit-model.ts#L48)

## Methods

### doCommit()

> `protected` **doCommit**(`model`, `result`, `doSetOriginal`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/model-source/commit-model.ts:64](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/commit-model.ts#L64)

#### Parameters

##### model

`SModelRoot`

##### result

[`SModelRootImpl`](../Class.SModelRootImpl)

##### doSetOriginal

`boolean`

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

***

### execute()

> **execute**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/model-source/commit-model.ts:59](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/commit-model.ts#L59)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`SystemCommand`](../Class.SystemCommand).[`execute`](../Class.SystemCommand.md#execute)

***

### redo()

> **redo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/model-source/commit-model.ts:83](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/commit-model.ts#L83)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`SystemCommand`](../Class.SystemCommand).[`redo`](../Class.SystemCommand.md#redo)

***

### undo()

> **undo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/model-source/commit-model.ts:79](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/commit-model.ts#L79)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`SystemCommand`](../Class.SystemCommand).[`undo`](../Class.SystemCommand.md#undo)
