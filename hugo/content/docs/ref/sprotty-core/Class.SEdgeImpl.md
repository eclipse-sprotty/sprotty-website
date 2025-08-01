
### hoverFeedback

> **hoverFeedback**: `boolean` = `false`

Defined in: [packages/sprotty/src/graph/sgraph.ts:126](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/sgraph.ts#L126)

#### Implementation of

`Hoverable.hoverFeedback`

***

### id

> **id**: `string`

Defined in: [packages/sprotty/src/base/model/smodel.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L27)

#### Inherited from

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`id`](../Class.SRoutableElementImpl.md#id)

***

### opacity

> **opacity**: `number` = `1`

Defined in: [packages/sprotty/src/graph/sgraph.ts:127](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/sgraph.ts#L127)

#### Implementation of

`Fadeable.opacity`

***

### parent

> `readonly` **parent**: [`SParentElementImpl`](../Class.SParentElementImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:159](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L159)

#### Inherited from

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`parent`](../Class.SRoutableElementImpl.md#parent)

***

### routerKind?

> `optional` **routerKind**: `string`

Defined in: [packages/sprotty/src/features/routing/model.ts:29](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L29)

#### Inherited from

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`routerKind`](../Class.SRoutableElementImpl.md#routerkind)

***

### routingPoints

> **routingPoints**: `Point`[] = `[]`

Defined in: [packages/sprotty/src/features/routing/model.ts:30](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L30)

#### Inherited from

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`routingPoints`](../Class.SRoutableElementImpl.md#routingpoints)

***

### selected

> **selected**: `boolean` = `false`

Defined in: [packages/sprotty/src/graph/sgraph.ts:125](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/sgraph.ts#L125)

#### Implementation of

`Selectable.selected`

***

### sourceAnchorCorrection?

> `optional` **sourceAnchorCorrection**: `number`

Defined in: [packages/sprotty/src/features/routing/model.ts:33](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L33)

#### Inherited from

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`sourceAnchorCorrection`](../Class.SRoutableElementImpl.md#sourceanchorcorrection)

***

### sourceId

> **sourceId**: `string`

Defined in: [packages/sprotty/src/features/routing/model.ts:31](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L31)

#### Inherited from

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`sourceId`](../Class.SRoutableElementImpl.md#sourceid)

***

### targetAnchorCorrection?

> `optional` **targetAnchorCorrection**: `number`

Defined in: [packages/sprotty/src/features/routing/model.ts:34](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L34)

#### Inherited from

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`targetAnchorCorrection`](../Class.SRoutableElementImpl.md#targetanchorcorrection)

***

### targetId

> **targetId**: `string`

Defined in: [packages/sprotty/src/features/routing/model.ts:32](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L32)

#### Inherited from

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`targetId`](../Class.SRoutableElementImpl.md#targetid)

***

### type

> **type**: `string`

Defined in: [packages/sprotty/src/base/model/smodel.ts:26](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L26)

#### Inherited from

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`type`](../Class.SRoutableElementImpl.md#type)

***

### DEFAULT\_FEATURES

> `readonly` `static` **DEFAULT\_FEATURES**: `symbol`[]

Defined in: [packages/sprotty/src/graph/sgraph.ts:122](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/sgraph.ts#L122)

## Accessors

### bounds

#### Get Signature

> **get** **bounds**(): `Bounds`

Defined in: [packages/sprotty/src/features/routing/model.ts:44](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L44)

##### Returns

`Bounds`

#### Implementation of

[`InternalBoundsAware`](../Interface.InternalBoundsAware).[`bounds`](../Interface.InternalBoundsAware.md#bounds)

#### Inherited from

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`bounds`](../Class.SRoutableElementImpl.md#bounds)

***

### index

#### Get Signature

> **get** **index**(): [`ModelIndexImpl`](../Class.ModelIndexImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:44](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L44)

##### Returns

[`ModelIndexImpl`](../Class.ModelIndexImpl)

#### Inherited from

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`index`](../Class.SRoutableElementImpl.md#index)

***

### root

#### Get Signature

> **get** **root**(): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:31](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L31)

##### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Inherited from

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`root`](../Class.SRoutableElementImpl.md#root)

***

### source

#### Get Signature

> **get** **source**(): `undefined` \| [`SConnectableElementImpl`](../Class.SConnectableElementImpl)

Defined in: [packages/sprotty/src/features/routing/model.ts:36](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L36)

##### Returns

`undefined` \| [`SConnectableElementImpl`](../Class.SConnectableElementImpl)

#### Inherited from

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`source`](../Class.SRoutableElementImpl.md#source)

***

### target

#### Get Signature

> **get** **target**(): `undefined` \| [`SConnectableElementImpl`](../Class.SConnectableElementImpl)

Defined in: [packages/sprotty/src/features/routing/model.ts:40](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/routing/model.ts#L40)

##### Returns

`undefined` \| [`SConnectableElementImpl`](../Class.SConnectableElementImpl)

#### Inherited from

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`target`](../Class.SRoutableElementImpl.md#target)

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

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`add`](../Class.SRoutableElementImpl.md#add)

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

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`hasFeature`](../Class.SRoutableElementImpl.md#hasfeature)

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

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`localToParent`](../Class.SRoutableElementImpl.md#localtoparent)

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

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`move`](../Class.SRoutableElementImpl.md#move)

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

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`parentToLocal`](../Class.SRoutableElementImpl.md#parenttolocal)

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

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`remove`](../Class.SRoutableElementImpl.md#remove)

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

[`SRoutableElementImpl`](../Class.SRoutableElementImpl).[`removeAll`](../Class.SRoutableElementImpl.md#removeall)
