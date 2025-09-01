
### gridY

#### Get Signature

> **get** **gridY**(): `number`

Defined in: [packages/sprotty/src/features/move/snap.ts:42](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/snap.ts#L42)

##### Returns

`number`

## Methods

### snap()

> **snap**(`position`, `element`): `Point`

Defined in: [packages/sprotty/src/features/move/snap.ts:46](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/snap.ts#L46)

#### Parameters

##### position

`Point`

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`Point`

#### Retruns

the closest snapped position that for the `element` located at `position`

#### Implementation of

[`ISnapper`](../Interface.ISnapper).[`snap`](../Interface.ISnapper.md#snap)
