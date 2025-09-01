
### root

> **root**: `undefined` \| [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/features/bounds/hidden-bounds-updater.ts:58](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/hidden-bounds-updater.ts#L58)

## Methods

### decorate()

> **decorate**(`vnode`, `element`): `VNode`

Defined in: [packages/sprotty/src/features/bounds/hidden-bounds-updater.ts:60](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/hidden-bounds-updater.ts#L60)

#### Parameters

##### vnode

`VNode`

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`VNode`

#### Implementation of

[`IVNodePostprocessor`](../Interface.IVNodePostprocessor).[`decorate`](../Interface.IVNodePostprocessor.md#decorate)

***

### getBounds()

> `protected` **getBounds**(`elm`, `element`): `Bounds`

Defined in: [packages/sprotty/src/features/bounds/hidden-bounds-updater.ts:158](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/hidden-bounds-updater.ts#L158)

Compute the bounds of the given DOM element. Override this method to customize how
the bounding box of a rendered view is determined.

In case your Sprotty model element contains children that are rendered outside of
their parent, you can add the `ATTR_BBOX_ELEMENT` attribute to the SVG element
that shall be used to compute the bounding box.

#### Parameters

##### elm

`Node`

##### element

[`SModelElementImpl`](../Class.SModelElementImpl) & [`InternalBoundsAware`](../Interface.InternalBoundsAware)

#### Returns

`Bounds`

***

### getBoundsFromDOM()

> `protected` **getBoundsFromDOM**(): `void`

Defined in: [packages/sprotty/src/features/bounds/hidden-bounds-updater.ts:115](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/hidden-bounds-updater.ts#L115)

#### Returns

`void`

***

### postUpdate()

> **postUpdate**(`cause?`): `void`

Defined in: [packages/sprotty/src/features/bounds/hidden-bounds-updater.ts:75](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/hidden-bounds-updater.ts#L75)

#### Parameters

##### cause?

`Action`

#### Returns

`void`

#### Implementation of

[`IVNodePostprocessor`](../Interface.IVNodePostprocessor).[`postUpdate`](../Interface.IVNodePostprocessor.md#postupdate)
