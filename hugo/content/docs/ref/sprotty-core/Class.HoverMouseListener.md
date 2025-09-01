
### state

> `protected` **state**: [`HoverState`](../Interface.HoverState)

Defined in: [packages/sprotty/src/features/hover/hover.ts:103](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L103)

#### Inherited from

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`state`](../Class.AbstractHoverMouseListener.md#state)

## Methods

### allowSidePosition()

> `protected` **allowSidePosition**(`target`, `side`, `distance`): `boolean`

Defined in: [packages/sprotty/src/features/hover/hover.ts:177](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L177)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### side

`"left"` | `"right"` | `"above"` | `"below"`

##### distance

`number`

#### Returns

`boolean`

***

### closeOnMouseMove()

> `protected` **closeOnMouseMove**(`target`, `event`): `boolean`

Defined in: [packages/sprotty/src/features/hover/hover.ts:276](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L276)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

`boolean`

***

### computePopupBounds()

> `protected` **computePopupBounds**(`target`, `mousePosition`): `Bounds`

Defined in: [packages/sprotty/src/features/hover/hover.ts:148](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L148)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### mousePosition

`Point`

#### Returns

`Bounds`

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

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`contextMenu`](../Class.AbstractHoverMouseListener.md#contextmenu)

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

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`decorate`](../Class.AbstractHoverMouseListener.md#decorate)

***

### doubleClick()

> **doubleClick**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:202](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L202)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Inherited from

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`doubleClick`](../Class.AbstractHoverMouseListener.md#doubleclick)

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

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`dragOver`](../Class.AbstractHoverMouseListener.md#dragover)

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

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`drop`](../Class.AbstractHoverMouseListener.md#drop)

***

### getElementFromEventPosition()

> `protected` **getElementFromEventPosition**(`event`): `null` \| `Element`

Defined in: [packages/sprotty/src/features/hover/hover.ts:247](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L247)

#### Parameters

##### event

`MouseEvent`

#### Returns

`null` \| `Element`

***

### isSprottyPopup()

> `protected` **isSprottyPopup**(`element`): `boolean`

Defined in: [packages/sprotty/src/features/hover/hover.ts:251](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L251)

#### Parameters

##### element

`null` | `Element`

#### Returns

`boolean`

***

### mouseDown()

> **mouseDown**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/hover/hover.ts:105](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L105)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Inherited from

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`mouseDown`](../Class.AbstractHoverMouseListener.md#mousedown)

***

### mouseEnter()

> **mouseEnter**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:178](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L178)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Inherited from

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`mouseEnter`](../Class.AbstractHoverMouseListener.md#mouseenter)

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

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`mouseLeave`](../Class.AbstractHoverMouseListener.md#mouseleave)

***

### mouseMove()

> **mouseMove**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/hover/hover.ts:258](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L258)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Overrides

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`mouseMove`](../Class.AbstractHoverMouseListener.md#mousemove)

***

### mouseOut()

> **mouseOut**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/hover/hover.ts:222](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L222)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Overrides

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`mouseOut`](../Class.AbstractHoverMouseListener.md#mouseout)

***

### mouseOver()

> **mouseOver**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/hover/hover.ts:194](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L194)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Overrides

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`mouseOver`](../Class.AbstractHoverMouseListener.md#mouseover)

***

### mouseUp()

> **mouseUp**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/hover/hover.ts:110](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L110)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Inherited from

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`mouseUp`](../Class.AbstractHoverMouseListener.md#mouseup)

***

### startMouseOutTimer()

> `protected` **startMouseOutTimer**(): `Promise`\<`Action`\>

Defined in: [packages/sprotty/src/features/hover/hover.ts:122](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L122)

#### Returns

`Promise`\<`Action`\>

#### Inherited from

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`startMouseOutTimer`](../Class.AbstractHoverMouseListener.md#startmouseouttimer)

***

### startMouseOverTimer()

> `protected` **startMouseOverTimer**(`target`, `event`): `Promise`\<`Action`\>

Defined in: [packages/sprotty/src/features/hover/hover.ts:181](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L181)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

`Promise`\<`Action`\>

***

### stopMouseOutTimer()

> `protected` **stopMouseOutTimer**(): `void`

Defined in: [packages/sprotty/src/features/hover/hover.ts:115](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L115)

#### Returns

`void`

#### Inherited from

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`stopMouseOutTimer`](../Class.AbstractHoverMouseListener.md#stopmouseouttimer)

***

### stopMouseOverTimer()

> `protected` **stopMouseOverTimer**(): `void`

Defined in: [packages/sprotty/src/features/hover/hover.ts:133](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/hover/hover.ts#L133)

#### Returns

`void`

#### Inherited from

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`stopMouseOverTimer`](../Class.AbstractHoverMouseListener.md#stopmouseovertimer)

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

[`AbstractHoverMouseListener`](../Class.AbstractHoverMouseListener).[`wheel`](../Class.AbstractHoverMouseListener.md#wheel)
