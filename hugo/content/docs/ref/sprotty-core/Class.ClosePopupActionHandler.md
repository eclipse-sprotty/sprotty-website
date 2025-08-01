
[sprotty](../globals) / ClosePopupActionHandler

# Class: ClosePopupActionHandler

Defined in: [packages/sprotty/src/features/hover/hover.ts:306](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L306)

An action handler accepts an action and reacts to it by returning either a command to be
executed, or another action to be dispatched.

## Implements

- [`IActionHandler`](../Interface.IActionHandler)

## Constructors

### Constructor

> **new ClosePopupActionHandler**(): `ClosePopupActionHandler`

#### Returns

`ClosePopupActionHandler`

## Properties

### popupOpen

> `protected` **popupOpen**: `boolean` = `false`

Defined in: [packages/sprotty/src/features/hover/hover.ts:307](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L307)

## Methods

### handle()

> **handle**(`action`): `void` \| `Action` \| [`ICommand`](../Interface.ICommand)

Defined in: [packages/sprotty/src/features/hover/hover.ts:309](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L309)

#### Parameters

##### action

`Action`

#### Returns

`void` \| `Action` \| [`ICommand`](../Interface.ICommand)

#### Implementation of

[`IActionHandler`](../Interface.IActionHandler).[`handle`](../Interface.IActionHandler.md#handle)
