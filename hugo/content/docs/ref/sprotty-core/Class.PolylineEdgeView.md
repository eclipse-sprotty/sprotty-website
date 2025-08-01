
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

***

### renderLine()

> `protected` **renderLine**(`edge`, `segments`, `context`, `args?`): `VNode`

Defined in: [packages/sprotty/src/graph/views.tsx:104](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L104)

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
