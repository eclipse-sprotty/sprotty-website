
### getEdgePlacement()

> `protected` **getEdgePlacement**(`element`): `EdgePlacement`

Defined in: [packages/sprotty/src/features/edge-layout/edge-layout.ts:161](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-layout/edge-layout.ts#L161)

#### Parameters

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`EdgePlacement`

***

### getQuadrant()

> `protected` **getQuadrant**(`angle`): `object`

Defined in: [packages/sprotty/src/features/edge-layout/edge-layout.ts:250](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-layout/edge-layout.ts#L250)

#### Parameters

##### angle

`number`

#### Returns

`object`

##### orientation

> **orientation**: [`Orientation`](../TypeAlias.Orientation)

##### position

> **position**: `number`

***

### getRotatedAlignment()

> `protected` **getRotatedAlignment**(`element`, `placement`, `flip`): `object`

Defined in: [packages/sprotty/src/features/edge-layout/edge-layout.ts:119](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-layout/edge-layout.ts#L119)

#### Parameters

##### element

`EdgeLayoutable` & [`SModelElementImpl`](../Class.SModelElementImpl) & [`InternalBoundsAware`](../Interface.InternalBoundsAware)

##### placement

`EdgePlacement`

##### flip

`boolean`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

***

### linearFlip()

> `protected` **linearFlip**(`p0`, `p1`, `p2`, `p3`, `position`): `Point`

Defined in: [packages/sprotty/src/features/edge-layout/edge-layout.ts:261](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-layout/edge-layout.ts#L261)

#### Parameters

##### p0

`Point`

##### p1

`Point`

##### p2

`Point`

##### p3

`Point`

##### position

`number`

#### Returns

`Point`

***

### postUpdate()

> **postUpdate**(): `void`

Defined in: [packages/sprotty/src/features/edge-layout/edge-layout.ts:265](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edge-layout/edge-layout.ts#L265)

#### Returns

`void`

#### Implementation of

[`IVNodePostprocessor`](../Interface.IVNodePostprocessor).[`postUpdate`](../Interface.IVNodePostprocessor.md#postupdate)
