
### get()

> **get**(`kind`): [`IEdgeRouter`](../Interface.IEdgeRouter)

Defined in: [packages/sprotty/src/features/routing/routing.ts:169](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/routing.ts#L169)

#### Parameters

##### kind

`undefined` | `string`

#### Returns

[`IEdgeRouter`](../Interface.IEdgeRouter)

#### Overrides

[`InstanceRegistry`](../Class.InstanceRegistry).[`get`](../Class.InstanceRegistry.md#get)

***

### hasKey()

> **hasKey**(`key`): `boolean`

Defined in: [packages/sprotty/src/utils/registry.ts:132](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/utils/registry.ts#L132)

#### Parameters

##### key

`string`

#### Returns

`boolean`

#### Inherited from

[`InstanceRegistry`](../Class.InstanceRegistry).[`hasKey`](../Class.InstanceRegistry.md#haskey)

***

### missing()

> `protected` **missing**(`key`): [`IEdgeRouter`](../Interface.IEdgeRouter)

Defined in: [packages/sprotty/src/utils/registry.ts:145](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/utils/registry.ts#L145)

#### Parameters

##### key

`string`

#### Returns

[`IEdgeRouter`](../Interface.IEdgeRouter)

#### Inherited from

[`InstanceRegistry`](../Class.InstanceRegistry).[`missing`](../Class.InstanceRegistry.md#missing)

***

### override()

> **override**(`key`, `instance`): `void`

Defined in: [packages/sprotty/src/utils/registry.ts:116](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/utils/registry.ts#L116)

#### Parameters

##### key

`string`

##### instance

[`IEdgeRouter`](../Interface.IEdgeRouter)

#### Returns

`void`

#### Inherited from

[`InstanceRegistry`](../Class.InstanceRegistry).[`override`](../Class.InstanceRegistry.md#override)

***

### register()

> **register**(`key`, `instance`): `void`

Defined in: [packages/sprotty/src/utils/registry.ts:106](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/utils/registry.ts#L106)

#### Parameters

##### key

`string`

##### instance

[`IEdgeRouter`](../Interface.IEdgeRouter)

#### Returns

`void`

#### Inherited from

[`InstanceRegistry`](../Class.InstanceRegistry).[`register`](../Class.InstanceRegistry.md#register)

***

### route()

> **route**(`edge`, `args?`): [`RoutedPoint`](../Interface.RoutedPoint)[]

Defined in: [packages/sprotty/src/features/routing/routing.ts:235](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/routing.ts#L235)

Computes or obtains the route of a single edge.

#### Parameters

##### edge

`Readonly`\<[`SRoutableElementImpl`](../Class.SRoutableElementImpl)\>

the edge to be routed

##### args?

[`IViewArgs`](../Interface.IViewArgs)

arguments that may contain an `EdgeRouting` already

#### Returns

[`RoutedPoint`](../Interface.RoutedPoint)[]

the route of the specified `edge`

***

### routeAllChildren()

> **routeAllChildren**(`parent`): [`EdgeRouting`](../Class.EdgeRouting)

Defined in: [packages/sprotty/src/features/routing/routing.ts:179](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/routing.ts#L179)

Computes the routes of all edges contained by the specified `parent`.
After all routes are available, it'll apply the registered `EdgeRoutePostProcessors`.

#### Parameters

##### parent

`Readonly`\<[`SParentElementImpl`](../Class.SParentElementImpl)\>

the parent to traverse for edges

#### Returns

[`EdgeRouting`](../Class.EdgeRouting)

the routes of all edges that are children of `parent`
