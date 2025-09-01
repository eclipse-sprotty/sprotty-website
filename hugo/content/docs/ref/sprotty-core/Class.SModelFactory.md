
### initializeChild()

> `protected` **initializeChild**(`child`, `schema`, `parent?`): [`SChildElementImpl`](../Class.SChildElementImpl)

Defined in: [packages/sprotty/src/base/model/smodel-factory.ts:165](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel-factory.ts#L165)

#### Parameters

##### child

[`SChildElementImpl`](../Class.SChildElementImpl)

##### schema

`SModelElement`

##### parent?

[`SParentElementImpl`](../Class.SParentElementImpl)

#### Returns

[`SChildElementImpl`](../Class.SChildElementImpl)

***

### initializeElement()

> `protected` **initializeElement**(`element`, `schema`): [`SModelElementImpl`](../Class.SModelElementImpl)

Defined in: [packages/sprotty/src/base/model/smodel-factory.ts:133](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel-factory.ts#L133)

#### Parameters

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

##### schema

[`SModelElementImpl`](../Class.SModelElementImpl) | `SModelElement`

#### Returns

[`SModelElementImpl`](../Class.SModelElementImpl)

***

### initializeParent()

> `protected` **initializeParent**(`parent`, `schema`): [`SParentElementImpl`](../Class.SParentElementImpl)

Defined in: [packages/sprotty/src/base/model/smodel-factory.ts:157](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel-factory.ts#L157)

#### Parameters

##### parent

[`SParentElementImpl`](../Class.SParentElementImpl)

##### schema

[`SParentElementImpl`](../Class.SParentElementImpl) | `SModelElement`

#### Returns

[`SParentElementImpl`](../Class.SParentElementImpl)

***

### initializeRoot()

> `protected` **initializeRoot**(`root`, `schema`): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/base/model/smodel-factory.ts:173](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel-factory.ts#L173)

#### Parameters

##### root

[`SModelRootImpl`](../Class.SModelRootImpl)

##### schema

[`SModelRootImpl`](../Class.SModelRootImpl) | `SModelRoot`

#### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

***

### isReserved()

> `protected` **isReserved**(`element`, `propertyName`): `boolean`

Defined in: [packages/sprotty/src/base/model/smodel-factory.ts:144](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel-factory.ts#L144)

#### Parameters

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

##### propertyName

`string`

#### Returns

`boolean`
