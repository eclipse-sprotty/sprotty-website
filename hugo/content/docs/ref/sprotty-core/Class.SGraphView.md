
[sprotty](../globals) / SGraphView

# Class: SGraphView

Defined in: [packages/sprotty/src/graph/views.tsx:46](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L46)

IView component that turns an SGraph element and its children into a tree of virtual DOM elements.

## Implements

- [`IView`](../Interface.IView)

## Constructors

### Constructor

> **new SGraphView**(): `SGraphView`

#### Returns

`SGraphView`

## Properties

### edgeRouterRegistry

> **edgeRouterRegistry**: [`EdgeRouterRegistry`](../Class.EdgeRouterRegistry)

Defined in: [packages/sprotty/src/graph/views.tsx:48](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L48)

## Methods

### render()

> **render**(`model`, `context`): `VNode`

Defined in: [packages/sprotty/src/graph/views.tsx:50](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L50)

#### Parameters

##### model

`Readonly`\<[`SGraphImpl`](../Class.SGraphImpl)\>

##### context

[`RenderingContext`](../Interface.RenderingContext)

#### Returns

`VNode`

#### Implementation of

[`IView`](../Interface.IView).[`render`](../Interface.IView.md#render)
