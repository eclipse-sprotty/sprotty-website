
### focus()

> **focus**(): `void`

Defined in: [packages/sprotty/src/base/views/key-tool.ts:61](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/key-tool.ts#L61)

#### Returns

`void`

***

### handleEvent()

> `protected` **handleEvent**\<`K`\>(`methodName`, `model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/key-tool.ts:43](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/key-tool.ts#L43)

#### Type Parameters

##### K

`K` *extends* keyof [`KeyListener`](../Class.KeyListener)

#### Parameters

##### methodName

`K`

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`KeyboardEvent`

#### Returns

`void`

***

### keyDown()

> **keyDown**(`element`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/key-tool.ts:53](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/key-tool.ts#L53)

#### Parameters

##### element

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`KeyboardEvent`

#### Returns

`void`

***

### keyUp()

> **keyUp**(`element`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/key-tool.ts:57](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/key-tool.ts#L57)

#### Parameters

##### element

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`KeyboardEvent`

#### Returns

`void`

***

### postUpdate()

> **postUpdate**(): `void`

Defined in: [packages/sprotty/src/base/views/key-tool.ts:72](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/key-tool.ts#L72)

#### Returns

`void`

#### Implementation of

[`IVNodePostprocessor`](../Interface.IVNodePostprocessor).[`postUpdate`](../Interface.IVNodePostprocessor.md#postupdate)

***

### register()

> **register**(`keyListener`): `void`

Defined in: [packages/sprotty/src/base/views/key-tool.ts:33](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/key-tool.ts#L33)

#### Parameters

##### keyListener

[`KeyListener`](../Class.KeyListener)

#### Returns

`void`
