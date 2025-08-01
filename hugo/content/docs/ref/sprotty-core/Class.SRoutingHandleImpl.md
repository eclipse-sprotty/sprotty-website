
### editMode

> **editMode**: `boolean` = `false`

Defined in: [packages/sprotty/src/features/routing/model.ts:155](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L155)

Whether the routing point is being dragged.

***

### features?

> `optional` **features**: [`FeatureSet`](../Interface.FeatureSet)

Defined in: [packages/sprotty/src/base/model/smodel.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L28)

#### Inherited from

[`SChildElementImpl`](../Class.SChildElementImpl).[`features`](../Class.SChildElementImpl.md#features)

***

### hoverFeedback

> **hoverFeedback**: `boolean` = `false`

Defined in: [packages/sprotty/src/features/routing/model.ts:157](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L157)

#### Implementation of

`Hoverable.hoverFeedback`

***

### id

> **id**: `string`

Defined in: [packages/sprotty/src/base/model/smodel.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L27)

#### Inherited from

[`SChildElementImpl`](../Class.SChildElementImpl).[`id`](../Class.SChildElementImpl.md#id)

***

### kind

> **kind**: [`RoutingHandleKind`](../TypeAlias.RoutingHandleKind)

Defined in: [packages/sprotty/src/features/routing/model.ts:151](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L151)

'junction' is a point where two line segments meet,
'line' is a volatile handle placed on a line segment,
'source' and 'target' are the respective anchors.

***

### parent

> `readonly` **parent**: [`SParentElementImpl`](../Class.SParentElementImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:159](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L159)

#### Inherited from

[`SChildElementImpl`](../Class.SChildElementImpl).[`parent`](../Class.SChildElementImpl.md#parent)

***

### pointIndex

> **pointIndex**: `number`

Defined in: [packages/sprotty/src/features/routing/model.ts:153](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L153)

The actual routing point index (junction) or the previous point index (line).

***

### selected

> **selected**: `boolean` = `false`

Defined in: [packages/sprotty/src/features/routing/model.ts:158](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L158)

#### Implementation of

`Selectable.selected`

***

### type

> **type**: `string`

Defined in: [packages/sprotty/src/base/model/smodel.ts:26](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L26)

#### Inherited from

[`SChildElementImpl`](../Class.SChildElementImpl).[`type`](../Class.SChildElementImpl.md#type)

***

### DEFAULT\_FEATURES

> `readonly` `static` **DEFAULT\_FEATURES**: `symbol`[]

Defined in: [packages/sprotty/src/features/routing/model.ts:144](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L144)

## Accessors

### index

#### Get Signature

> **get** **index**(): [`ModelIndexImpl`](../Class.ModelIndexImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:44](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L44)

##### Returns

[`ModelIndexImpl`](../Class.ModelIndexImpl)

#### Inherited from

[`SChildElementImpl`](../Class.SChildElementImpl).[`index`](../Class.SChildElementImpl.md#index)

***

### root

#### Get Signature

> **get** **root**(): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:31](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L31)

##### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Inherited from

[`SChildElementImpl`](../Class.SChildElementImpl).[`root`](../Class.SChildElementImpl.md#root)

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

[`SChildElementImpl`](../Class.SChildElementImpl).[`add`](../Class.SChildElementImpl.md#add)

***

### hasFeature()

> **hasFeature**(`feature`): `boolean`

Defined in: [packages/sprotty/src/features/routing/model.ts:165](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L165)

SRoutingHandles are created using the constructor, so we hard-wire the
default features

#### Parameters

##### feature

`symbol`

#### Returns

`boolean`

#### Overrides

[`SChildElementImpl`](../Class.SChildElementImpl).[`hasFeature`](../Class.SChildElementImpl.md#hasfeature)

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

[`SChildElementImpl`](../Class.SChildElementImpl).[`localToParent`](../Class.SChildElementImpl.md#localtoparent)

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

[`SChildElementImpl`](../Class.SChildElementImpl).[`move`](../Class.SChildElementImpl.md#move)

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

[`SChildElementImpl`](../Class.SChildElementImpl).[`parentToLocal`](../Class.SChildElementImpl.md#parenttolocal)

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

[`SChildElementImpl`](../Class.SChildElementImpl).[`remove`](../Class.SChildElementImpl.md#remove)

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

[`SChildElementImpl`](../Class.SChildElementImpl).[`removeAll`](../Class.SChildElementImpl.md#removeall)
