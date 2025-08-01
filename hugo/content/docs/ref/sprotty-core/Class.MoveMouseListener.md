
### snapper?

> `optional` **snapper**: [`ISnapper`](../Interface.ISnapper)

Defined in: [packages/sprotty/src/features/move/move.ts:427](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L427)

***

### startDragPosition

> **startDragPosition**: `undefined` \| `Point`

Defined in: [packages/sprotty/src/features/move/move.ts:430](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L430)

## Methods

### activateRoutingHandle()

> `protected` **activateRoutingHandle**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/move/move.ts:463](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L463)

#### Parameters

##### target

[`SRoutingHandleImpl`](../Class.SRoutingHandleImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

***

### collectStartPositions()

> `protected` **collectStartPositions**(`root`): `void`

Defined in: [packages/sprotty/src/features/move/move.ts:483](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L483)

#### Parameters

##### root

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Returns

`void`

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

### createElementMove()

> `protected` **createElementMove**(`element`, `startPosition`, `delta`, `event`): `undefined` \| [`ElementMove`](../Interface.ElementMove)

Defined in: [packages/sprotty/src/features/move/move.ts:535](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L535)

#### Parameters

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

##### startPosition

`Point`

##### delta

`Point`

##### event

`MouseEvent`

#### Returns

`undefined` \| [`ElementMove`](../Interface.ElementMove)

***

### deactivateRoutingHandle()

> `protected` **deactivateRoutingHandle**(`element`, `target`, `event`): `Action`[]

Defined in: [packages/sprotty/src/features/move/move.ts:617](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L617)

#### Parameters

##### element

[`SRoutingHandleImpl`](../Class.SRoutingHandleImpl)

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

`Action`[]

***

### decorate()

> **decorate**(`vnode`, `element`): `VNode`

Defined in: [packages/sprotty/src/features/move/move.ts:651](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L651)

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

### deleteEdgeInProgress()

> `protected` **deleteEdgeInProgress**(`edgeInProgress`): `Action`

Defined in: [packages/sprotty/src/features/move/move.ts:641](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L641)

#### Parameters

##### edgeInProgress

[`SChildElementImpl`](../Class.SChildElementImpl)

#### Returns

`Action`

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

### getElementMoves()

> `protected` **getElementMoves**(`target`, `event`, `isFinished`): `undefined` \| `MoveAction`

Defined in: [packages/sprotty/src/features/move/move.ts:510](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L510)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

##### isFinished

`boolean`

#### Returns

`undefined` \| `MoveAction`

***

### getHandlePosition()

> `protected` **getHandlePosition**(`handle`): `undefined` \| `Point`

Defined in: [packages/sprotty/src/features/move/move.ts:571](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L571)

#### Parameters

##### handle

[`SRoutingHandleImpl`](../Class.SRoutingHandleImpl)

#### Returns

`undefined` \| `Point`

***

### isChildOfSelected()

> `protected` **isChildOfSelected**(`selectedElements`, `element`): `boolean`

Defined in: [packages/sprotty/src/features/move/move.ts:500](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L500)

#### Parameters

##### selectedElements

`Set`\<[`SModelElementImpl`](../Class.SModelElementImpl)\>

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`boolean`

***

### mouseDown()

> **mouseDown**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/move/move.ts:433](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L433)

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

> **mouseEnter**(`target`, `event`): `Action`[]

Defined in: [packages/sprotty/src/features/move/move.ts:583](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L583)

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

Defined in: [packages/sprotty/src/features/move/move.ts:467](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L467)

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

Defined in: [packages/sprotty/src/features/move/move.ts:589](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L589)

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

### snap()

> `protected` **snap**(`position`, `element`, `isSnap`): `Point`

Defined in: [packages/sprotty/src/features/move/move.ts:564](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L564)

#### Parameters

##### position

`Point`

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

##### isSnap

`boolean`

#### Returns

`Point`

***

### startCreatingOnDrag()

> `protected` **startCreatingOnDrag**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/features/move/move.ts:452](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L452)

#### Parameters

##### target

[`CreatingOnDrag`](../Interface.CreatingOnDrag)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

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
