
[sprotty](../globals) / getAbsoluteClientBounds

# Function: getAbsoluteClientBounds()

> **getAbsoluteClientBounds**(`element`, `domHelper`, `viewerOptions`): `Bounds`

Defined in: [packages/sprotty/src/features/bounds/model.ts:128](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/model.ts#L128)

Returns the "client-absolute" bounds of the specified `element`.

The client-absolute bounds are relative to the entire browser page.

## Parameters

### element

[`SModelElementImpl`](../Class.SModelElementImpl)

The element to get the bounds for.

### domHelper

`DOMHelper`

The dom helper to obtain the SVG element's id.

### viewerOptions

[`ViewerOptions`](../Interface.ViewerOptions)

The viewer options to obtain sprotty's container div id.

## Returns

`Bounds`
