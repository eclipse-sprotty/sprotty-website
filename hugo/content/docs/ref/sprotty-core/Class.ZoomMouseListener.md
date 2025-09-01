
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

### getViewportOffset()

> `protected` **getViewportOffset**(`root`, `event`): `Point`

Defined in: [packages/sprotty/src/features/viewport/zoom.ts:90](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/zoom.ts#L90)

#### Parameters

##### root

[`SModelRootImpl`](../Class.SModelRootImpl)

##### event

`WheelEvent`

#### Returns

`Point`

***

### getZoomFactor()

> `protected` **getZoomFactor**(`event`): `number`

Defined in: [packages/sprotty/src/features/viewport/zoom.ts:99](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/zoom.ts#L99)

#### Parameters

##### event

`WheelEvent`

#### Returns

`number`

***

### isScrollMode()

> `protected` **isScrollMode**(`event`): `boolean`

Defined in: [packages/sprotty/src/features/viewport/zoom.ts:55](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/zoom.ts#L55)

#### Parameters

##### event

`WheelEvent`

#### Returns

`boolean`

***

### mouseDown()

> **mouseDown**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:186](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L186)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Inherited from

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

> **mouseMove**(`target`, `event`): (`Action` \| `Promise`\<`Action`\>)[]

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:190](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L190)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Inherited from

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

Defined in: [packages/sprotty/src/base/views/mouse-tool.ts:194](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/mouse-tool.ts#L194)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`MouseEvent`

#### Returns

(`Action` \| `Promise`\<`Action`\>)[]

#### Inherited from

[`MouseListener`](../Class.MouseListener).[`mouseUp`](../Class.MouseListener.md#mouseup)

***

### processScroll()

> `protected` **processScroll**(`viewport`, `event`): `Viewport`

Defined in: [packages/sprotty/src/features/viewport/zoom.ts:59](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/zoom.ts#L59)

#### Parameters

##### viewport

`Viewport`

##### event

`WheelEvent`

#### Returns

`Viewport`

***

### processZoom()

> `protected` **processZoom**(`viewport`, `target`, `event`): `undefined` \| `Viewport`

Defined in: [packages/sprotty/src/features/viewport/zoom.ts:69](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/zoom.ts#L69)

#### Parameters

##### viewport

`Viewport`

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`WheelEvent`

#### Returns

`undefined` \| `Viewport`

***

### wheel()

> **wheel**(`target`, `event`): `Action`[]

Defined in: [packages/sprotty/src/features/viewport/zoom.ts:43](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/zoom.ts#L43)

#### Parameters

##### target

[`SModelElementImpl`](../Class.SModelElementImpl)

##### event

`WheelEvent`

#### Returns

`Action`[]

#### Overrides

[`MouseListener`](../Class.MouseListener).[`wheel`](../Class.MouseListener.md#wheel)
