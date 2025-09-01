
[sprotty](../globals) / ContextMenuProviderRegistry

# Class: ContextMenuProviderRegistry

Defined in: [packages/sprotty/src/features/context-menu/menu-providers.ts:32](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/context-menu/menu-providers.ts#L32)

## Implements

- [`IContextMenuItemProvider`](../Interface.IContextMenuItemProvider)

## Constructors

### Constructor

> **new ContextMenuProviderRegistry**(`menuProviders`): `ContextMenuProviderRegistry`

Defined in: [packages/sprotty/src/features/context-menu/menu-providers.ts:34](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/context-menu/menu-providers.ts#L34)

#### Parameters

##### menuProviders

[`IContextMenuItemProvider`](../Interface.IContextMenuItemProvider)[] = `[]`

#### Returns

`ContextMenuProviderRegistry`

## Properties

### menuProviders

> `protected` **menuProviders**: [`IContextMenuItemProvider`](../Interface.IContextMenuItemProvider)[] = `[]`

Defined in: [packages/sprotty/src/features/context-menu/menu-providers.ts:34](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/context-menu/menu-providers.ts#L34)

## Methods

### getItems()

> **getItems**(`root`, `lastMousePosition?`): `Promise`\<[`MenuItem`](../Interface.MenuItem)[]\>

Defined in: [packages/sprotty/src/features/context-menu/menu-providers.ts:36](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/context-menu/menu-providers.ts#L36)

#### Parameters

##### root

`Readonly`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

##### lastMousePosition?

`Point`

#### Returns

`Promise`\<[`MenuItem`](../Interface.MenuItem)[]\>

#### Implementation of

[`IContextMenuItemProvider`](../Interface.IContextMenuItemProvider).[`getItems`](../Interface.IContextMenuItemProvider.md#getitems)
