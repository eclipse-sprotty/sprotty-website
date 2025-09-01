
### deregister()

> **deregister**(`pointerListener`): `void`

Defined in: [packages/sprotty/src/base/views/pointer-tool.ts:38](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/pointer-tool.ts#L38)

#### Parameters

##### pointerListener

[`IPointerListener`](../Interface.IPointerListener)

#### Returns

`void`

***

### getTargetElement()

> `protected` **getTargetElement**(`model`, `event`): `undefined` \| [`SModelElementImpl`](../Class.SModelElementImpl)

Defined in: [packages/sprotty/src/base/views/pointer-tool.ts:43](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/pointer-tool.ts#L43)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`PointerEvent`

#### Returns

`undefined` \| [`SModelElementImpl`](../Class.SModelElementImpl)

***

### handleEvent()

> `protected` **handleEvent**(`methodName`, `model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/pointer-tool.ts:56](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/pointer-tool.ts#L56)

#### Parameters

##### methodName

[`PointerEventKind`](../TypeAlias.PointerEventKind)

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`PointerEvent`

#### Returns

`void`

***

### postUpdate()

> **postUpdate**(): `void`

Defined in: [packages/sprotty/src/base/views/pointer-tool.ts:100](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/pointer-tool.ts#L100)

#### Returns

`void`

#### Implementation of

[`IVNodePostprocessor`](../Interface.IVNodePostprocessor).[`postUpdate`](../Interface.IVNodePostprocessor.md#postupdate)

***

### register()

> **register**(`pointerListener`): `void`

Defined in: [packages/sprotty/src/base/views/pointer-tool.ts:34](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/pointer-tool.ts#L34)

#### Parameters

##### pointerListener

[`IPointerListener`](../Interface.IPointerListener)

#### Returns

`void`
