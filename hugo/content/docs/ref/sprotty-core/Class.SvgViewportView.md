
[sprotty](../globals) / SvgViewportView

# Class: SvgViewportView

Defined in: [packages/sprotty/src/lib/svg-views.tsx:33](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/lib/svg-views.tsx#L33)

Base interface for the components that turn GModelElements into virtual DOM elements.

## Implements

- [`IView`](../Interface.IView)

## Constructors

### Constructor

> **new SvgViewportView**(): `SvgViewportView`

#### Returns

`SvgViewportView`

## Methods

### render()

> **render**(`model`, `context`, `args?`): `VNode`

Defined in: [packages/sprotty/src/lib/svg-views.tsx:34](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/lib/svg-views.tsx#L34)

#### Parameters

##### model

`Readonly`\<[`ViewportRootElementImpl`](../Class.ViewportRootElementImpl)\>

##### context

[`RenderingContext`](../Interface.RenderingContext)

##### args?

[`IViewArgs`](../Interface.IViewArgs)

#### Returns

`VNode`

#### Implementation of

[`IView`](../Interface.IView).[`render`](../Interface.IView.md#render)
