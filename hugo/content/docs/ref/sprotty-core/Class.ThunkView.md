
### init()

> `protected` **init**(`thunk`): `void`

Defined in: [packages/sprotty/src/base/views/thunk-view.ts:73](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/thunk-view.ts#L73)

#### Parameters

##### thunk

`VNode`

#### Returns

`void`

***

### prepatch()

> `protected` **prepatch**(`oldVnode`, `thunk`): `void`

Defined in: [packages/sprotty/src/base/views/thunk-view.ts:79](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/thunk-view.ts#L79)

#### Parameters

##### oldVnode

`VNode`

##### thunk

`VNode`

#### Returns

`void`

***

### render()

> **render**(`model`, `context`): `VNode`

Defined in: [packages/sprotty/src/base/views/thunk-view.ts:45](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/thunk-view.ts#L45)

#### Parameters

##### model

[`SModelElementImpl`](../Class.SModelElementImpl)

##### context

[`RenderingContext`](../Interface.RenderingContext)

#### Returns

`VNode`

#### Implementation of

[`IView`](../Interface.IView).[`render`](../Interface.IView.md#render)

***

### renderAndDecorate()

> `protected` **renderAndDecorate**(`model`, `context`): `VNode`

Defined in: [packages/sprotty/src/base/views/thunk-view.ts:57](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/thunk-view.ts#L57)

#### Parameters

##### model

[`SModelElementImpl`](../Class.SModelElementImpl)

##### context

[`RenderingContext`](../Interface.RenderingContext)

#### Returns

`VNode`

***

### selector()

> `abstract` **selector**(`model`): `string`

Defined in: [packages/sprotty/src/base/views/thunk-view.ts:38](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/thunk-view.ts#L38)

Returns the selector of the VNode root, i.e. it's element type.

#### Parameters

##### model

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`string`

***

### watchedArgs()

> `abstract` **watchedArgs**(`model`): `any`[]

Defined in: [packages/sprotty/src/base/views/thunk-view.ts:33](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/thunk-view.ts#L33)

Returns the array of values that are watched for changes.
If they haven't change since the last rendering, the VNode is neither recalculated nor patched.

#### Parameters

##### model

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`any`[]
