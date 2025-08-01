
[sprotty](../globals) / EllipseAnchor

# Class: EllipseAnchor

Defined in: [packages/sprotty/src/features/routing/polyline-anchors.ts:25](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/polyline-anchors.ts#L25)

## Extended by

- [`BezierEllipseAnchor`](../Class.BezierEllipseAnchor)

## Implements

- [`IAnchorComputer`](../Interface.IAnchorComputer)

## Constructors

### Constructor

> **new EllipseAnchor**(): `EllipseAnchor`

#### Returns

`EllipseAnchor`

## Accessors

### kind

#### Get Signature

> **get** **kind**(): `string`

Defined in: [packages/sprotty/src/features/routing/polyline-anchors.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/polyline-anchors.ts#L27)

##### Returns

`string`

#### Implementation of

[`IAnchorComputer`](../Interface.IAnchorComputer).[`kind`](../Interface.IAnchorComputer.md#kind)

## Methods

### getAnchor()

> **getAnchor**(`connectable`, `refPoint`, `offset`): `Point`

Defined in: [packages/sprotty/src/features/routing/polyline-anchors.ts:31](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/polyline-anchors.ts#L31)

Compute an anchor position for routing an edge towards this element.

The default implementation returns the element's center point. If edges should be connected
differently, e.g. to some point on the boundary of the element's view, the according computation
should be implemented in a subclass by overriding this method.

#### Parameters

##### connectable

[`SConnectableElementImpl`](../Class.SConnectableElementImpl)

The node or port an edge should be connected to.

##### refPoint

`Point`

##### offset

`number` = `0`

An optional offset value to be considered in the anchor computation;
              positive values should shift the anchor away from this element, negative values
              should shift the anchor more to the inside. Use this to adapt ot arrow heads.

#### Returns

`Point`

#### Implementation of

[`IAnchorComputer`](../Interface.IAnchorComputer).[`getAnchor`](../Interface.IAnchorComputer.md#getanchor)
