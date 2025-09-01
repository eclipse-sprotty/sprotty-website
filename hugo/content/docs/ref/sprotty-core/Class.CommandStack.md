
### modelFactory

> `protected` **modelFactory**: [`IModelFactory`](../Interface.IModelFactory)

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:106](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L106)

***

### modelViewer?

> `protected` `optional` **modelViewer**: [`IViewer`](../Interface.IViewer)

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:114](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L114)

***

### offStack

> `protected` **offStack**: [`ICommand`](../Interface.ICommand)[] = `[]`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:138](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L138)

System commands should be transparent to the user in undo/redo
operations. When a system command is executed when the redo
stack is not empty, it is pushed to offStack instead.

On redo, all commands form this stack are undone such that the
redo operation gets the exact same model as when it was executed
first.

On undo, all commands form this stack are undone as well as
system ommands should be transparent to the user.

***

### options

> `protected` **options**: [`CommandStackOptions`](../Interface.CommandStackOptions)

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:110](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L110)

***

### popupModelViewer?

> `protected` `optional` **popupModelViewer**: [`IViewer`](../Interface.IViewer)

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:116](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L116)

***

### redoStack

> `protected` **redoStack**: [`ICommand`](../Interface.ICommand)[] = `[]`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:119](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L119)

***

### stoppableCommands

> `protected` **stoppableCommands**: `Map`\<`string`, [`IStoppableCommand`](../Interface.IStoppableCommand)\>

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:124](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L124)

Map which holds the last stoppable command for certain action kinds.

***

### syncer

> `protected` **syncer**: [`AnimationFrameSyncer`](../Class.AnimationFrameSyncer)

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:109](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L109)

***

### undoStack

> `protected` **undoStack**: [`ICommand`](../Interface.ICommand)[] = `[]`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:118](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L118)

***

### viewerProvider

> `protected` **viewerProvider**: [`IViewerProvider`](../Interface.IViewerProvider)

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:107](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L107)

## Accessors

### currentModel

#### Get Signature

> **get** `protected` **currentModel**(): `Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:158](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L158)

##### Returns

`Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

## Methods

### createContext()

> `protected` **createContext**(`currentModel`): [`CommandExecutionContext`](../Interface.CommandExecutionContext)

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:427](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L427)

Assembles the context object that is passed to the commands execution method.

#### Parameters

##### currentModel

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Returns

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

***

### execute()

> **execute**(`command`): `Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:174](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L174)

Executes the given command on the current model and returns a
Promise for the new result.

Unless it is a special command, it is pushed to the undo stack
such that it can be rolled back later and the redo stack is
cleared.

#### Parameters

##### command

[`ICommand`](../Interface.ICommand)

#### Returns

`Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

#### Implementation of

[`ICommandStack`](../Interface.ICommandStack).[`execute`](../Interface.ICommandStack.md#execute)

***

### executeAll()

> **executeAll**(`commands`): `Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:164](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L164)

Executes all of the given commands. As opposed to calling
execute() multiple times, the Viewer is only updated once after
the last command has been executed.

#### Parameters

##### commands

[`ICommand`](../Interface.ICommand)[]

#### Returns

`Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

#### Implementation of

[`ICommandStack`](../Interface.ICommandStack).[`executeAll`](../Interface.ICommandStack.md#executeall)

***

### handleCommand()

> `protected` **handleCommand**(`command`, `operation`, `beforeResolve`): `void`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:215](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L215)

Chains the current promise with another Promise that performs the
given operation on the given command.

#### Parameters

##### command

[`ICommand`](../Interface.ICommand)

##### operation

(`context`) => [`CommandReturn`](../TypeAlias.CommandReturn)

##### beforeResolve

(`command`, `context`) => `void`

a function that is called directly before
     resolving the Promise to return the new model. Usually puts the
     command on the appropriate stack.

#### Returns

`void`

***

### initialize()

> `protected` **initialize**(): `void`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:141](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L141)

#### Returns

`void`

***

### isBlockUndo()

> `protected` **isBlockUndo**(`command`): `boolean`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:446](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L446)

#### Parameters

##### command

[`ICommand`](../Interface.ICommand)

#### Returns

`boolean`

***

### isPushToOffStack()

> `protected` **isPushToOffStack**(`command`): `boolean`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:438](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L438)

#### Parameters

##### command

[`ICommand`](../Interface.ICommand)

#### Returns

`boolean`

***

### isPushToUndoStack()

> `protected` **isPushToUndoStack**(`command`): `boolean`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:442](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L442)

#### Parameters

##### command

[`ICommand`](../Interface.ICommand)

#### Returns

`boolean`

***

### mergeOrPush()

> `protected` **mergeOrPush**(`command`, `context`): `void`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:348](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L348)

Handling of commands after their execution.

Hidden commands are not pushed to any stack.

System commands are pushed to the <code>offStack</code> when the redo
stack is not empty, allowing to undo the before a redo to keep the chain
of commands consistent.

Mergable commands are merged if possible.

#### Parameters

##### command

[`ICommand`](../Interface.ICommand)

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

`void`

***

### pushToUndoStack()

> `protected` **pushToUndoStack**(`command`): `void`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:274](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L274)

#### Parameters

##### command

[`ICommand`](../Interface.ICommand)

#### Returns

`void`

***

### redo()

> **redo**(): `Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:194](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L194)

Takes the topmost command from the redo stack, redoes its
changes and pushes it ot the undo stack. Returns a Promise for
the changed model.

#### Returns

`Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

#### Implementation of

[`ICommandStack`](../Interface.ICommandStack).[`redo`](../Interface.ICommandStack.md#redo)

***

### redoFollowingSystemCommands()

> `protected` **redoFollowingSystemCommands**(): `void`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:412](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L412)

System commands should be transparent to the user, so this method
is called from <code>redo()</code> to re-execute all system commands
at the top of the redoStack.

#### Returns

`void`

***

### thenUpdate()

> `protected` **thenUpdate**(): `Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:284](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L284)

Notifies the Viewer to render the new model and/or the new hidden model
and returns a Promise for the new model.

#### Returns

`Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

***

### undo()

> **undo**(): `Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:180](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L180)

Takes the topmost command from the undo stack, undoes its
changes and pushes it ot the redo stack. Returns a Promise for
the changed model.

#### Returns

`Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

#### Implementation of

[`ICommandStack`](../Interface.ICommandStack).[`undo`](../Interface.ICommandStack.md#undo)

***

### undoOffStackSystemCommands()

> `protected` **undoOffStackSystemCommands**(): `void`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:381](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L381)

Reverts all system commands on the offStack.

#### Returns

`void`

***

### undoPreceedingSystemCommands()

> `protected` **undoPreceedingSystemCommands**(): `void`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:395](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L395)

System commands should be transparent to the user, so this method
is called from <code>undo()</code> to revert all system commands
at the top of the undoStack.

#### Returns

`void`

***

### update()

> **update**(`model`, `cause?`): `void`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:310](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L310)

Notify the `ModelViewer` that the model has changed.

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### cause?

`Action`

#### Returns

`void`

***

### updateHidden()

> **updateHidden**(`model`, `cause?`): `void`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:320](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L320)

Notify the `HiddenModelViewer` that the hidden model has changed.

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### cause?

`Action`

#### Returns

`void`

***

### updatePopup()

> **updatePopup**(`model`, `cause?`): `void`

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:330](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L330)

Notify the `PopupModelViewer` that the popup model has changed.

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### cause?

`Action`

#### Returns

`void`
