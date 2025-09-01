
### isSupportedRoute()

> `protected` **isSupportedRoute**(`route`): `boolean`

Defined in: [packages/sprotty/src/features/edge-intersection/intersection-finder.ts:106](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-intersection/intersection-finder.ts#L106)

Specifies whether or not a specific route should be included in this intersection search or not.

As this intersection finder only supports linear line segments, this method only returns `true`
for routes that only contain routed points, which are either 'source', 'target' or 'linear'.

#### Parameters

##### route

[`RoutedPoint`](../Interface.RoutedPoint)[]

#### Returns

`boolean`
