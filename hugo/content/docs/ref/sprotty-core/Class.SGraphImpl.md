
### features?

> `optional` **features**: [`FeatureSet`](../Interface.FeatureSet)

Defined in: [packages/sprotty/src/base/model/smodel.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L28)

#### Inherited from

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`features`](../Class.ViewportRootElementImpl.md#features)

***

### id

> **id**: `string`

Defined in: [packages/sprotty/src/base/model/smodel.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L27)

#### Inherited from

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`id`](../Class.ViewportRootElementImpl.md#id)

***

### layoutOptions?

> `optional` **layoutOptions**: [`ModelLayoutOptions`](../TypeAlias.ModelLayoutOptions)

Defined in: [packages/sprotty/src/graph/sgraph.ts:39](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/sgraph.ts#L39)

***

### position

> **position**: `Point` = `Point.ORIGIN`

Defined in: [packages/sprotty/src/features/viewport/viewport-root.ts:33](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport-root.ts#L33)

#### Inherited from

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`position`](../Class.ViewportRootElementImpl.md#position)

***

### revision?

> `optional` **revision**: `number`

Defined in: [packages/sprotty/src/base/model/smodel.ts:167](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L167)

#### Inherited from

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`revision`](../Class.ViewportRootElementImpl.md#revision)

***

### scroll

> **scroll**: `Point`

Defined in: [packages/sprotty/src/features/viewport/viewport-root.ts:31](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport-root.ts#L31)

#### Inherited from

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`scroll`](../Class.ViewportRootElementImpl.md#scroll)

***

### size

> **size**: `Dimension` = `Dimension.EMPTY`

Defined in: [packages/sprotty/src/features/viewport/viewport-root.ts:34](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport-root.ts#L34)

#### Inherited from

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`size`](../Class.ViewportRootElementImpl.md#size)

***

### type

> **type**: `string`

Defined in: [packages/sprotty/src/base/model/smodel.ts:26](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L26)

#### Inherited from

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`type`](../Class.ViewportRootElementImpl.md#type)

***

### zoom

> **zoom**: `number` = `1`

Defined in: [packages/sprotty/src/features/viewport/viewport-root.ts:32](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport-root.ts#L32)

#### Inherited from

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`zoom`](../Class.ViewportRootElementImpl.md#zoom)

***

### DEFAULT\_FEATURES

> `readonly` `static` **DEFAULT\_FEATURES**: `symbol`[]

Defined in: [packages/sprotty/src/features/viewport/viewport-root.ts:29](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport-root.ts#L29)

#### Inherited from

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`DEFAULT_FEATURES`](../Class.ViewportRootElementImpl.md#default_features)

## Accessors

### bounds

#### Get Signature

> **get** **bounds**(): `Bounds`

Defined in: [packages/sprotty/src/features/viewport/viewport-root.ts:40](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport-root.ts#L40)

##### Returns

`Bounds`

#### Set Signature

> **set** **bounds**(`newBounds`): `void`

Defined in: [packages/sprotty/src/features/viewport/viewport-root.ts:49](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport-root.ts#L49)

##### Parameters

###### newBounds

`Bounds`

##### Returns

`void`

#### Inherited from

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`bounds`](../Class.ViewportRootElementImpl.md#bounds)

***

### index

#### Get Signature

> **get** **index**(): [`ModelIndexImpl`](../Class.ModelIndexImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:44](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L44)

##### Returns

[`ModelIndexImpl`](../Class.ModelIndexImpl)

#### Inherited from

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`index`](../Class.ViewportRootElementImpl.md#index)

***

### root

#### Get Signature

> **get** **root**(): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:31](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L31)

##### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Inherited from

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`root`](../Class.ViewportRootElementImpl.md#root)

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

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`add`](../Class.ViewportRootElementImpl.md#add)

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

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`hasFeature`](../Class.ViewportRootElementImpl.md#hasfeature)

***

### localToParent()

> **localToParent**(`point`): `Bounds`

Defined in: [packages/sprotty/src/features/viewport/viewport-root.ts:60](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport-root.ts#L60)

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

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`localToParent`](../Class.ViewportRootElementImpl.md#localtoparent)

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

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`move`](../Class.ViewportRootElementImpl.md#move)

***

### parentToLocal()

> **parentToLocal**(`point`): `Bounds`

Defined in: [packages/sprotty/src/features/viewport/viewport-root.ts:74](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/viewport-root.ts#L74)

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

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`parentToLocal`](../Class.ViewportRootElementImpl.md#parenttolocal)

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

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`remove`](../Class.ViewportRootElementImpl.md#remove)

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

[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl).[`removeAll`](../Class.ViewportRootElementImpl.md#removeall)
