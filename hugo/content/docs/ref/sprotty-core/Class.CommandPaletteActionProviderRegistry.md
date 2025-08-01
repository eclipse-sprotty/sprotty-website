
[sprotty](../globals) / CommandPaletteActionProviderRegistry

# Class: CommandPaletteActionProviderRegistry

Defined in: [packages/sprotty/src/features/command-palette/action-providers.ts:32](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/command-palette/action-providers.ts#L32)

## Implements

- [`ICommandPaletteActionProvider`](../Interface.ICommandPaletteActionProvider)

## Constructors

### Constructor

> **new CommandPaletteActionProviderRegistry**(`actionProviders`): `CommandPaletteActionProviderRegistry`

Defined in: [packages/sprotty/src/features/command-palette/action-providers.ts:34](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/command-palette/action-providers.ts#L34)

#### Parameters

##### actionProviders

[`ICommandPaletteActionProvider`](../Interface.ICommandPaletteActionProvider)[] = `[]`

#### Returns

`CommandPaletteActionProviderRegistry`

## Properties

### actionProviders

> `protected` **actionProviders**: [`ICommandPaletteActionProvider`](../Interface.ICommandPaletteActionProvider)[] = `[]`

Defined in: [packages/sprotty/src/features/command-palette/action-providers.ts:34](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/command-palette/action-providers.ts#L34)

## Methods

### getActions()

> **getActions**(`root`, `text`, `lastMousePosition?`, `index?`): `Promise`\<[`LabeledAction`](../Class.LabeledAction)[]\>

Defined in: [packages/sprotty/src/features/command-palette/action-providers.ts:37](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/command-palette/action-providers.ts#L37)

#### Parameters

##### root

`Readonly`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

##### text

`string`

##### lastMousePosition?

`Point`

##### index?

`number`

#### Returns

`Promise`\<[`LabeledAction`](../Class.LabeledAction)[]\>

#### Implementation of

[`ICommandPaletteActionProvider`](../Interface.ICommandPaletteActionProvider).[`getActions`](../Interface.ICommandPaletteActionProvider.md#getactions)
