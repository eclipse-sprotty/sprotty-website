
### edgeRouterRegistry?

> `optional` **edgeRouterRegistry**: [`EdgeRouterRegistry`](../Class.EdgeRouterRegistry)

Defined in: [packages/sprotty/src/features/move/move.ts:67](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L67)

***

### resolvedMoves

> `protected` **resolvedMoves**: `Map`\<`string`, [`ResolvedElementMove`](../Interface.ResolvedElementMove)\>

Defined in: [packages/sprotty/src/features/move/move.ts:69](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L69)

***

### stoppableCommandKey

> **stoppableCommandKey**: `string`

Defined in: [packages/sprotty/src/features/move/move.ts:73](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L73)

#### Implementation of

[`IStoppableCommand`](../Interface.IStoppableCommand).[`stoppableCommandKey`](../Interface.IStoppableCommand.md#stoppablecommandkey)

***

### KIND

> `readonly` `static` **KIND**: `"move"` = `MoveAction.KIND`

Defined in: [packages/sprotty/src/features/move/move.ts:65](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L65)

## Methods

### doMove()

> `protected` **doMove**(`edge2move`, `attachedEdgeShifts`): `void`

Defined in: [packages/sprotty/src/features/move/move.ts:179](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L179)

#### Parameters

##### edge2move

`Map`\<[`SRoutableElementImpl`](../Class.SRoutableElementImpl), [`ResolvedHandleMove`](../Interface.ResolvedHandleMove)[]\>

##### attachedEdgeShifts

`Map`\<[`SRoutableElementImpl`](../Class.SRoutableElementImpl), `Point`\>

#### Returns

`void`

***

### execute()

> **execute**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/move/move.ts:89](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L89)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Implementation of

[`IStoppableCommand`](../Interface.IStoppableCommand).[`execute`](../Interface.IStoppableCommand.md#execute)

#### Overrides

[`MergeableCommand`](../Class.MergeableCommand).[`execute`](../Class.MergeableCommand.md#execute)

***

### isAttachedEdge()

> `protected` **isAttachedEdge**(`edge`): `boolean`

Defined in: [packages/sprotty/src/features/move/move.ts:221](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L221)

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

#### Returns

`boolean`

***

### isChildOfMovedElements()

> `protected` **isChildOfMovedElements**(`el`): `boolean`

Defined in: [packages/sprotty/src/features/move/move.ts:209](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L209)

#### Parameters

##### el

[`SChildElementImpl`](../Class.SChildElementImpl)

#### Returns

`boolean`

***

### merge()

> **merge**(`other`, `context`): `boolean`

Defined in: [packages/sprotty/src/features/move/move.ts:260](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L260)

Tries to merge the given command with this.

#### Parameters

##### other

[`ICommand`](../Interface.ICommand)

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

`boolean`

#### Overrides

[`MergeableCommand`](../Class.MergeableCommand).[`merge`](../Class.MergeableCommand.md#merge)

***

### redo()

> **redo**(`context`): `Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

Defined in: [packages/sprotty/src/features/move/move.ts:253](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L253)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

`Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

#### Implementation of

[`IStoppableCommand`](../Interface.IStoppableCommand).[`redo`](../Interface.IStoppableCommand.md#redo)

#### Overrides

[`MergeableCommand`](../Class.MergeableCommand).[`redo`](../Class.MergeableCommand.md#redo)

***

### resolveElementMove()

> `protected` **resolveElementMove**(`element`, `move`): `undefined` \| [`ResolvedElementMove`](../Interface.ResolvedElementMove)

Defined in: [packages/sprotty/src/features/move/move.ts:169](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L169)

#### Parameters

##### element

[`SModelElementImpl`](../Class.SModelElementImpl) & `Locateable`

##### move

[`ElementMove`](../Interface.ElementMove)

#### Returns

`undefined` \| [`ResolvedElementMove`](../Interface.ResolvedElementMove)

***

### resolveHandleMove()

> `protected` **resolveHandleMove**(`handle`, `edge`, `move`): `undefined` \| [`ResolvedHandleMove`](../Interface.ResolvedHandleMove)

Defined in: [packages/sprotty/src/features/move/move.ts:154](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L154)

#### Parameters

##### handle

[`SRoutingHandleImpl`](../Class.SRoutingHandleImpl)

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### move

[`ElementMove`](../Interface.ElementMove)

#### Returns

`undefined` \| [`ResolvedHandleMove`](../Interface.ResolvedHandleMove)

***

### stopExecution()

> **stopExecution**(): `void`

Defined in: [packages/sprotty/src/features/move/move.ts:82](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L82)

#### Returns

`void`

#### Implementation of

[`IStoppableCommand`](../Interface.IStoppableCommand).[`stopExecution`](../Interface.IStoppableCommand.md#stopexecution)

***

### undo()

> **undo**(`context`): `Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

Defined in: [packages/sprotty/src/features/move/move.ts:246](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L246)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

`Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

#### Implementation of

[`IStoppableCommand`](../Interface.IStoppableCommand).[`undo`](../Interface.IStoppableCommand.md#undo)

#### Overrides

[`MergeableCommand`](../Class.MergeableCommand).[`undo`](../Class.MergeableCommand.md#undo)

***

### undoMove()

> `protected` **undoMove**(): `void`

Defined in: [packages/sprotty/src/features/move/move.ts:236](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L236)

#### Returns

`void`
