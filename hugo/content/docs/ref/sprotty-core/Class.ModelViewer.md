
### options

> `protected` **options**: [`ViewerOptions`](../Interface.ViewerOptions)

Defined in: [packages/sprotty/src/base/views/viewer.tsx:127](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/viewer.tsx#L127)

***

### patcher

> `protected` `readonly` **patcher**: [`Patcher`](../TypeAlias.Patcher)

Defined in: [packages/sprotty/src/base/views/viewer.tsx:139](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/viewer.tsx#L139)

***

### renderer

> `protected` `readonly` **renderer**: [`ModelRenderer`](../Class.ModelRenderer)

Defined in: [packages/sprotty/src/base/views/viewer.tsx:138](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/viewer.tsx#L138)

## Methods

### getBoundsInPage()

> `protected` **getBoundsInPage**(`element`): `object`

Defined in: [packages/sprotty/src/base/views/viewer.tsx:209](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/viewer.tsx#L209)

#### Parameters

##### element

`Element`

#### Returns

`object`

##### height

> **height**: `number` = `bounds.height`

##### width

> **width**: `number` = `bounds.width`

##### x

> **x**: `number`

##### y

> **y**: `number`

***

### hasFocus()

> `protected` **hasFocus**(): `boolean`

Defined in: [packages/sprotty/src/base/views/viewer.tsx:179](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/viewer.tsx#L179)

#### Returns

`boolean`

***

### onWindowResize()

> `protected` **onWindowResize**(`vdom`): `void`

Defined in: [packages/sprotty/src/base/views/viewer.tsx:201](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/viewer.tsx#L201)

#### Parameters

##### vdom

`VNode`

#### Returns

`void`

***

### restoreFocus()

> `protected` **restoreFocus**(`focus`): `void`

Defined in: [packages/sprotty/src/base/views/viewer.tsx:190](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/viewer.tsx#L190)

#### Parameters

##### focus

`boolean`

#### Returns

`void`

***

### update()

> **update**(`model`, `cause?`): `void`

Defined in: [packages/sprotty/src/base/views/viewer.tsx:143](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/viewer.tsx#L143)

#### Parameters

##### model

`Readonly`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

##### cause?

`Action`

#### Returns

`void`

#### Implementation of

[`IViewer`](../Interface.IViewer).[`update`](../Interface.IViewer.md#update)
