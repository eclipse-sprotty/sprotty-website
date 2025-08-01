
### skipOffsetAfter

> `protected` **skipOffsetAfter**: `number` = `3`

Defined in: [packages/sprotty/src/graph/views.tsx:291](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L291)

#### Overrides

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`skipOffsetAfter`](../Class.JumpingPolylineEdgeView.md#skipoffsetafter)

***

### skipOffsetBefore

> `protected` **skipOffsetBefore**: `number` = `3`

Defined in: [packages/sprotty/src/graph/views.tsx:290](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L290)

#### Overrides

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`skipOffsetBefore`](../Class.JumpingPolylineEdgeView.md#skipoffsetbefore)

## Methods

### createGapPath()

> `protected` **createGapPath**(`intersectionPoint`, `lineSegment`): `string`

Defined in: [packages/sprotty/src/graph/views.tsx:301](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L301)

#### Parameters

##### intersectionPoint

`Point`

##### lineSegment

[`PointToPointLine`](../Class.PointToPointLine)

#### Returns

`string`

#### Overrides

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`createGapPath`](../Class.JumpingPolylineEdgeView.md#creategappath)

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

#### Inherited from

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`createJumpPath`](../Class.JumpingPolylineEdgeView.md#createjumppath)

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

#### Inherited from

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`getIntersectionsSortedBySegmentDirection`](../Class.JumpingPolylineEdgeView.md#getintersectionssortedbysegmentdirection)

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

#### Inherited from

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`getLineSegment`](../Class.JumpingPolylineEdgeView.md#getlinesegment)

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

#### Inherited from

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`getOtherLineSegment`](../Class.JumpingPolylineEdgeView.md#getotherlinesegment)

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

#### Inherited from

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`intersectionPath`](../Class.JumpingPolylineEdgeView.md#intersectionpath)

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

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`isVisible`](../Class.JumpingPolylineEdgeView.md#isvisible)

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

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`render`](../Class.JumpingPolylineEdgeView.md#render)

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

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`renderAdditionals`](../Class.JumpingPolylineEdgeView.md#renderadditionals)

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

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`renderDanglingEdge`](../Class.JumpingPolylineEdgeView.md#renderdanglingedge)

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

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`renderJunctionPoints`](../Class.JumpingPolylineEdgeView.md#renderjunctionpoints)

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

#### Inherited from

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`renderLine`](../Class.JumpingPolylineEdgeView.md#renderline)

***

### shouldDrawLineGapOnIntersection()

> `protected` **shouldDrawLineGapOnIntersection**(`currentLineSegment`, `otherLineSegment`): `boolean`

Defined in: [packages/sprotty/src/graph/views.tsx:297](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L297)

Whether or not to draw a line gap on an intersection for the `currentLineSegment`.
This should usually be inverse of `shouldDrawLineJumpOnIntersection()`.

#### Parameters

##### currentLineSegment

[`PointToPointLine`](../Class.PointToPointLine)

##### otherLineSegment

[`PointToPointLine`](../Class.PointToPointLine)

#### Returns

`boolean`

#### Overrides

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`shouldDrawLineGapOnIntersection`](../Class.JumpingPolylineEdgeView.md#shoulddrawlinegaponintersection)

***

### shouldDrawLineJumpOnIntersection()

> `protected` **shouldDrawLineJumpOnIntersection**(`currentLineSegment`, `otherLineSegment`): `boolean`

Defined in: [packages/sprotty/src/graph/views.tsx:293](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L293)

Whether or not to draw a line jump on an intersection for the `currentLineSegment`.
This should usually be inverse of `shouldDrawLineGapOnIntersection()`.

#### Parameters

##### currentLineSegment

[`PointToPointLine`](../Class.PointToPointLine)

##### otherLineSegment

[`PointToPointLine`](../Class.PointToPointLine)

#### Returns

`boolean`

#### Overrides

[`JumpingPolylineEdgeView`](../Class.JumpingPolylineEdgeView).[`shouldDrawLineJumpOnIntersection`](../Class.JumpingPolylineEdgeView.md#shoulddrawlinejumponintersection)
