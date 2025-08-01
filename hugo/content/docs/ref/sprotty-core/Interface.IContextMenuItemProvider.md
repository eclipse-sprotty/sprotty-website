
[sprotty](../globals) / IContextMenuItemProvider

# Interface: IContextMenuItemProvider

Defined in: [packages/sprotty/src/features/context-menu/menu-providers.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/context-menu/menu-providers.ts#L27)

## Methods

### getItems()

> **getItems**(`root`, `lastMousePosition?`): `Promise`\<[`LabeledAction`](../Class.LabeledAction)[]\>

Defined in: [packages/sprotty/src/features/context-menu/menu-providers.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/context-menu/menu-providers.ts#L28)

#### Parameters

##### root

`Readonly`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

##### lastMousePosition?

`Point`

#### Returns

`Promise`\<[`LabeledAction`](../Class.LabeledAction)[]\>
