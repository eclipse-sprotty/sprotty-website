
### redo()

> **redo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/base/commands/request-command.ts:44](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/request-command.ts#L44)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Inherited from

`ModelRequestCommand.redo`

***

### retrieveResult()

> `protected` **retrieveResult**(`context`): `ResponseAction`

Defined in: [packages/sprotty/src/features/viewport/viewport.ts:95](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport.ts#L95)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

`ResponseAction`

#### Overrides

`ModelRequestCommand.retrieveResult`

***

### undo()

> **undo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/base/commands/request-command.ts:40](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/request-command.ts#L40)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Inherited from

`ModelRequestCommand.undo`
