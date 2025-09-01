
[sprotty](../globals) / configureCommand

# Function: configureCommand()

> **configureCommand**\<`T`\>(`context`, `constr`): `void`

Defined in: [packages/sprotty/src/base/commands/command-registration.ts:59](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-registration.ts#L59)

Use this method in your DI configuration to register a new command to the diagram.

## Type Parameters

### T

`T` *extends* `Action`

## Parameters

### context

#### bind

`Bind`

#### isBound

`IsBound`

### constr

[`ICommandConstructor`](../Interface.ICommandConstructor)\<`T`\>

## Returns

`void`
