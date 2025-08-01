
### KIND

> `readonly` `static` **KIND**: `"elementSelected"` = `SelectAction.KIND`

Defined in: [packages/sprotty/src/features/select/select.ts:44](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/select/select.ts#L44)

## Methods

### execute()

> **execute**(`context`): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/features/select/select.ts:53](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/select/select.ts#L53)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Overrides

[`Command`](../Class.Command).[`execute`](../Class.Command.md#execute)

***

### redo()

> **redo**(`context`): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/features/select/select.ts:80](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/select/select.ts#L80)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Overrides

[`Command`](../Class.Command).[`redo`](../Class.Command.md#redo)

***

### undo()

> **undo**(`context`): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/features/select/select.ts:70](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/select/select.ts#L70)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Overrides

[`Command`](../Class.Command).[`undo`](../Class.Command.md#undo)
