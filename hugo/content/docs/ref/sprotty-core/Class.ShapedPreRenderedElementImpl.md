
### cssClasses?

> `optional` **cssClasses**: `string`[]

Defined in: [packages/sprotty/src/base/model/smodel.ts:29](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L29)

#### Inherited from

[`PreRenderedElementImpl`](../Class.PreRenderedElementImpl).[`cssClasses`](../Class.PreRenderedElementImpl.md#cssclasses)

***

### features?

> `optional` **features**: [`FeatureSet`](../Interface.FeatureSet)

Defined in: [packages/sprotty/src/base/model/smodel.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L28)

#### Inherited from

[`PreRenderedElementImpl`](../Class.PreRenderedElementImpl).[`features`](../Class.PreRenderedElementImpl.md#features)

***

### id

> **id**: `string`

Defined in: [packages/sprotty/src/base/model/smodel.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L27)

#### Inherited from

[`PreRenderedElementImpl`](../Class.PreRenderedElementImpl).[`id`](../Class.PreRenderedElementImpl.md#id)

***

### parent

> `readonly` **parent**: [`SParentElementImpl`](../Class.SParentElementImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:159](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L159)

#### Inherited from

[`PreRenderedElementImpl`](../Class.PreRenderedElementImpl).[`parent`](../Class.PreRenderedElementImpl.md#parent)

***

### position

> **position**: `Point` = `Point.ORIGIN`

Defined in: [packages/sprotty/src/lib/model.ts:126](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/lib/model.ts#L126)

#### Implementation of

`Locateable.position`

***

### selected

> **selected**: `boolean` = `false`

Defined in: [packages/sprotty/src/lib/model.ts:128](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/lib/model.ts#L128)

#### Implementation of

`Selectable.selected`

***

### size

> **size**: `Dimension` = `Dimension.EMPTY`

Defined in: [packages/sprotty/src/lib/model.ts:127](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/lib/model.ts#L127)

***

### type

> **type**: `string`

Defined in: [packages/sprotty/src/base/model/smodel.ts:26](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L26)

#### Inherited from

[`PreRenderedElementImpl`](../Class.PreRenderedElementImpl).[`type`](../Class.PreRenderedElementImpl.md#type)

***

### DEFAULT\_FEATURES

> `readonly` `static` **DEFAULT\_FEATURES**: `symbol`[]

Defined in: [packages/sprotty/src/lib/model.ts:124](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/lib/model.ts#L124)

## Accessors

### bounds

#### Get Signature

> **get** **bounds**(): `Bounds`

Defined in: [packages/sprotty/src/lib/model.ts:131](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/lib/model.ts#L131)

##### Returns

`Bounds`

#### Set Signature

> **set** **bounds**(`newBounds`): `void`

Defined in: [packages/sprotty/src/lib/model.ts:140](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/lib/model.ts#L140)

##### Parameters

###### newBounds

`Bounds`

##### Returns

`void`

#### Implementation of

[`InternalBoundsAware`](../Interface.InternalBoundsAware).[`bounds`](../Interface.InternalBoundsAware.md#bounds)

***

### index

#### Get Signature

> **get** **index**(): [`ModelIndexImpl`](../Class.ModelIndexImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:44](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L44)

##### Returns

[`ModelIndexImpl`](../Class.ModelIndexImpl)

#### Inherited from

[`PreRenderedElementImpl`](../Class.PreRenderedElementImpl).[`index`](../Class.PreRenderedElementImpl.md#index)

***

### root

#### Get Signature

> **get** **root**(): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:31](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L31)

##### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Inherited from

[`PreRenderedElementImpl`](../Class.PreRenderedElementImpl).[`root`](../Class.PreRenderedElementImpl.md#root)

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

[`PreRenderedElementImpl`](../Class.PreRenderedElementImpl).[`add`](../Class.PreRenderedElementImpl.md#add)

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

[`PreRenderedElementImpl`](../Class.PreRenderedElementImpl).[`hasFeature`](../Class.PreRenderedElementImpl.md#hasfeature)

***

### localToParent()

> **localToParent**(`point`): `Bounds`

Defined in: [packages/sprotty/src/base/model/smodel.ts:136](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L136)

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

[`PreRenderedElementImpl`](../Class.PreRenderedElementImpl).[`localToParent`](../Class.PreRenderedElementImpl.md#localtoparent)

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

[`PreRenderedElementImpl`](../Class.PreRenderedElementImpl).[`move`](../Class.PreRenderedElementImpl.md#move)

***

### parentToLocal()

> **parentToLocal**(`point`): `Bounds`

Defined in: [packages/sprotty/src/base/model/smodel.ts:147](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L147)

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

[`PreRenderedElementImpl`](../Class.PreRenderedElementImpl).[`parentToLocal`](../Class.PreRenderedElementImpl.md#parenttolocal)

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

[`PreRenderedElementImpl`](../Class.PreRenderedElementImpl).[`remove`](../Class.PreRenderedElementImpl.md#remove)

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

[`PreRenderedElementImpl`](../Class.PreRenderedElementImpl).[`removeAll`](../Class.PreRenderedElementImpl.md#removeall)
