
### postUpdate()

> **postUpdate**(`cause?`): `void`

Defined in: [packages/sprotty/src/base/views/viewer.tsx:86](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/viewer.tsx#L86)

#### Parameters

##### cause?

`Action`

#### Returns

`void`

***

### renderChildren()

> **renderChildren**(`element`, `args?`): `VNode`[]

Defined in: [packages/sprotty/src/base/views/viewer.tsx:73](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/viewer.tsx#L73)

#### Parameters

##### element

`Readonly`\<[`SParentElementImpl`](../Class.SParentElementImpl)\>

##### args?

[`IViewArgs`](../Interface.IViewArgs)

#### Returns

`VNode`[]

#### Implementation of

[`RenderingContext`](../Interface.RenderingContext).[`renderChildren`](../Interface.RenderingContext.md#renderchildren)

***

### renderElement()

> **renderElement**(`element`): `undefined` \| `VNode`

Defined in: [packages/sprotty/src/base/views/viewer.tsx:63](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/viewer.tsx#L63)

#### Parameters

##### element

`Readonly`\<[`SModelElementImpl`](../Class.SModelElementImpl)\>

#### Returns

`undefined` \| `VNode`

#### Implementation of

[`RenderingContext`](../Interface.RenderingContext).[`renderElement`](../Interface.RenderingContext.md#renderelement)
