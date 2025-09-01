
[sprotty](../globals) / IView

# Interface: IView\<A\>

Defined in: [packages/sprotty/src/base/views/view.tsx:57](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/view.tsx#L57)

Base interface for the components that turn GModelElements into virtual DOM elements.

## Type Parameters

### A

`A` *extends* [`IViewArgs`](../Interface.IViewArgs) = \{ \}

## Methods

### render()

> **render**(`model`, `context`, `args?`): `undefined` \| `VNode`

Defined in: [packages/sprotty/src/base/views/view.tsx:58](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/view.tsx#L58)

#### Parameters

##### model

`Readonly`\<[`SModelElementImpl`](../Class.SModelElementImpl)\>

##### context

[`RenderingContext`](../Interface.RenderingContext)

##### args?

`A`

#### Returns

`undefined` \| `VNode`
