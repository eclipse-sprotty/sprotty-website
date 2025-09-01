
[sprotty](../globals) / CommandStackProvider

# Type Alias: CommandStackProvider()

> **CommandStackProvider** = () => `Promise`\<[`ICommandStack`](../Interface.ICommandStack)\>

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:75](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L75)

As part of the event cylce, the ICommandStack should be injected
using a provider to avoid cyclic injection dependencies.

## Returns

`Promise`\<[`ICommandStack`](../Interface.ICommandStack)\>
