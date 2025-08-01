
### decorate()

> **decorate**(`vnode`, `element`): `VNode`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:131](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L131)

#### Parameters

##### vnode

`VNode`

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`VNode`

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`decorate`](../Class.MouseTool.md#decorate)

***

### deregister()

> **deregister**(`mouseListener`): `void`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:40](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L40)

#### Parameters

##### mouseListener

[`MouseListener`](../Class.MouseListener)

#### Returns

`void`

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`deregister`](../Class.MouseTool.md#deregister)

***

### doubleClick()

> **doubleClick**(`model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:127](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L127)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`MouseEvent`

#### Returns

`void`

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`doubleClick`](../Class.MouseTool.md#doubleclick)

***

### focusOnMouseEvent()

> `protected` **focusOnMouseEvent**\<`K`\>(`methodName`, `model`): `void`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:82](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L82)

#### Type Parameters

##### K

`K` *extends* keyof [`MouseListener`](../Class.MouseListener)

#### Parameters

##### methodName

`K`

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Returns

`void`

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`focusOnMouseEvent`](../Class.MouseTool.md#focusonmouseevent)

***

### getTargetElement()

> `protected` **getTargetElement**(`model`, `event`): `undefined` \| [`SModelElementImpl`](../Class.SModelElementImpl)

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:46](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L46)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`MouseEvent`

#### Returns

`undefined` \| [`SModelElementImpl`](../Class.SModelElementImpl)

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`getTargetElement`](../Class.MouseTool.md#gettargetelement)

***

### handleEvent()

> `protected` **handleEvent**(`methodName`, `model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:60](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L60)

#### Parameters

##### methodName

[`MouseEventKind`](../TypeAlias.MouseEventKind)

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`MouseEvent`

#### Returns

`void`

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`handleEvent`](../Class.MouseTool.md#handleevent)

***

### mouseDown()

> **mouseDown**(`model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:106](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L106)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`MouseEvent`

#### Returns

`void`

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`mouseDown`](../Class.MouseTool.md#mousedown)

***

### mouseEnter()

> **mouseEnter**(`model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:98](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L98)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`MouseEvent`

#### Returns

`void`

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`mouseEnter`](../Class.MouseTool.md#mouseenter)

***

### mouseLeave()

> **mouseLeave**(`model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:102](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L102)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`MouseEvent`

#### Returns

`void`

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`mouseLeave`](../Class.MouseTool.md#mouseleave)

***

### mouseMove()

> **mouseMove**(`model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:110](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L110)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`MouseEvent`

#### Returns

`void`

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`mouseMove`](../Class.MouseTool.md#mousemove)

***

### mouseOut()

> **mouseOut**(`model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:94](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L94)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`MouseEvent`

#### Returns

`void`

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`mouseOut`](../Class.MouseTool.md#mouseout)

***

### mouseOver()

> **mouseOver**(`model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:90](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L90)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`MouseEvent`

#### Returns

`void`

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`mouseOver`](../Class.MouseTool.md#mouseover)

***

### mouseUp()

> **mouseUp**(`model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:114](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L114)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`MouseEvent`

#### Returns

`void`

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`mouseUp`](../Class.MouseTool.md#mouseup)

***

### postUpdate()

> **postUpdate**(): `void`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:152](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L152)

#### Returns

`void`

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`postUpdate`](../Class.MouseTool.md#postupdate)

***

### register()

> **register**(`mouseListener`): `void`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:36](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L36)

#### Parameters

##### mouseListener

[`MouseListener`](../Class.MouseListener)

#### Returns

`void`

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`register`](../Class.MouseTool.md#register)

***

### wheel()

> **wheel**(`model`, `event`): `void`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:118](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L118)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`WheelEvent`

#### Returns

`void`

#### Inherited from

[`MouseTool`](../Class.MouseTool).[`wheel`](../Class.MouseTool.md#wheel)
