
### scrollbar

> `protected` **scrollbar**: `undefined` \| `HTMLElement`

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:41](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L41)

***

### scrollbarMouseDownDelay

> `protected` **scrollbarMouseDownDelay**: `number` = `200`

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:43](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L43)

***

### scrollbarMouseDownTimeout

> `protected` **scrollbarMouseDownTimeout**: `undefined` \| `number`

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:42](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L42)

***

### viewerOptions

> `protected` **viewerOptions**: [`ViewerOptions`](../Interface.ViewerOptions)

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:36](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L36)

## Methods

### calculateDistance()

> `protected` **calculateDistance**(`touches`): `number`

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:305](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L305)

#### Parameters

##### touches

`TouchList`

#### Returns

`number`

***

### calculateMidpoint()

> `protected` **calculateMidpoint**(`touches`, `canvasBounds`): `Point`

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:311](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L311)

#### Parameters

##### touches

`TouchList`

##### canvasBounds

`Bounds`

#### Returns

`Point`

***

### contextMenu()

> **contextMenu**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:206](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L206)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Inherited from

[`MouseListener`](../Class.MouseListener).[`contextMenu`](../Class.MouseListener.md#contextmenu)

***

### decorate()

> **decorate**(`vnode`, `element`): `VNode`

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:218](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L218)

#### Parameters

##### vnode

`VNode`

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`VNode`

#### Inherited from

[`MouseListener`](../Class.MouseListener).[`decorate`](../Class.MouseListener.md#decorate)

***

### doubleClick()

> **doubleClick**(`target`, `event`): `Action`[]

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:79](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L79)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

`Action`[]

#### Overrides

[`MouseListener`](../Class.MouseListener).[`doubleClick`](../Class.MouseListener.md#doubleclick)

***

### dragCanvas()

> `protected` **dragCanvas**(`model`, `event`, `lastScrollPosition`): `Action`[]

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:201](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L201)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl) & `Viewport`

##### event

`MouseEvent` | `Touch`

##### lastScrollPosition

`Point`

#### Returns

`Action`[]

***

### dragOver()

> **dragOver**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:210](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L210)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Inherited from

[`MouseListener`](../Class.MouseListener).[`dragOver`](../Class.MouseListener.md#dragover)

***

### drop()

> **drop**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:214](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L214)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Inherited from

[`MouseListener`](../Class.MouseListener).[`drop`](../Class.MouseListener.md#drop)

***

### findClickTarget()

> `protected` **findClickTarget**(`scrollbar`, `event`): `undefined` \| `HTMLElement`

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:295](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L295)

#### Parameters

##### scrollbar

`HTMLElement`

##### event

`MouseEvent`

#### Returns

`undefined` \| `HTMLElement`

***

### getScrollbar()

> `protected` **getScrollbar**(`event`): `undefined` \| `HTMLElement`

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:283](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L283)

#### Parameters

##### event

`MouseEvent` | `Touch`

#### Returns

`undefined` \| `HTMLElement`

***

### getScrollbarOrientation()

> `protected` **getScrollbarOrientation**(`scrollbar`): `"horizontal"` \| `"vertical"`

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:287](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L287)

#### Parameters

##### scrollbar

`HTMLElement`

#### Returns

`"horizontal"` \| `"vertical"`

***

### mouseDown()

> **mouseDown**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:45](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L45)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Overrides

[`MouseListener`](../Class.MouseListener).[`mouseDown`](../Class.MouseListener.md#mousedown)

***

### mouseDownOrSingleTouchStart()

> `protected` **mouseDownOrSingleTouchStart**(`event`, `viewport`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:128](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L128)

#### Parameters

##### event

`MouseEvent` | `Touch`

##### viewport

[`SModelRootImpl`](../Class.SModelRootImpl) & `Viewport`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

***

### mouseEnter()

> **mouseEnter**(`target`, `event`): `Action`[]

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:66](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L66)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

`Action`[]

#### Overrides

[`MouseListener`](../Class.MouseListener).[`mouseEnter`](../Class.MouseListener.md#mouseenter)

***

### mouseLeave()

> **mouseLeave**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:182](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L182)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Inherited from

[`MouseListener`](../Class.MouseListener).[`mouseLeave`](../Class.MouseListener.md#mouseleave)

***

### mouseMove()

> **mouseMove**(`target`, `event`): `Action`[]

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:59](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L59)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

`Action`[]

#### Overrides

[`MouseListener`](../Class.MouseListener).[`mouseMove`](../Class.MouseListener.md#mousemove)

***

### mouseOrSingleTouchMove()

> `protected` **mouseOrSingleTouchMove**(`target`, `event`): `Action`[]

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:141](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L141)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent` | `Touch`

#### Returns

`Action`[]

***

### mouseOut()

> **mouseOut**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:174](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L174)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Inherited from

[`MouseListener`](../Class.MouseListener).[`mouseOut`](../Class.MouseListener.md#mouseout)

***

### mouseOver()

> **mouseOver**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:170](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L170)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Inherited from

[`MouseListener`](../Class.MouseListener).[`mouseOver`](../Class.MouseListener.md#mouseover)

***

### mouseUp()

> **mouseUp**(`target`, `event`): `Action`[]

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:73](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L73)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

`Action`[]

#### Overrides

[`MouseListener`](../Class.MouseListener).[`mouseUp`](../Class.MouseListener.md#mouseup)

***

### moveScrollBar()

> `protected` **moveScrollBar**(`model`, `event`, `scrollbar`, `animate`): `Action`[]

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:226](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L226)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl) & `Viewport`

##### event

`MouseEvent` | `Touch`

##### scrollbar

`HTMLElement`

##### animate

`boolean` = `false`

#### Returns

`Action`[]

***

### touchEnd()

> **touchEnd**(`target`, `event`): `Action`[]

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:185](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L185)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`TouchEvent`

#### Returns

`Action`[]

#### Implementation of

[`ITouchListener`](../Interface.ITouchListener).[`touchEnd`](../Interface.ITouchListener.md#touchend)

***

### touchMove()

> **touchMove**(`target`, `event`): `Action`[]

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:117](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L117)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`TouchEvent`

#### Returns

`Action`[]

#### Implementation of

[`ITouchListener`](../Interface.ITouchListener).[`touchMove`](../Interface.ITouchListener.md#touchmove)

***

### touchStart()

> **touchStart**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:100](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L100)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`TouchEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Implementation of

[`ITouchListener`](../Interface.ITouchListener).[`touchStart`](../Interface.ITouchListener.md#touchstart)

***

### twoTouchMove()

> `protected` **twoTouchMove**(`target`, `touches`): `Action`[]

Defined in: [packages/sprotty/src/features/viewport/scroll.ts:158](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/scroll.ts#L158)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### touches

`TouchList`

#### Returns

`Action`[]

***

### wheel()

> **wheel**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:198](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L198)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`WheelEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Inherited from

[`MouseListener`](../Class.MouseListener).[`wheel`](../Class.MouseListener.md#wheel)
