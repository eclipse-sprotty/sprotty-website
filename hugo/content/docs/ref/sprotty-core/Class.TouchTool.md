
### deregister()

> **deregister**(`touchListener`): `void`

Defined in: [packages/sprotty/src/base/views/touch-tool.ts:38](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/touch-tool.ts#L38)

#### Parameters

##### touchListener

[`ITouchListener`](../Interface.ITouchListener)

#### Returns

`void`

***

### getTargetElement()

> `protected` **getTargetElement**(`model`, `event`): `undefined` \| [`SModelElementImpl`](../Class.SModelElementImpl)

Defined in: [packages/sprotty/src/base/views/touch-tool.ts:44](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/touch-tool.ts#L44)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`TouchEvent`

#### Returns

`undefined` \| [`SModelElementImpl`](../Class.SModelElementImpl)

***

### handleEvent()

> `protected` **handleEvent**(`methodName`, `model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/touch-tool.ts:58](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/touch-tool.ts#L58)

#### Parameters

##### methodName

[`TouchEventKind`](../TypeAlias.TouchEventKind)

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`TouchEvent`

#### Returns

`void`

***

### postUpdate()

> **postUpdate**(): `void`

Defined in: [packages/sprotty/src/base/views/touch-tool.ts:100](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/touch-tool.ts#L100)

#### Returns

`void`

#### Implementation of

[`IVNodePostprocessor`](../Interface.IVNodePostprocessor).[`postUpdate`](../Interface.IVNodePostprocessor.md#postupdate)

***

### register()

> **register**(`touchListener`): `void`

Defined in: [packages/sprotty/src/base/views/touch-tool.ts:34](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/touch-tool.ts#L34)

#### Parameters

##### touchListener

[`ITouchListener`](../Interface.ITouchListener)

#### Returns

`void`

***

### touchEnd()

> **touchEnd**(`model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/touch-tool.ts:87](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/touch-tool.ts#L87)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`TouchEvent`

#### Returns

`void`

***

### touchMove()

> **touchMove**(`model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/touch-tool.ts:83](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/touch-tool.ts#L83)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`TouchEvent`

#### Returns

`void`

***

### touchStart()

> **touchStart**(`model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/touch-tool.ts:79](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/touch-tool.ts#L79)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`TouchEvent`

#### Returns

`void`
