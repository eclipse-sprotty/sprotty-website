
[sprotty](../globals) / CommandActionHandler

# Class: CommandActionHandler

Defined in: [packages/sprotty/src/base/commands/command-registration.ts:24](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-registration.ts#L24)

An action handler accepts an action and reacts to it by returning either a command to be
executed, or another action to be dispatched.

## Implements

- [`IActionHandler`](../Interface.IActionHandler)

## Constructors

### Constructor

> **new CommandActionHandler**(`commandRegistration`): `CommandActionHandler`

Defined in: [packages/sprotty/src/base/commands/command-registration.ts:25](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-registration.ts#L25)

#### Parameters

##### commandRegistration

[`CommandRegistration`](../Interface.CommandRegistration)

#### Returns

`CommandActionHandler`

## Methods

### handle()

> **handle**(`action`): [`ICommand`](../Interface.ICommand)

Defined in: [packages/sprotty/src/base/commands/command-registration.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-registration.ts#L28)

#### Parameters

##### action

`Action`

#### Returns

[`ICommand`](../Interface.ICommand)

#### Implementation of

[`IActionHandler`](../Interface.IActionHandler).[`handle`](../Interface.IActionHandler.md#handle)
