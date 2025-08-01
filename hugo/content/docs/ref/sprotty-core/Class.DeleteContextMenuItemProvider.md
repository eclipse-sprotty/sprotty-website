
[sprotty](../globals) / DeleteContextMenuItemProvider

# Class: DeleteContextMenuItemProvider

Defined in: [packages/sprotty/src/features/context-menu/menu-providers.ts:69](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/context-menu/menu-providers.ts#L69)

## Implements

- [`IContextMenuItemProvider`](../Interface.IContextMenuItemProvider)

## Constructors

### Constructor

> **new DeleteContextMenuItemProvider**(): `DeleteContextMenuItemProvider`

#### Returns

`DeleteContextMenuItemProvider`

## Methods

### getItems()

> **getItems**(`root`, `lastMousePosition?`): `Promise`\<[`MenuItem`](../Interface.MenuItem)[]\>

Defined in: [packages/sprotty/src/features/context-menu/menu-providers.ts:70](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/context-menu/menu-providers.ts#L70)

#### Parameters

##### root

`Readonly`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

##### lastMousePosition?

`Point`

#### Returns

`Promise`\<[`MenuItem`](../Interface.MenuItem)[]\>

#### Implementation of

[`IContextMenuItemProvider`](../Interface.IContextMenuItemProvider).[`getItems`](../Interface.IContextMenuItemProvider.md#getitems)
