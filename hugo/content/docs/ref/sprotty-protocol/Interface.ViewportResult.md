
[sprotty-protocol](../globals) / ViewportResult

# Interface: ViewportResult

Defined in: [actions.ts:603](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L603)

Response to a `GetViewportAction`.

## Extends

- [`ResponseAction`](../Interface.ResponseAction)

## Properties

### canvasBounds

> **canvasBounds**: [`Bounds`](../Interface.Bounds)

Defined in: [actions.ts:606](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L606)

***

### kind

> **kind**: `"viewportResult"`

Defined in: [actions.ts:604](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L604)

#### Overrides

[`ResponseAction`](../Interface.ResponseAction).[`kind`](../Interface.ResponseAction.md#kind)

***

### responseId

> **responseId**: `string`

Defined in: [actions.ts:87](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L87)

#### Inherited from

[`ResponseAction`](../Interface.ResponseAction).[`responseId`](../Interface.ResponseAction.md#responseid)

***

### viewport

> **viewport**: [`Viewport`](../Interface.Viewport)

Defined in: [actions.ts:605](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L605)
