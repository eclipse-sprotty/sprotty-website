
[sprotty-protocol](../globals) / Viewport

# Interface: Viewport

Defined in: [model.ts:103](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L103)

A viewport has a scroll position and a zoom factor. Usually these properties are
applied to the root element to enable navigating through the diagram.

## Extends

- [`Scrollable`](../Interface.Scrollable).[`Zoomable`](../Interface.Zoomable)

## Properties

### scroll

> **scroll**: [`Point`](../Interface.Point)

Defined in: [model.ts:111](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L111)

#### Inherited from

[`Scrollable`](../Interface.Scrollable).[`scroll`](../Interface.Scrollable.md#scroll)

***

### zoom

> **zoom**: `number`

Defined in: [model.ts:123](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L123)

#### Inherited from

[`Zoomable`](../Interface.Zoomable).[`zoom`](../Interface.Zoomable.md#zoom)
