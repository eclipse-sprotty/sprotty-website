
### b

#### Get Signature

> **get** **b**(): `number`

Defined in: [packages/sprotty/src/utils/geometry.ts:132](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/utils/geometry.ts#L132)

##### Returns

`number`

#### Implementation of

[`Line`](../Interface.Line).[`b`](../Interface.Line.md#b)

***

### c

#### Get Signature

> **get** **c**(): `number`

Defined in: [packages/sprotty/src/utils/geometry.ts:136](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/utils/geometry.ts#L136)

##### Returns

`number`

#### Implementation of

[`Line`](../Interface.Line).[`c`](../Interface.Line.md#c)

***

### direction

#### Get Signature

> **get** **direction**(): [`CardinalDirection`](../TypeAlias.CardinalDirection)

Defined in: [packages/sprotty/src/utils/geometry.ts:169](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/utils/geometry.ts#L169)

The direction of this line, such as 'north', 'south', or 'south-west'.

##### Returns

[`CardinalDirection`](../TypeAlias.CardinalDirection)

***

### slope

#### Get Signature

> **get** **slope**(): `undefined` \| `number`

Defined in: [packages/sprotty/src/utils/geometry.ts:151](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/utils/geometry.ts#L151)

The slope of the line.
A vertical line returns `undefined`.

##### Returns

`undefined` \| `number`

***

### slopeOrMax

#### Get Signature

> **get** **slopeOrMax**(): `number`

Defined in: [packages/sprotty/src/utils/geometry.ts:159](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/utils/geometry.ts#L159)

The slope of the line or `Number.MAX_SAFE_INTEGER` if vertical.

##### Returns

`number`

## Methods

### hasIndistinctPoints()

> **hasIndistinctPoints**(`otherLine`): `boolean`

Defined in: [packages/sprotty/src/utils/geometry.ts:237](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/utils/geometry.ts#L237)

#### Parameters

##### otherLine

`PointToPointLine`

the other line

#### Returns

`boolean`

whether the start and end point of this line is does not have distinct start
or end points with the `otherLine`

***

### intersection()

> **intersection**(`otherLine`): `undefined` \| `Point`

Defined in: [packages/sprotty/src/utils/geometry.ts:197](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/utils/geometry.ts#L197)

#### Parameters

##### otherLine

`PointToPointLine`

the other line

#### Returns

`undefined` \| `Point`

the intersection point between `this` line and the `otherLine` if exists, or `undefined`.
