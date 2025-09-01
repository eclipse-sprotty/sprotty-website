
[sprotty](../globals) / CommandActionHandlerInitializer

# Class: CommandActionHandlerInitializer

Defined in: [packages/sprotty/src/base/commands/command-registration.ts:34](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-registration.ts#L34)

Initializes and registers an action handler for multiple action kinds. In most cases
`ActionHandlerRegistration` should be used instead.

## Implements

- [`IActionHandlerInitializer`](../Interface.IActionHandlerInitializer)

## Constructors

### Constructor

> **new CommandActionHandlerInitializer**(`registrations`): `CommandActionHandlerInitializer`

Defined in: [packages/sprotty/src/base/commands/command-registration.ts:36](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-registration.ts#L36)

#### Parameters

##### registrations

[`CommandRegistration`](../Interface.CommandRegistration)[]

#### Returns

`CommandActionHandlerInitializer`

## Properties

### registrations

> `protected` **registrations**: [`CommandRegistration`](../Interface.CommandRegistration)[]

Defined in: [packages/sprotty/src/base/commands/command-registration.ts:36](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-registration.ts#L36)

## Methods

### initialize()

> **initialize**(`registry`): `void`

Defined in: [packages/sprotty/src/base/commands/command-registration.ts:39](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-registration.ts#L39)

#### Parameters

##### registry

[`ActionHandlerRegistry`](../Class.ActionHandlerRegistry)

#### Returns

`void`

#### Implementation of

[`IActionHandlerInitializer`](../Interface.IActionHandlerInitializer).[`initialize`](../Interface.IActionHandlerInitializer.md#initialize)
