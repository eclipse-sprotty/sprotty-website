
### edgePlacement?

> `optional` **edgePlacement**: `EdgePlacement`

Defined in: [packages/sprotty/src/graph/sgraph.ts:142](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/sgraph.ts#L142)

***

### features?

> `optional` **features**: [`FeatureSet`](../Interface.FeatureSet)

Defined in: [packages/sprotty/src/base/model/smodel.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L28)

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`features`](../Class.SShapeElementImpl.md#features)

***

### id

> **id**: `string`

Defined in: [packages/sprotty/src/base/model/smodel.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L27)

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`id`](../Class.SShapeElementImpl.md#id)

***

### layoutOptions?

> `optional` **layoutOptions**: [`ModelLayoutOptions`](../TypeAlias.ModelLayoutOptions)

Defined in: [packages/sprotty/src/features/bounds/model.ts:181](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/model.ts#L181)

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`layoutOptions`](../Class.SShapeElementImpl.md#layoutoptions)

***

### opacity

> **opacity**: `number` = `1`

Defined in: [packages/sprotty/src/graph/sgraph.ts:141](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/sgraph.ts#L141)

#### Implementation of

`Fadeable.opacity`

***

### parent

> `readonly` **parent**: [`SParentElementImpl`](../Class.SParentElementImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:159](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L159)

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`parent`](../Class.SShapeElementImpl.md#parent)

***

### position

> **position**: `Point` = `Point.ORIGIN`

Defined in: [packages/sprotty/src/features/bounds/model.ts:179](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/model.ts#L179)

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`position`](../Class.SShapeElementImpl.md#position)

***

### selected

> **selected**: `boolean` = `false`

Defined in: [packages/sprotty/src/graph/sgraph.ts:139](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/sgraph.ts#L139)

#### Implementation of

`Selectable.selected`

***

### size

> **size**: `Dimension` = `Dimension.EMPTY`

Defined in: [packages/sprotty/src/features/bounds/model.ts:180](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/model.ts#L180)

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`size`](../Class.SShapeElementImpl.md#size)

***

### text

> **text**: `string`

Defined in: [packages/sprotty/src/graph/sgraph.ts:138](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/sgraph.ts#L138)

***

### type

> **type**: `string`

Defined in: [packages/sprotty/src/base/model/smodel.ts:26](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L26)

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`type`](../Class.SShapeElementImpl.md#type)

***

### DEFAULT\_FEATURES

> `readonly` `static` **DEFAULT\_FEATURES**: `symbol`[]

Defined in: [packages/sprotty/src/graph/sgraph.ts:135](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/sgraph.ts#L135)

## Accessors

### bounds

#### Get Signature

> **get** **bounds**(): `Bounds`

Defined in: [packages/sprotty/src/features/bounds/model.ts:183](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/model.ts#L183)

##### Returns

`Bounds`

#### Set Signature

> **set** **bounds**(`newBounds`): `void`

Defined in: [packages/sprotty/src/features/bounds/model.ts:192](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/model.ts#L192)

##### Parameters

###### newBounds

`Bounds`

##### Returns

`void`

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`bounds`](../Class.SShapeElementImpl.md#bounds)

***

### index

#### Get Signature

> **get** **index**(): [`ModelIndexImpl`](../Class.ModelIndexImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:44](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L44)

##### Returns

[`ModelIndexImpl`](../Class.ModelIndexImpl)

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`index`](../Class.SShapeElementImpl.md#index)

***

### root

#### Get Signature

> **get** **root**(): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:31](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L31)

##### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`root`](../Class.SShapeElementImpl.md#root)

## Methods

### add()

> **add**(`child`, `index?`): `void`

Defined in: [packages/sprotty/src/base/model/smodel.ts:74](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L74)

#### Parameters

##### child

[`SChildElementImpl`](../Class.SChildElementImpl)

##### index?

`number`

#### Returns

`void`

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`add`](../Class.SShapeElementImpl.md#add)

***

### hasFeature()

> **hasFeature**(`feature`): `boolean`

Defined in: [packages/sprotty/src/base/model/smodel.ts:52](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L52)

A feature is a symbol identifying some functionality that can be enabled or disabled for
a model element. The set of supported features is determined by the `features` property.

#### Parameters

##### feature

`symbol`

#### Returns

`boolean`

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`hasFeature`](../Class.SShapeElementImpl.md#hasfeature)

***

### localToParent()

> **localToParent**(`point`): `Bounds`

Defined in: [packages/sprotty/src/features/bounds/model.ts:203](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/model.ts#L203)

Transform the given bounds from the local coordinate system of this element to the coordinate
system of its parent. This function should consider any transformation that is applied to the
view of this element and its contents.
The base implementation assumes that this element does not define a local coordinate system,
so it leaves the bounds unchanged.

#### Parameters

##### point

`Point` | `Bounds`

#### Returns

`Bounds`

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`localToParent`](../Class.SShapeElementImpl.md#localtoparent)

***

### move()

> **move**(`child`, `newIndex`): `void`

Defined in: [packages/sprotty/src/base/model/smodel.ts:115](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L115)

#### Parameters

##### child

[`SChildElementImpl`](../Class.SChildElementImpl)

##### newIndex

`number`

#### Returns

`void`

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`move`](../Class.SShapeElementImpl.md#move)

***

### parentToLocal()

> **parentToLocal**(`point`): `Bounds`

Defined in: [packages/sprotty/src/features/bounds/model.ts:217](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/model.ts#L217)

Transform the given bounds from the coordinate system of this element's parent to its local
coordinate system. This function should consider any transformation that is applied to the
view of this element and its contents.
The base implementation assumes that this element does not define a local coordinate system,
so it leaves the bounds unchanged.

#### Parameters

##### point

`Point` | `Bounds`

#### Returns

`Bounds`

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`parentToLocal`](../Class.SShapeElementImpl.md#parenttolocal)

***

### remove()

> **remove**(`child`): `void`

Defined in: [packages/sprotty/src/base/model/smodel.ts:88](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L88)

#### Parameters

##### child

[`SChildElementImpl`](../Class.SChildElementImpl)

#### Returns

`void`

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`remove`](../Class.SShapeElementImpl.md#remove)

***

### removeAll()

> **removeAll**(`filter?`): `void`

Defined in: [packages/sprotty/src/base/model/smodel.ts:98](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L98)

#### Parameters

##### filter?

(`e`) => `boolean`

#### Returns

`void`

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`removeAll`](../Class.SShapeElementImpl.md#removeall)
