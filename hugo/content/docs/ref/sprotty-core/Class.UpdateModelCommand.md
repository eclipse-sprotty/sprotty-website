
### oldRoot

> **oldRoot**: [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/features/update/update-model.ts:51](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/update/update-model.ts#L51)

***

### KIND

> `readonly` `static` **KIND**: `"updateModel"` = `UpdateModelAction.KIND`

Defined in: [packages/sprotty/src/features/update/update-model.ts:49](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/update/update-model.ts#L49)

## Methods

### applyMatches()

> `protected` **applyMatches**(`root`, `matches`, `context`): `void`

Defined in: [packages/sprotty/src/features/update/update-model.ts:99](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/update/update-model.ts#L99)

#### Parameters

##### root

[`SModelRootImpl`](../Class.SModelRootImpl)

##### matches

[`Match`](../Interface.Match)[]

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

`void`

***

### computeAnimation()

> `protected` **computeAnimation**(`newRoot`, `matchResult`, `context`): [`Animation`](../Class.Animation) \| [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/features/update/update-model.ts:143](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/update/update-model.ts#L143)

#### Parameters

##### newRoot

[`SModelRootImpl`](../Class.SModelRootImpl)

##### matchResult

[`MatchResult`](../Interface.MatchResult)

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`Animation`](../Class.Animation) \| [`SModelRootImpl`](../Class.SModelRootImpl)

***

### convertToMatchResult()

> `protected` **convertToMatchResult**(`matches`, `leftRoot`, `rightRoot`): [`MatchResult`](../Interface.MatchResult)

Defined in: [packages/sprotty/src/features/update/update-model.ts:122](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/update/update-model.ts#L122)

#### Parameters

##### matches

[`Match`](../Interface.Match)[]

##### leftRoot

[`SModelRootImpl`](../Class.SModelRootImpl)

##### rightRoot

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Returns

[`MatchResult`](../Interface.MatchResult)

***

### createAnimations()

> `protected` **createAnimations**(`data`, `root`, `context`): [`Animation`](../Class.Animation)[]

Defined in: [packages/sprotty/src/features/update/update-model.ts:256](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/update/update-model.ts#L256)

#### Parameters

##### data

[`UpdateAnimationData`](../Interface.UpdateAnimationData)

##### root

[`SModelRootImpl`](../Class.SModelRootImpl)

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`Animation`](../Class.Animation)[]

***

### execute()

> **execute**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/update/update-model.ts:60](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/update/update-model.ts#L60)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`Command`](../Class.Command).[`execute`](../Class.Command.md#execute)

***

### performUpdate()

> `protected` **performUpdate**(`oldRoot`, `newRoot`, `context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/update/update-model.ts:74](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/update/update-model.ts#L74)

#### Parameters

##### oldRoot

[`SModelRootImpl`](../Class.SModelRootImpl)

##### newRoot

[`SModelRootImpl`](../Class.SModelRootImpl)

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

***

### redo()

> **redo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/update/update-model.ts:285](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/update/update-model.ts#L285)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`Command`](../Class.Command).[`redo`](../Class.Command.md#redo)

***

### takeSnapshot()

> `protected` **takeSnapshot**(`edge`): [`EdgeSnapshot`](../Interface.EdgeSnapshot)

Defined in: [packages/sprotty/src/features/update/update-model.ts:251](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/update/update-model.ts#L251)

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

#### Returns

[`EdgeSnapshot`](../Interface.EdgeSnapshot)

***

### undo()

> **undo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/update/update-model.ts:281](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/update/update-model.ts#L281)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`Command`](../Class.Command).[`undo`](../Class.Command.md#undo)

***

### updateElement()

> `protected` **updateElement**(`left`, `right`, `animationData`): `void`

Defined in: [packages/sprotty/src/features/update/update-model.ts:190](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/update/update-model.ts#L190)

#### Parameters

##### left

[`SModelElementImpl`](../Class.SModelElementImpl)

##### right

[`SModelElementImpl`](../Class.SModelElementImpl)

##### animationData

[`UpdateAnimationData`](../Interface.UpdateAnimationData)

#### Returns

`void`
