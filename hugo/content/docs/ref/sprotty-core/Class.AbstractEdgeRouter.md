
### applyReconnect()

> **applyReconnect**(`edge`, `newSourceId?`, `newTargetId?`): `void`

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:316](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L316)

Updates the routing points and handles of the given edge with regard to the given moves.

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### newSourceId?

`string`

##### newTargetId?

`string`

#### Returns

`void`

#### Implementation of

[`IEdgeRouter`](../Interface.IEdgeRouter).[`applyReconnect`](../Interface.IEdgeRouter.md#applyreconnect)

***

### applySnapshot()

> **applySnapshot**(`edge`, `snapshot`): `void`

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:375](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L375)

Applies a snapshot to the current edge.

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### snapshot

[`EdgeSnapshot`](../Interface.EdgeSnapshot)

#### Returns

`void`

#### Implementation of

[`IEdgeRouter`](../Interface.IEdgeRouter).[`applySnapshot`](../Interface.IEdgeRouter.md#applysnapshot)

***

### calculateDefaultCorners()

> `protected` **calculateDefaultCorners**(`edge`, `sourceAnchors`, `targetAnchors`, `options`): `Point`[]

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:389](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L389)

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### sourceAnchors

[`DefaultAnchors`](../Class.DefaultAnchors)

##### targetAnchors

[`DefaultAnchors`](../Class.DefaultAnchors)

##### options

[`LinearRouteOptions`](../Interface.LinearRouteOptions)

#### Returns

`Point`[]

***

### calculateSegment()

> `protected` **calculateSegment**(`edge`, `t`): `undefined` \| \{ `lambda`: `number`; `segmentEnd`: `Point`; `segmentStart`: `Point`; \}

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:145](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L145)

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### t

`number`

#### Returns

`undefined` \| \{ `lambda`: `number`; `segmentEnd`: `Point`; `segmentStart`: `Point`; \}

***

### cleanupRoutingPoints()

> **cleanupRoutingPoints**(`edge`, `routingPoints`, `updateHandles`, `addRoutingPoints`): `void`

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:284](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L284)

Remove/add points in order to keep routing constraints consistent, or reset RPs on reconnect.

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### routingPoints

`Point`[]

##### updateHandles

`boolean`

##### addRoutingPoints

`boolean`

#### Returns

`void`

#### Implementation of

[`IEdgeRouter`](../Interface.IEdgeRouter).[`cleanupRoutingPoints`](../Interface.IEdgeRouter.md#cleanuproutingpoints)

***

### commitRoute()

> `protected` **commitRoute**(`edge`, `routedPoints`): `void`

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:432](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L432)

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### routedPoints

[`RoutedPoint`](../Interface.RoutedPoint)[]

#### Returns

`void`

***

### createRoutingHandles()

> `abstract` **createRoutingHandles**(`edge`): `void`

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:87](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L87)

Creates the routing handles for the given target.

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

#### Returns

`void`

#### Implementation of

[`IEdgeRouter`](../Interface.IEdgeRouter).[`createRoutingHandles`](../Interface.IEdgeRouter.md#createroutinghandles)

***

### derivativeAt()

> **derivativeAt**(`edge`, `t`): `undefined` \| `Point`

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:134](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L134)

Calculates the derivative at a point on the edge.

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### t

`number`

a value between 0 (sourceAnchor) and 1 (targetAnchor)

#### Returns

`undefined` \| `Point`

the point or undefined if t is out of bounds or it cannot be computed

#### Implementation of

[`IEdgeRouter`](../Interface.IEdgeRouter).[`derivativeAt`](../Interface.IEdgeRouter.md#derivativeat)

***

### findOrthogonalIntersection()

> **findOrthogonalIntersection**(`edge`, `point`): `object`

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:91](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L91)

Finds the orthogonal intersection point between an edge and a given point in 2D space.

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

The edge to find the intersection point on.

##### point

`Point`

The point to find the intersection with.

#### Returns

`object`

The intersection point and its derivative on the respective edge segment.

##### derivative

> **derivative**: `Point`

##### point

> **point**: `Point`

#### Implementation of

[`IEdgeRouter`](../Interface.IEdgeRouter).[`findOrthogonalIntersection`](../Interface.IEdgeRouter.md#findorthogonalintersection)

***

### findRouteSegment()

> `protected` **findRouteSegment**(`edge`, `route`, `handleIndex`): `object`

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:217](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L217)

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### route

[`RoutedPoint`](../Interface.RoutedPoint)[]

##### handleIndex

`number`

#### Returns

`object`

##### end?

> `optional` **end**: `Point`

##### start?

> `optional` **start**: `Point`

***

### getAnchorComputer()

> `protected` **getAnchorComputer**(`connectable`): [`IAnchorComputer`](../Interface.IAnchorComputer)

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:245](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L245)

#### Parameters

##### connectable

[`SConnectableElementImpl`](../Class.SConnectableElementImpl)

#### Returns

[`IAnchorComputer`](../Interface.IAnchorComputer)

***

### getHandlePosition()

> **getHandlePosition**(`edge`, `route`, `handle`): `undefined` \| `Point`

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:192](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L192)

Retuns the position of the given handle based on the routing points of the edge.

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### route

[`RoutedPoint`](../Interface.RoutedPoint)[]

##### handle

[`SRoutingHandleImpl`](../Class.SRoutingHandleImpl)

#### Returns

`undefined` \| `Point`

#### Implementation of

[`IEdgeRouter`](../Interface.IEdgeRouter).[`getHandlePosition`](../Interface.IEdgeRouter.md#gethandleposition)

***

### getInnerHandlePosition()

> `abstract` `protected` **getInnerHandlePosition**(`edge`, `route`, `handle`): `undefined` \| `Point`

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:215](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L215)

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### route

[`RoutedPoint`](../Interface.RoutedPoint)[]

##### handle

[`SRoutingHandleImpl`](../Class.SRoutingHandleImpl)

#### Returns

`undefined` \| `Point`

***

### getOptions()

> `abstract` `protected` **getOptions**(`edge`): [`LinearRouteOptions`](../Interface.LinearRouteOptions)

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:89](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L89)

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

#### Returns

[`LinearRouteOptions`](../Interface.LinearRouteOptions)

***

### getSelfEdgeIndex()

> `protected` **getSelfEdgeIndex**(`edge`): `number`

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:424](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L424)

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

#### Returns

`number`

***

### getTranslatedAnchor()

> **getTranslatedAnchor**(`connectable`, `refPoint`, `refContainer`, `edge`, `anchorCorrection`): `Point`

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:237](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L237)

#### Parameters

##### connectable

[`SConnectableElementImpl`](../Class.SConnectableElementImpl)

##### refPoint

`Point`

##### refContainer

[`SParentElementImpl`](../Class.SParentElementImpl)

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### anchorCorrection

`number` = `0`

#### Returns

`Point`

***

### pointAt()

> **pointAt**(`edge`, `t`): `undefined` \| `Point`

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:126](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L126)

Calculates a point on the edge

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### t

`number`

a value between 0 (sourceAnchor) and 1 (targetAnchor)

#### Returns

`undefined` \| `Point`

the point or undefined if t is out of bounds or it cannot be computed

#### Implementation of

[`IEdgeRouter`](../Interface.IEdgeRouter).[`pointAt`](../Interface.IEdgeRouter.md#pointat)

***

### resetRoutingPointsOnReconnect()

> `protected` **resetRoutingPointsOnReconnect**(`edge`, `routingPoints`, `updateHandles`, `sourceAnchors`, `targetAnchors`): `boolean`

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:290](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L290)

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### routingPoints

`Point`[]

##### updateHandles

`boolean`

##### sourceAnchors

[`DefaultAnchors`](../Class.DefaultAnchors)

##### targetAnchors

[`DefaultAnchors`](../Class.DefaultAnchors)

#### Returns

`boolean`

***

### route()

> `abstract` **route**(`edge`): [`RoutedPoint`](../Interface.RoutedPoint)[]

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:85](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L85)

Calculates the route of the given edge.

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

#### Returns

[`RoutedPoint`](../Interface.RoutedPoint)[]

#### Implementation of

[`IEdgeRouter`](../Interface.IEdgeRouter).[`route`](../Interface.IEdgeRouter.md#route)

***

### takeSnapshot()

> **takeSnapshot**(`edge`): [`EdgeSnapshot`](../Interface.EdgeSnapshot)

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:362](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L362)

Creates a snapshot of the given edge, storing all the data needed to restore it to
its current state.

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

#### Returns

[`EdgeSnapshot`](../Interface.EdgeSnapshot)

#### Implementation of

[`IEdgeRouter`](../Interface.IEdgeRouter).[`takeSnapshot`](../Interface.IEdgeRouter.md#takesnapshot)
