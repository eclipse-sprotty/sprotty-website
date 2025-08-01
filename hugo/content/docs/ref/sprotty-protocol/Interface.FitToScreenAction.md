
[sprotty-protocol](../globals) / FitToScreenAction

# Interface: FitToScreenAction

Defined in: [actions.ts:538](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L538)

Triggered when the user requests the viewer to fit its content to the available drawing area.
The resulting FitToScreenCommand changes the zoom and scroll settings of the viewport so the model
can be shown completely. This action can also be sent from the model source to the client in order
to perform such a viewport change programmatically.

## Extends

- [`Action`](../Interface.Action)

## Properties

### animate

> **animate**: `boolean`

Defined in: [actions.ts:543](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L543)

***

### elementIds

> **elementIds**: `string`[]

Defined in: [actions.ts:540](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L540)

***

### kind

> **kind**: `"fit"`

Defined in: [actions.ts:539](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L539)

#### Overrides

[`Action`](../Interface.Action).[`kind`](../Interface.Action.md#kind)

***

### maxZoom?

> `optional` **maxZoom**: `number`

Defined in: [actions.ts:542](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L542)

***

### padding?

> `optional` **padding**: `number`

Defined in: [actions.ts:541](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L541)
