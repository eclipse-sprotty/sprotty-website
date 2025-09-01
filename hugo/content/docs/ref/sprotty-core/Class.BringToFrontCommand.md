
### bringToFront()

> `protected` **bringToFront**(`selection`): `void`

Defined in: [packages/sprotty/src/features/zorder/zorder.ts:92](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/zorder/zorder.ts#L92)

#### Parameters

##### selection

[`ZOrderElement`](../TypeAlias.ZOrderElement)

#### Returns

`void`

***

### execute()

> **execute**(`context`): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/features/zorder/zorder.ts:39](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/zorder/zorder.ts#L39)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Overrides

[`Command`](../Class.Command).[`execute`](../Class.Command.md#execute)

***

### includeConnectedEdges()

> `protected` **includeConnectedEdges**(`element?`): `void`

Defined in: [packages/sprotty/src/features/zorder/zorder.ts:57](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/zorder/zorder.ts#L57)

#### Parameters

##### element?

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`void`

***

### redo()

> **redo**(`context`): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/features/zorder/zorder.ts:85](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/zorder/zorder.ts#L85)

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

Defined in: [packages/sprotty/src/features/zorder/zorder.ts:76](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/zorder/zorder.ts#L76)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Overrides

[`Command`](../Class.Command).[`undo`](../Class.Command.md#undo)
