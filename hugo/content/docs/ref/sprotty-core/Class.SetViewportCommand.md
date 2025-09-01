
### oldViewport

> `protected` **oldViewport**: `Viewport`

Defined in: [packages/sprotty/src/features/viewport/viewport.ts:35](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport.ts#L35)

***

### viewerOptions

> `protected` **viewerOptions**: [`ViewerOptions`](../Interface.ViewerOptions)

Defined in: [packages/sprotty/src/features/viewport/viewport.ts:33](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport.ts#L33)

***

### KIND

> `readonly` `static` **KIND**: `"viewport"` = `SetViewportAction.KIND`

Defined in: [packages/sprotty/src/features/viewport/viewport.ts:31](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport.ts#L31)

## Methods

### execute()

> **execute**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/viewport/viewport.ts:43](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport.ts#L43)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`MergeableCommand`](../Class.MergeableCommand).[`execute`](../Class.MergeableCommand.md#execute)

***

### merge()

> **merge**(`command`, `context`): `boolean`

Defined in: [packages/sprotty/src/features/viewport/viewport.ts:79](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport.ts#L79)

Tries to merge the given command with this.

#### Parameters

##### command

[`ICommand`](../Interface.ICommand)

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

`boolean`

#### Overrides

[`MergeableCommand`](../Class.MergeableCommand).[`merge`](../Class.MergeableCommand.md#merge)

***

### redo()

> **redo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/viewport/viewport.ts:75](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport.ts#L75)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`MergeableCommand`](../Class.MergeableCommand).[`redo`](../Class.MergeableCommand.md#redo)

***

### setViewport()

> `protected` **setViewport**(`element`, `oldViewport`, `newViewport`, `context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/viewport/viewport.ts:59](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport.ts#L59)

#### Parameters

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

##### oldViewport

`Viewport`

##### newViewport

`Viewport`

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

***

### undo()

> **undo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/viewport/viewport.ts:71](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport.ts#L71)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`MergeableCommand`](../Class.MergeableCommand).[`undo`](../Class.MergeableCommand.md#undo)
