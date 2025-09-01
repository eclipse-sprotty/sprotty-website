
[sprotty](../globals) / ForeignObjectView

# Class: ForeignObjectView

Defined in: [packages/sprotty/src/lib/generic-views.tsx:50](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/lib/generic-views.tsx#L50)

An SVG `foreignObject` view with a namespace specified by the provided `ForeignObjectElement`.
Note that `foreignObject` may not be supported by all browsers or SVG viewers.

## Implements

- [`IView`](../Interface.IView)

## Constructors

### Constructor

> **new ForeignObjectView**(): `ForeignObjectView`

#### Returns

`ForeignObjectView`

## Methods

### render()

> **render**(`model`, `context`): `undefined` \| `VNode`

Defined in: [packages/sprotty/src/lib/generic-views.tsx:51](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/lib/generic-views.tsx#L51)

#### Parameters

##### model

[`ForeignObjectElementImpl`](../Class.ForeignObjectElementImpl)

##### context

[`RenderingContext`](../Interface.RenderingContext)

#### Returns

`undefined` \| `VNode`

#### Implementation of

[`IView`](../Interface.IView).[`render`](../Interface.IView.md#render)
