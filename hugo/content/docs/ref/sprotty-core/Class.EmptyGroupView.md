
[sprotty](../globals) / EmptyGroupView

# Class: EmptyGroupView

Defined in: [packages/sprotty/src/lib/svg-views.tsx:102](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/lib/svg-views.tsx#L102)

Base interface for the components that turn GModelElements into virtual DOM elements.

## Implements

- [`IView`](../Interface.IView)

## Constructors

### Constructor

> **new EmptyGroupView**(): `EmptyGroupView`

#### Returns

`EmptyGroupView`

## Methods

### render()

> **render**(`model`, `context`): `VNode`

Defined in: [packages/sprotty/src/lib/svg-views.tsx:103](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/lib/svg-views.tsx#L103)

#### Parameters

##### model

`Readonly`\<[`SModelElementImpl`](../Class.SModelElementImpl)\>

##### context

[`RenderingContext`](../Interface.RenderingContext)

#### Returns

`VNode`

#### Implementation of

[`IView`](../Interface.IView).[`render`](../Interface.IView.md#render)
