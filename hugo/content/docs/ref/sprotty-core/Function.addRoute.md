
[sprotty](../globals) / addRoute

# Function: addRoute()

> **addRoute**(`routeId`, `route`, `queue`): `void`

Defined in: [packages/sprotty/src/features/edge-intersection/sweepline.ts:45](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-intersection/sweepline.ts#L45)

Add the specified `route` to the event `queue` from left to right.

## Parameters

### routeId

`string`

id of the route.

### route

[`RoutedPoint`](../Interface.RoutedPoint)[]

the route as array of points.

### queue

`TinyQueue`\<[`SweepEvent`](../Class.SweepEvent)\>

the queue to add the route to.

## Returns

`void`
