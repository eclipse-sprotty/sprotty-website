
### findJunctionPointsWithSameSource()

> `protected` **findJunctionPointsWithSameSource**(`edge`, `route`, `routing`): `void`

Defined in: [packages/sprotty/src/features/edge-junction/junction-finder.ts:81](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-junction/junction-finder.ts#L81)

Finds the junction points of routes with the same source

#### Parameters

##### edge

[`SEdgeImpl`](../Class.SEdgeImpl)

##### route

[`RoutedPoint`](../Interface.RoutedPoint)[]

##### routing

[`EdgeRouting`](../Class.EdgeRouting)

#### Returns

`void`

***

### findJunctionPointsWithSameTarget()

> `protected` **findJunctionPointsWithSameTarget**(`edge`, `route`, `routing`): `void`

Defined in: [packages/sprotty/src/features/edge-junction/junction-finder.ts:109](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-junction/junction-finder.ts#L109)

Finds the junction points of routes with the same target

#### Parameters

##### edge

[`SEdgeImpl`](../Class.SEdgeImpl)

##### route

[`RoutedPoint`](../Interface.RoutedPoint)[]

##### routing

[`EdgeRouting`](../Class.EdgeRouting)

#### Returns

`void`

***

### findJunctions()

> `protected` **findJunctions**(`routing`, `parent`): `void`

Defined in: [packages/sprotty/src/features/edge-junction/junction-finder.ts:41](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-junction/junction-finder.ts#L41)

#### Parameters

##### routing

[`EdgeRouting`](../Class.EdgeRouting)

##### parent

[`SParentElementImpl`](../Class.SParentElementImpl)

#### Returns

`void`

***

### getJunctionIndex()

> `protected` **getJunctionIndex**(`firstRoute`, `secondRoute`): `number`

Defined in: [packages/sprotty/src/features/edge-junction/junction-finder.ts:230](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-junction/junction-finder.ts#L230)

Finds the index where two routes diverge.
Returns -1 if no divergence can be found.

#### Parameters

##### firstRoute

[`RoutedPoint`](../Interface.RoutedPoint)[]

##### secondRoute

[`RoutedPoint`](../Interface.RoutedPoint)[]

#### Returns

`number`

***

### getSegmentDirection()

> `protected` **getSegmentDirection**(`firstPoint`, `secondPoint`): `"left"` \| `"right"` \| `"down"` \| `"up"`

Defined in: [packages/sprotty/src/features/edge-junction/junction-finder.ts:202](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-junction/junction-finder.ts#L202)

Get the main direction of a segment.
The main direction is the axis with the greatest difference between the two points.

#### Parameters

##### firstPoint

[`RoutedPoint`](../Interface.RoutedPoint)

##### secondPoint

[`RoutedPoint`](../Interface.RoutedPoint)

#### Returns

`"left"` \| `"right"` \| `"down"` \| `"up"`

***

### setJunctionPoints()

> `protected` **setJunctionPoints**(`route`, `otherRoute`, `junctionIndex`): `void`

Defined in: [packages/sprotty/src/features/edge-junction/junction-finder.ts:146](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-junction/junction-finder.ts#L146)

Set the junction points of two routes according to the segments direction.
If the segments have different directions, the junction point is the previous common point.
If the segments have the same direction, the junction point is the point with the greatest or lowest value axis value depending on the direction.

#### Parameters

##### route

[`RoutedPoint`](../Interface.RoutedPoint)[]

##### otherRoute

[`RoutedPoint`](../Interface.RoutedPoint)[]

##### junctionIndex

`number`

#### Returns

`void`

***

### setPreviousPointAsJunction()

> `protected` **setPreviousPointAsJunction**(`route`, `sameSourceRoute`, `junctionIndex`): `void`

Defined in: [packages/sprotty/src/features/edge-junction/junction-finder.ts:193](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-junction/junction-finder.ts#L193)

Set the previous point as a junction point.
This is used when two segments have the same direction but the other axis is different.
For example if the routes are going in opposite directions, or if the route don't split orthogonally.

#### Parameters

##### route

[`RoutedPoint`](../Interface.RoutedPoint)[]

##### sameSourceRoute

[`RoutedPoint`](../Interface.RoutedPoint)[]

##### junctionIndex

`number`

#### Returns

`void`
