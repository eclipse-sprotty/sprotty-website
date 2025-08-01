
[sprotty](../globals) / CommandReturn

# Type Alias: CommandReturn

> **CommandReturn** = [`SModelRootImpl`](../Class.SModelRootImpl) \| `Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\> \| [`CommandResult`](../TypeAlias.CommandResult)

Defined in: [packages/sprotty/src/base/commands/command.ts:76](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command.ts#L76)

Commands return the changed model or a Promise for it. Promises
serve animating commands to render some intermediate states before
finishing. The CommandStack is in charge of chaining these promises,
such that they run sequentially only one at a time. Due to that
chaining, it is essential that a command does not make any assumption
on the state of the model before execute() is called.
