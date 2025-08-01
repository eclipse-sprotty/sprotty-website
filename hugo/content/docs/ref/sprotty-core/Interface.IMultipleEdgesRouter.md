
### cleanupRoutingPoints()

> **cleanupRoutingPoints**(`edge`, `routingPoints`, `updateHandles`, `addRoutingPoints`): `void`

Defined in: [packages/sprotty/src/features/routing/routing.ts:123](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/routing.ts#L123)

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

#### Inherited from

[`IEdgeRouter`](../Interface.IEdgeRouter).[`cleanupRoutingPoints`](../Interface.IEdgeRouter.md#cleanuproutingpoints)

***

### createRoutingHandles()

> **createRoutingHandles**(`edge`): `void`

Defined in: [packages/sprotty/src/features/routing/routing.ts:108](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/routing.ts#L108)

Creates the routing handles for the given target.

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

#### Returns

`void`

#### Inherited from

[`IEdgeRouter`](../Interface.IEdgeRouter).[`createRoutingHandles`](../Interface.IEdgeRouter.md#createroutinghandles)

***

### derivativeAt()

> **derivativeAt**(`edge`, `t`): `undefined` \| `Point`

Defined in: [packages/sprotty/src/features/routing/routing.ts:98](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/routing.ts#L98)

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

#### Inherited from

[`IEdgeRouter`](../Interface.IEdgeRouter).[`derivativeAt`](../Interface.IEdgeRouter.md#derivativeat)

***

### findOrthogonalIntersection()

> **findOrthogonalIntersection**(`edge`, `point`): `undefined` \| \{ `derivative`: `Point`; `point`: `Point`; \}

Defined in: [packages/sprotty/src/features/routing/routing.ts:82](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/routing.ts#L82)

Finds the orthogonal intersection point between an edge and a given point in 2D space.

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

The edge to find the intersection point on.

##### point

`Point`

The point to find the intersection with.

#### Returns

`undefined` \| \{ `derivative`: `Point`; `point`: `Point`; \}

The intersection point and its derivative on the respective edge segment.

#### Inherited from

[`IEdgeRouter`](../Interface.IEdgeRouter).[`findOrthogonalIntersection`](../Interface.IEdgeRouter.md#findorthogonalintersection)

***

### getHandlePosition()

> **getHandlePosition**(`edge`, `route`, `handle`): `undefined` \| `Point`

Defined in: [packages/sprotty/src/features/routing/routing.ts:103](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/routing.ts#L103)

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

#### Inherited from

[`IEdgeRouter`](../Interface.IEdgeRouter).[`getHandlePosition`](../Interface.IEdgeRouter.md#gethandleposition)

***

### pointAt()

> **pointAt**(`edge`, `t`): `undefined` \| `Point`

Defined in: [packages/sprotty/src/features/routing/routing.ts:90](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/routing.ts#L90)

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

#### Inherited from

[`IEdgeRouter`](../Interface.IEdgeRouter).[`pointAt`](../Interface.IEdgeRouter.md#pointat)

***

### route()

> **route**(`edge`): [`RoutedPoint`](../Interface.RoutedPoint)[]

Defined in: [packages/sprotty/src/features/routing/routing.ts:73](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/routing.ts#L73)

Calculates the route of the given edge.

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

#### Returns

[`RoutedPoint`](../Interface.RoutedPoint)[]

#### Inherited from

[`IEdgeRouter`](../Interface.IEdgeRouter).[`route`](../Interface.IEdgeRouter.md#route)

***

### routeAll()

> **routeAll**(`edges`, `parent`): [`EdgeRouting`](../Class.EdgeRouting)

Defined in: [packages/sprotty/src/features/routing/routing.ts:137](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/routing.ts#L137)

#### Parameters

##### edges

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)[]

##### parent

`Readonly`\<[`SParentElementImpl`](../Class.SParentElementImpl)\>

#### Returns

[`EdgeRouting`](../Class.EdgeRouting)

***

### takeSnapshot()

> **takeSnapshot**(`edge`): [`EdgeSnapshot`](../Interface.EdgeSnapshot)

Defined in: [packages/sprotty/src/features/routing/routing.ts:128](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/routing.ts#L128)

Creates a snapshot of the given edge, storing all the data needed to restore it to
its current state.

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

#### Returns

[`EdgeSnapshot`](../Interface.EdgeSnapshot)

#### Inherited from

[`IEdgeRouter`](../Interface.IEdgeRouter).[`takeSnapshot`](../Interface.IEdgeRouter.md#takesnapshot)
