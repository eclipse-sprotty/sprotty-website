
### elementsToDeactivate

> `protected` **elementsToDeactivate**: [`SModelElementImpl`](../Class.SModelElementImpl)[] = `[]`

Defined in: [packages/sprotty/src/features/edit/edit-routing.ts:51](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edit/edit-routing.ts#L51)

***

### handlesToRemove

> `protected` **handlesToRemove**: `object`[] = `[]`

Defined in: [packages/sprotty/src/features/edit/edit-routing.ts:52](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edit/edit-routing.ts#L52)

#### handle

> **handle**: [`SRoutingHandleImpl`](../Class.SRoutingHandleImpl)

#### parent

> **parent**: [`SRoutableElementImpl`](../Class.SRoutableElementImpl)

#### point?

> `optional` **point**: `Point`

***

### KIND

> `readonly` `static` **KIND**: `string` = `SwitchEditModeAction.KIND`

Defined in: [packages/sprotty/src/features/edit/edit-routing.ts:46](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edit/edit-routing.ts#L46)

## Methods

### doExecute()

> `protected` **doExecute**(`context`): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/features/edit/edit-routing.ts:81](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edit/edit-routing.ts#L81)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

***

### execute()

> **execute**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/edit/edit-routing.ts:58](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edit/edit-routing.ts#L58)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`Command`](../Class.Command).[`execute`](../Class.Command.md#execute)

***

### redo()

> **redo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/edit/edit-routing.ts:141](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edit/edit-routing.ts#L141)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`Command`](../Class.Command).[`redo`](../Class.Command.md#redo)

***

### shouldRemoveHandle()

> `protected` **shouldRemoveHandle**(`handle`, `parent`): `boolean`

Defined in: [packages/sprotty/src/features/edit/edit-routing.ts:112](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edit/edit-routing.ts#L112)

#### Parameters

##### handle

[`SRoutingHandleImpl`](../Class.SRoutingHandleImpl)

##### parent

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

#### Returns

`boolean`

***

### undo()

> **undo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/edit/edit-routing.ts:120](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edit/edit-routing.ts#L120)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`Command`](../Class.Command).[`undo`](../Class.Command.md#undo)
