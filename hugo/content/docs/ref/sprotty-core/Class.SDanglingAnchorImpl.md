
### id

> **id**: `string`

Defined in: [packages/sprotty/src/base/model/smodel.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L27)

#### Inherited from

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`id`](../Class.SConnectableElementImpl.md#id)

***

### layoutOptions?

> `optional` **layoutOptions**: [`ModelLayoutOptions`](../TypeAlias.ModelLayoutOptions)

Defined in: [packages/sprotty/src/features/bounds/model.ts:181](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/model.ts#L181)

#### Inherited from

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`layoutOptions`](../Class.SConnectableElementImpl.md#layoutoptions)

***

### original?

> `optional` **original**: [`SModelElementImpl`](../Class.SModelElementImpl)

Defined in: [packages/sprotty/src/features/routing/model.ts:173](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L173)

***

### parent

> `readonly` **parent**: [`SParentElementImpl`](../Class.SParentElementImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:159](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L159)

#### Inherited from

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`parent`](../Class.SConnectableElementImpl.md#parent)

***

### position

> **position**: `Point` = `Point.ORIGIN`

Defined in: [packages/sprotty/src/features/bounds/model.ts:179](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/model.ts#L179)

#### Inherited from

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`position`](../Class.SConnectableElementImpl.md#position)

***

### size

> **size**: `Dimension` = `Dimension.EMPTY`

Defined in: [packages/sprotty/src/features/bounds/model.ts:180](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/model.ts#L180)

#### Inherited from

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`size`](../Class.SConnectableElementImpl.md#size)

***

### strokeWidth

> **strokeWidth**: `number` = `0`

Defined in: [packages/sprotty/src/features/routing/model.ts:114](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L114)

#### Inherited from

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`strokeWidth`](../Class.SConnectableElementImpl.md#strokewidth)

***

### type

> **type**: `string` = `'dangling-anchor'`

Defined in: [packages/sprotty/src/features/routing/model.ts:174](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L174)

#### Overrides

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`type`](../Class.SConnectableElementImpl.md#type)

***

### DEFAULT\_FEATURES

> `readonly` `static` **DEFAULT\_FEATURES**: `symbol`[]

Defined in: [packages/sprotty/src/features/routing/model.ts:171](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L171)

## Accessors

### anchorKind

#### Get Signature

> **get** **anchorKind**(): `undefined` \| `string`

Defined in: [packages/sprotty/src/features/routing/model.ts:110](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L110)

##### Returns

`undefined` \| `string`

#### Inherited from

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`anchorKind`](../Class.SConnectableElementImpl.md#anchorkind)

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

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`bounds`](../Class.SConnectableElementImpl.md#bounds)

***

### incomingEdges

#### Get Signature

> **get** **incomingEdges**(): `FluentIterable`\<[`SRoutableElementImpl`](../Class.SRoutableElementImpl)\>

Defined in: [packages/sprotty/src/features/routing/model.ts:120](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L120)

The incoming edges of this connectable element. They are resolved by the index, which must
be an `SGraphIndex` for efficient lookup.

##### Returns

`FluentIterable`\<[`SRoutableElementImpl`](../Class.SRoutableElementImpl)\>

#### Inherited from

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`incomingEdges`](../Class.SConnectableElementImpl.md#incomingedges)

***

### index

#### Get Signature

> **get** **index**(): [`ModelIndexImpl`](../Class.ModelIndexImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:44](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L44)

##### Returns

[`ModelIndexImpl`](../Class.ModelIndexImpl)

#### Inherited from

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`index`](../Class.SConnectableElementImpl.md#index)

***

### outgoingEdges

#### Get Signature

> **get** **outgoingEdges**(): `FluentIterable`\<[`SRoutableElementImpl`](../Class.SRoutableElementImpl)\>

Defined in: [packages/sprotty/src/features/routing/model.ts:129](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L129)

The outgoing edges of this connectable element. They are resolved by the index, which must
be an `SGraphIndex` for efficient lookup.

##### Returns

`FluentIterable`\<[`SRoutableElementImpl`](../Class.SRoutableElementImpl)\>

#### Inherited from

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`outgoingEdges`](../Class.SConnectableElementImpl.md#outgoingedges)

***

### root

#### Get Signature

> **get** **root**(): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:31](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L31)

##### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Inherited from

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`root`](../Class.SConnectableElementImpl.md#root)

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

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`add`](../Class.SConnectableElementImpl.md#add)

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

#### Inherited from

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`canConnect`](../Class.SConnectableElementImpl.md#canconnect)

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

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`hasFeature`](../Class.SConnectableElementImpl.md#hasfeature)

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

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`localToParent`](../Class.SConnectableElementImpl.md#localtoparent)

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

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`move`](../Class.SConnectableElementImpl.md#move)

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

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`parentToLocal`](../Class.SConnectableElementImpl.md#parenttolocal)

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

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`remove`](../Class.SConnectableElementImpl.md#remove)

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

[`SConnectableElementImpl`](../Class.SConnectableElementImpl).[`removeAll`](../Class.SConnectableElementImpl.md#removeall)
