
[sprotty](../globals) / IActionHandler

# Interface: IActionHandler

Defined in: [packages/sprotty/src/base/actions/action-handler.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action-handler.ts#L28)

An action handler accepts an action and reacts to it by returning either a command to be
executed, or another action to be dispatched.

## Methods

### handle()

> **handle**(`action`): `void` \| `Action` \| [`ICommand`](../Interface.ICommand)

Defined in: [packages/sprotty/src/base/actions/action-handler.ts:29](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action-handler.ts#L29)

#### Parameters

##### action

`Action`

#### Returns

`void` \| `Action` \| [`ICommand`](../Interface.ICommand)
