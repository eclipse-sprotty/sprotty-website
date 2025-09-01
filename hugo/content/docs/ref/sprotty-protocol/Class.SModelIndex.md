
[sprotty-protocol](../globals) / SModelIndex

# Class: SModelIndex

Defined in: [utils/model-utils.ts:105](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/utils/model-utils.ts#L105)

Used to speed up model element lookup by id.
This index implementation is for the serializable _external model_ defined in `sprotty-protocol`.

## Constructors

### Constructor

> **new SModelIndex**(): `SModelIndex`

#### Returns

`SModelIndex`

## Methods

### add()

> **add**(`element`): `this`

Defined in: [utils/model-utils.ts:110](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/utils/model-utils.ts#L110)

#### Parameters

##### element

[`SModelElement`](../Interface.SModelElement)

#### Returns

`this`

***

### contains()

> **contains**(`element`): `boolean`

Defined in: [utils/model-utils.ts:137](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/utils/model-utils.ts#L137)

#### Parameters

##### element

[`SModelElement`](../Interface.SModelElement)

#### Returns

`boolean`

***

### getById()

> **getById**(`id`): `undefined` \| [`SModelElement`](../Interface.SModelElement)

Defined in: [utils/model-utils.ts:141](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/utils/model-utils.ts#L141)

#### Parameters

##### id

`string`

#### Returns

`undefined` \| [`SModelElement`](../Interface.SModelElement)

***

### getParent()

> **getParent**(`id`): `undefined` \| [`SModelElement`](../Interface.SModelElement)

Defined in: [utils/model-utils.ts:145](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/utils/model-utils.ts#L145)

#### Parameters

##### id

`string`

#### Returns

`undefined` \| [`SModelElement`](../Interface.SModelElement)

***

### getRoot()

> **getRoot**(`element`): [`SModelRoot`](../Interface.SModelRoot)

Defined in: [utils/model-utils.ts:149](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/utils/model-utils.ts#L149)

#### Parameters

##### element

[`SModelElement`](../Interface.SModelElement)

#### Returns

[`SModelRoot`](../Interface.SModelRoot)

***

### remove()

> **remove**(`element`): `this`

Defined in: [utils/model-utils.ts:126](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/utils/model-utils.ts#L126)

#### Parameters

##### element

[`SModelElement`](../Interface.SModelElement)

#### Returns

`this`
