
[sprotty](../globals) / SCompartmentView

# Class: SCompartmentView

Defined in: [packages/sprotty/src/graph/views.tsx:434](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L434)

Base interface for the components that turn GModelElements into virtual DOM elements.

## Implements

- [`IView`](../Interface.IView)

## Constructors

### Constructor

> **new SCompartmentView**(): `SCompartmentView`

#### Returns

`SCompartmentView`

## Methods

### render()

> **render**(`compartment`, `context`, `args?`): `undefined` \| `VNode`

Defined in: [packages/sprotty/src/graph/views.tsx:435](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/views.tsx#L435)

#### Parameters

##### compartment

`Readonly`\<[`SCompartmentImpl`](../Class.SCompartmentImpl)\>

##### context

[`RenderingContext`](../Interface.RenderingContext)

##### args?

[`IViewArgs`](../Interface.IViewArgs)

#### Returns

`undefined` \| `VNode`

#### Implementation of

[`IView`](../Interface.IView).[`render`](../Interface.IView.md#render)
