
[sprotty](../globals) / ManhattanDiamondAnchor

# Class: ManhattanDiamondAnchor

Defined in: [packages/sprotty/src/features/routing/manhattan-anchors.ts:61](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/manhattan-anchors.ts#L61)

## Implements

- [`IAnchorComputer`](../Interface.IAnchorComputer)

## Constructors

### Constructor

> **new ManhattanDiamondAnchor**(): `ManhattanDiamondAnchor`

#### Returns

`ManhattanDiamondAnchor`

## Properties

### KIND

> `static` **KIND**: `string`

Defined in: [packages/sprotty/src/features/routing/manhattan-anchors.ts:63](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/manhattan-anchors.ts#L63)

## Accessors

### kind

#### Get Signature

> **get** **kind**(): `string`

Defined in: [packages/sprotty/src/features/routing/manhattan-anchors.ts:65](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/manhattan-anchors.ts#L65)

##### Returns

`string`

#### Implementation of

[`IAnchorComputer`](../Interface.IAnchorComputer).[`kind`](../Interface.IAnchorComputer.md#kind)

## Methods

### getAnchor()

> **getAnchor**(`connectable`, `refPoint`, `offset`): `Point`

Defined in: [packages/sprotty/src/features/routing/manhattan-anchors.ts:69](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/manhattan-anchors.ts#L69)

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
