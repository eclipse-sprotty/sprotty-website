
[sprotty](../globals) / IAnchorComputer

# Interface: IAnchorComputer

Defined in: [packages/sprotty/src/features/routing/anchor.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/anchor.ts#L27)

## Properties

### kind

> `readonly` **kind**: `string`

Defined in: [packages/sprotty/src/features/routing/anchor.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/anchor.ts#L28)

## Methods

### getAnchor()

> **getAnchor**(`connectable`, `referencePoint`, `offset?`): `Point`

Defined in: [packages/sprotty/src/features/routing/anchor.ts:44](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/anchor.ts#L44)

Compute an anchor position for routing an edge towards this element.

The default implementation returns the element's center point. If edges should be connected
differently, e.g. to some point on the boundary of the element's view, the according computation
should be implemented in a subclass by overriding this method.

#### Parameters

##### connectable

[`SConnectableElementImpl`](../Class.SConnectableElementImpl)

The node or port an edge should be connected to.

##### referencePoint

`Point`

The point from which the edge is routed towards this elemet, in the same
                      coordintae system as the connectable.

##### offset?

`number`

An optional offset value to be considered in the anchor computation;
              positive values should shift the anchor away from this element, negative values
              should shift the anchor more to the inside. Use this to adapt ot arrow heads.

#### Returns

`Point`
