
### skipOffsetAfter

> `protected` **skipOffsetAfter**: `number` = `2`

Defined in: [packages/sprotty/src/graph/views.tsx:142](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L142)

***

### skipOffsetBefore

> `protected` **skipOffsetBefore**: `number` = `3`

Defined in: [packages/sprotty/src/graph/views.tsx:141](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L141)

## Methods

### createGapPath()

> `protected` **createGapPath**(`intersectionPoint`, `lineSegment`): `string`

Defined in: [packages/sprotty/src/graph/views.tsx:258](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L258)

#### Parameters

##### intersectionPoint

`Point`

##### lineSegment

[`PointToPointLine`](../Class.PointToPointLine)

#### Returns

`string`

***

### createJumpPath()

> `protected` **createJumpPath**(`intersectionPoint`, `lineSegment`): `string`

Defined in: [packages/sprotty/src/graph/views.tsx:251](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L251)

#### Parameters

##### intersectionPoint

`Point`

##### lineSegment

[`PointToPointLine`](../Class.PointToPointLine)

#### Returns

`string`

***

### getIntersectionsSortedBySegmentDirection()

> `protected` **getIntersectionsSortedBySegmentDirection**(`lineSegment`, `intersectingPoint`): [`Intersection`](../Interface.Intersection)[]

Defined in: [packages/sprotty/src/graph/views.tsx:200](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L200)

Returns the intersections sorted by the direction of the `lineSegment`.

The coordinate system goes from left to right and top to bottom.
Thus, x increases to the right and y increases downwards.

We need to draw the intersections in the order of the direction of the line segment.
To draw a line pointing north, we need to order intersections by Y in a descending order.
To draw a line pointing south, we need to order intersections by Y in an ascending order.

#### Parameters

##### lineSegment

[`PointToPointLine`](../Class.PointToPointLine)

##### intersectingPoint

[`IntersectingRoutedPoint`](../Interface.IntersectingRoutedPoint)

#### Returns

[`Intersection`](../Interface.Intersection)[]

***

### getLineSegment()

> `protected` **getLineSegment**(`edge`, `intersection`, `args?`, `segments?`): [`PointToPointLine`](../Class.PointToPointLine)

Defined in: [packages/sprotty/src/graph/views.tsx:236](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L236)

#### Parameters

##### edge

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### intersection

[`Intersection`](../Interface.Intersection)

##### args?

[`IViewArgs`](../Interface.IViewArgs)

##### segments?

`Point`[]

#### Returns

[`PointToPointLine`](../Class.PointToPointLine)

***

### getOtherLineSegment()

> `protected` **getOtherLineSegment**(`currentEdge`, `intersection`, `args?`): `undefined` \| [`PointToPointLine`](../Class.PointToPointLine)

Defined in: [packages/sprotty/src/graph/views.tsx:242](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L242)

#### Parameters

##### currentEdge

[`SEdgeImpl`](../Class.SEdgeImpl)

##### intersection

[`Intersection`](../Interface.Intersection)

##### args?

[`IViewArgs`](../Interface.IViewArgs)

#### Returns

`undefined` \| [`PointToPointLine`](../Class.PointToPointLine)

***

### intersectionPath()

> `protected` **intersectionPath**(`edge`, `segments`, `intersectingPoint`, `args?`): `string`

Defined in: [packages/sprotty/src/graph/views.tsx:164](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L164)

Returns a path that takes the intersections into account by drawing a line jump or a gap for intersections on that path.

#### Parameters

##### edge

[`SEdgeImpl`](../Class.SEdgeImpl)

##### segments

`Point`[]

##### intersectingPoint

[`IntersectingRoutedPoint`](../Interface.IntersectingRoutedPoint)

##### args?

[`IViewArgs`](../Interface.IViewArgs)

#### Returns

`string`

***

### isVisible()

> **isVisible**(`model`, `route`, `context`): `boolean`

Defined in: [packages/sprotty/src/features/routing/views.ts:30](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/views.ts#L30)

Check whether the given model element is in the current viewport. Use this method
in your `render` implementation to skip rendering in case the element is not visible.
This can greatly enhance performance for large models.

#### Parameters

##### model

`Readonly`\<[`SRoutableElementImpl`](../Class.SRoutableElementImpl)\>

##### route

`Point`[]

##### context

[`RenderingContext`](../Interface.RenderingContext)

#### Returns

`boolean`

#### Inherited from

[`PolylineEdgeView`](../Class.PolylineEdgeView).[`isVisible`](../Class.PolylineEdgeView.md#isvisible)

***

### render()

> **render**(`edge`, `context`, `args?`): `undefined` \| `VNode`

Defined in: [packages/sprotty/src/graph/views.tsx:67](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L67)

#### Parameters

##### edge

`Readonly`\<[`SEdgeImpl`](../Class.SEdgeImpl)\>

##### context

[`RenderingContext`](../Interface.RenderingContext)

##### args?

[`IViewArgs`](../Interface.IViewArgs)

#### Returns

`undefined` \| `VNode`

#### Inherited from

[`PolylineEdgeView`](../Class.PolylineEdgeView).[`render`](../Class.PolylineEdgeView.md#render)

***

### renderAdditionals()

> `protected` **renderAdditionals**(`edge`, `segments`, `context`): `VNode`[]

Defined in: [packages/sprotty/src/graph/views.tsx:114](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L114)

#### Parameters

##### edge

[`SEdgeImpl`](../Class.SEdgeImpl)

##### segments

`Point`[]

##### context

[`RenderingContext`](../Interface.RenderingContext)

#### Returns

`VNode`[]

#### Inherited from

[`PolylineEdgeView`](../Class.PolylineEdgeView).[`renderAdditionals`](../Class.PolylineEdgeView.md#renderadditionals)

***

### renderDanglingEdge()

> `protected` **renderDanglingEdge**(`message`, `edge`, `context`): `VNode`

Defined in: [packages/sprotty/src/graph/views.tsx:119](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L119)

#### Parameters

##### message

`string`

##### edge

[`SEdgeImpl`](../Class.SEdgeImpl)

##### context

[`RenderingContext`](../Interface.RenderingContext)

#### Returns

`VNode`

#### Inherited from

[`PolylineEdgeView`](../Class.PolylineEdgeView).[`renderDanglingEdge`](../Class.PolylineEdgeView.md#renderdanglingedge)

***

### renderJunctionPoints()

> `protected` **renderJunctionPoints**(`edge`, `route`, `context`, `args`): `any`

Defined in: [packages/sprotty/src/graph/views.tsx:89](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L89)

#### Parameters

##### edge

`Readonly`\<[`SEdgeImpl`](../Class.SEdgeImpl)\>

##### route

[`RoutedPoint`](../Interface.RoutedPoint)[]

##### context

[`RenderingContext`](../Interface.RenderingContext)

##### args

`undefined` | [`IViewArgs`](../Interface.IViewArgs)

#### Returns

`any`

#### Inherited from

[`PolylineEdgeView`](../Class.PolylineEdgeView).[`renderJunctionPoints`](../Class.PolylineEdgeView.md#renderjunctionpoints)

***

### renderLine()

> `protected` **renderLine**(`edge`, `segments`, `context`, `args?`): `VNode`

Defined in: [packages/sprotty/src/graph/views.tsx:144](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L144)

#### Parameters

##### edge

[`SEdgeImpl`](../Class.SEdgeImpl)

##### segments

`Point`[]

##### context

[`RenderingContext`](../Interface.RenderingContext)

##### args?

[`IViewArgs`](../Interface.IViewArgs)

#### Returns

`VNode`

#### Overrides

[`PolylineEdgeView`](../Class.PolylineEdgeView).[`renderLine`](../Class.PolylineEdgeView.md#renderline)

***

### shouldDrawLineGapOnIntersection()

> `protected` **shouldDrawLineGapOnIntersection**(`currentLineSegment`, `otherLineSegment`): `boolean`

Defined in: [packages/sprotty/src/graph/views.tsx:232](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L232)

Whether or not to draw a line gap on an intersection for the `currentLineSegment`.
This should usually be inverse of `shouldDrawLineJumpOnIntersection()`.

#### Parameters

##### currentLineSegment

[`PointToPointLine`](../Class.PointToPointLine)

##### otherLineSegment

[`PointToPointLine`](../Class.PointToPointLine)

#### Returns

`boolean`

***

### shouldDrawLineJumpOnIntersection()

> `protected` **shouldDrawLineJumpOnIntersection**(`currentLineSegment`, `otherLineSegment`): `boolean`

Defined in: [packages/sprotty/src/graph/views.tsx:224](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L224)

Whether or not to draw a line jump on an intersection for the `currentLineSegment`.
This should usually be inverse of `shouldDrawLineGapOnIntersection()`.

#### Parameters

##### currentLineSegment

[`PointToPointLine`](../Class.PointToPointLine)

##### otherLineSegment

[`PointToPointLine`](../Class.PointToPointLine)

#### Returns

`boolean`
