
[sprotty](../globals) / ICommandPaletteActionProvider

# Interface: ICommandPaletteActionProvider

Defined in: [packages/sprotty/src/features/command-palette/action-providers.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/command-palette/action-providers.ts#L27)

## Methods

### getActions()

> **getActions**(`root`, `text`, `lastMousePosition?`, `index?`): `Promise`\<[`LabeledAction`](../Class.LabeledAction)[]\>

Defined in: [packages/sprotty/src/features/command-palette/action-providers.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/command-palette/action-providers.ts#L28)

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
