
### hasKey()

> **hasKey**(`key`): `boolean`

Defined in: [packages/sprotty/src/utils/registry.ts:84](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/utils/registry.ts#L84)

#### Parameters

##### key

`string`

#### Returns

`boolean`

#### Inherited from

[`FactoryRegistry`](../Class.FactoryRegistry).[`hasKey`](../Class.FactoryRegistry.md#haskey)

***

### missing()

> `protected` **missing**(`key`, `arg`): [`SModelElementImpl`](../Class.SModelElementImpl)

Defined in: [packages/sprotty/src/utils/registry.ts:97](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/utils/registry.ts#L97)

#### Parameters

##### key

`string`

##### arg

`void`

#### Returns

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Inherited from

[`FactoryRegistry`](../Class.FactoryRegistry).[`missing`](../Class.FactoryRegistry.md#missing)

***

### override()

> **override**(`key`, `factory`): `void`

Defined in: [packages/sprotty/src/utils/registry.ts:68](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/utils/registry.ts#L68)

#### Parameters

##### key

`string`

##### factory

(`u`) => [`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`void`

#### Inherited from

[`FactoryRegistry`](../Class.FactoryRegistry).[`override`](../Class.FactoryRegistry.md#override)

***

### register()

> **register**(`key`, `factory`): `void`

Defined in: [packages/sprotty/src/utils/registry.ts:58](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/utils/registry.ts#L58)

#### Parameters

##### key

`string`

##### factory

(`u`) => [`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`void`

#### Inherited from

[`FactoryRegistry`](../Class.FactoryRegistry).[`register`](../Class.FactoryRegistry.md#register)
