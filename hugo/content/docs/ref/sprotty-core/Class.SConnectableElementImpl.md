
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

### size

> **size**: `Dimension` = `Dimension.EMPTY`

Defined in: [packages/sprotty/src/features/bounds/model.ts:180](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/model.ts#L180)

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`size`](../Class.SShapeElementImpl.md#size)

***

### strokeWidth

> **strokeWidth**: `number` = `0`

Defined in: [packages/sprotty/src/features/routing/model.ts:114](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L114)

***

### type

> **type**: `string`

Defined in: [packages/sprotty/src/base/model/smodel.ts:26](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L26)

#### Inherited from

[`SShapeElementImpl`](../Class.SShapeElementImpl).[`type`](../Class.SShapeElementImpl.md#type)

## Accessors

### anchorKind

#### Get Signature

> **get** **anchorKind**(): `undefined` \| `string`

Defined in: [packages/sprotty/src/features/routing/model.ts:110](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L110)

##### Returns

`undefined` \| `string`

***

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

### incomingEdges

#### Get Signature

> **get** **incomingEdges**(): `FluentIterable`\<[`SRoutableElementImpl`](../Class.SRoutableElementImpl)\>

Defined in: [packages/sprotty/src/features/routing/model.ts:120](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L120)

The incoming edges of this connectable element. They are resolved by the index, which must
be an `SGraphIndex` for efficient lookup.

##### Returns

`FluentIterable`\<[`SRoutableElementImpl`](../Class.SRoutableElementImpl)\>

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

### outgoingEdges

#### Get Signature

> **get** **outgoingEdges**(): `FluentIterable`\<[`SRoutableElementImpl`](../Class.SRoutableElementImpl)\>

Defined in: [packages/sprotty/src/features/routing/model.ts:129](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L129)

The outgoing edges of this connectable element. They are resolved by the index, which must
be an `SGraphIndex` for efficient lookup.

##### Returns

`FluentIterable`\<[`SRoutableElementImpl`](../Class.SRoutableElementImpl)\>

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

### canConnect()

> **canConnect**(`routable`, `role`): `boolean`

Defined in: [packages/sprotty/src/features/routing/model.ts:134](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L134)

#### Parameters

##### routable

[`SRoutableElementImpl`](../Class.SRoutableElementImpl)

##### role

`"source"` | `"target"`

#### Returns

`boolean`

#### Implementation of

[`Connectable`](../Interface.Connectable).[`canConnect`](../Interface.Connectable.md#canconnect)

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
