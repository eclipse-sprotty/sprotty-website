
### KIND

> `readonly` `static` **KIND**: `"setPopupModel"` = `SetPopupModelAction.KIND`

Defined in: [packages/sprotty/src/features/hover/hover.ts:66](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L66)

## Methods

### execute()

> **execute**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/hover/hover.ts:75](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L75)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`PopupCommand`](../Class.PopupCommand).[`execute`](../Class.PopupCommand.md#execute)

***

### redo()

> **redo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/hover/hover.ts:86](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L86)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`PopupCommand`](../Class.PopupCommand).[`redo`](../Class.PopupCommand.md#redo)

***

### undo()

> **undo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/hover/hover.ts:82](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L82)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`PopupCommand`](../Class.PopupCommand).[`undo`](../Class.PopupCommand.md#undo)
