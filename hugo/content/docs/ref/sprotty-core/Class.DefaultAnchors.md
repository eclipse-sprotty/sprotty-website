
### kind

> `readonly` **kind**: `"source"` \| `"target"`

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:42](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L42)

***

### left

> `readonly` **left**: [`RoutedPoint`](../Interface.RoutedPoint)

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:37](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L37)

***

### right

> `readonly` **right**: [`RoutedPoint`](../Interface.RoutedPoint)

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:38](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L38)

***

### top

> `readonly` **top**: [`RoutedPoint`](../Interface.RoutedPoint)

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:39](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L39)

## Methods

### get()

> **get**(`side`): [`RoutedPoint`](../Interface.RoutedPoint)

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:51](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L51)

#### Parameters

##### side

[`Side`](../Enumeration.Side)

#### Returns

[`RoutedPoint`](../Interface.RoutedPoint)

***

### getNearestSide()

> **getNearestSide**(`point`): [`Side`](../Enumeration.Side)

Defined in: [packages/sprotty/src/features/routing/abstract-edge-router.ts:55](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/abstract-edge-router.ts#L55)

#### Parameters

##### point

`Point`

#### Returns

[`Side`](../Enumeration.Side)
