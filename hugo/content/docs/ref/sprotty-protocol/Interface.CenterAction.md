
[sprotty-protocol](../globals) / CenterAction

# Interface: CenterAction

Defined in: [actions.ts:511](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L511)

Triggered when the user requests the viewer to center on the current model. The resulting
CenterCommand changes the scroll setting of the viewport accordingly.
It also resets the zoom to its default if retainZoom is false.
This action can also be sent from the model source to the client in order to perform such a
viewport change programmatically.

## Extends

- [`Action`](../Interface.Action)

## Properties

### animate

> **animate**: `boolean`

Defined in: [actions.ts:514](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L514)

***

### elementIds

> **elementIds**: `string`[]

Defined in: [actions.ts:513](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L513)

***

### kind

> **kind**: `"center"`

Defined in: [actions.ts:512](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L512)

#### Overrides

[`Action`](../Interface.Action).[`kind`](../Interface.Action.md#kind)

***

### retainZoom

> **retainZoom**: `boolean`

Defined in: [actions.ts:515](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L515)

***

### zoomScale?

> `optional` **zoomScale**: `number`

Defined in: [actions.ts:516](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L516)
