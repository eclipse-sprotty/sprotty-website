
### wasSelected

> **wasSelected**: `boolean` = `false`

Defined in: [packages/sprotty/src/features/select/select.ts:136](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/select/select.ts#L136)

## Methods

### collectElementsToDeselect()

> `protected` **collectElementsToDeselect**(`target`, `selectableTarget`): [`SModelElementImpl`](../Class.SModelElementImpl)[]

Defined in: [packages/sprotty/src/features/select/select.ts:172](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/select/select.ts#L172)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### selectableTarget

`undefined` | [`SModelElementImpl`](../Class.SModelElementImpl) & `Selectable`

#### Returns

[`SModelElementImpl`](../Class.SModelElementImpl)[]

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

Defined in: [packages/sprotty/src/features/select/select.ts:244](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/select/select.ts#L244)

#### Parameters

##### vnode

`VNode`

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`VNode`

#### Overrides

[`MouseListener`](../Class.MouseListener).[`decorate`](../Class.MouseListener.md#decorate)

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

[`MouseListener`](../Class.MouseListener).[`doubleClick`](../Class.MouseListener.md#doubleclick)

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

### handleButton()

> `protected` **handleButton**(`target`, `event`): `undefined` \| (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/select/select.ts:178](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/select/select.ts#L178)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

`undefined` \| (`Action` \| `Promise`\<`Action`\>)[]

***

### handleDeselectAll()

> `protected` **handleDeselectAll**(`deselectedElements`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/select/select.ts:210](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/select/select.ts#L210)

#### Parameters

##### deselectedElements

[`SModelElementImpl`](../Class.SModelElementImpl)[]

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

***

### handleDeselectTarget()

> `protected` **handleDeselectTarget**(`selectableTarget`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/select/select.ts:201](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/select/select.ts#L201)

#### Parameters

##### selectableTarget

[`SModelElementImpl`](../Class.SModelElementImpl) & `Selectable`

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

***

### handleSelectTarget()

> `protected` **handleSelectTarget**(`selectableTarget`, `deselectedElements`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/select/select.ts:188](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/select/select.ts#L188)

#### Parameters

##### selectableTarget

[`SModelElementImpl`](../Class.SModelElementImpl) & `Selectable`

##### deselectedElements

[`SModelElementImpl`](../Class.SModelElementImpl)[]

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

***

### mouseDown()

> **mouseDown**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/select/select.ts:140](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/select/select.ts#L140)

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

Defined in: [packages/sprotty/src/features/select/select.ts:220](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/select/select.ts#L220)

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

> **mouseUp**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/select/select.ts:225](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/select/select.ts#L225)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Overrides

[`MouseListener`](../Class.MouseListener).[`mouseUp`](../Class.MouseListener.md#mouseup)

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
