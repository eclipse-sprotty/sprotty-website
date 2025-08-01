
[sprotty-protocol](../globals) / SetViewportAction

# Interface: SetViewportAction

Defined in: [actions.ts:564](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L564)

Directly set the diagram viewport to the given scroll and zoom values.
The ID of the viewport element to manipulate must be given with the action
(usually it is the root element's ID).

## Extends

- [`Action`](../Interface.Action)

## Properties

### animate

> **animate**: `boolean`

Defined in: [actions.ts:568](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L568)

***

### elementId

> **elementId**: `string`

Defined in: [actions.ts:566](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L566)

***

### kind

> **kind**: `"viewport"`

Defined in: [actions.ts:565](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L565)

#### Overrides

[`Action`](../Interface.Action).[`kind`](../Interface.Action.md#kind)

***

### newViewport

> **newViewport**: [`Viewport`](../Interface.Viewport)

Defined in: [actions.ts:567](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L567)
