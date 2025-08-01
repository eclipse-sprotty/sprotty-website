
[sprotty-protocol](../globals) / LayoutableChild

# Interface: LayoutableChild

Defined in: [model.ts:149](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L149)

Feature extension interface for `layoutableChildFeature`. This is used when the parent
element has a `layout` property (meaning it's a `LayoutContainer`).

## Extends

- [`BoundsAware`](../Interface.BoundsAware)

## Extended by

- [`LayoutContainer`](../Interface.LayoutContainer)

## Properties

### layoutOptions?

> `optional` **layoutOptions**: [`ModelLayoutOptions`](../Interface.ModelLayoutOptions)

Defined in: [model.ts:150](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L150)

***

### position

> **position**: [`Point`](../Interface.Point)

Defined in: [model.ts:135](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L135)

#### Inherited from

[`BoundsAware`](../Interface.BoundsAware).[`position`](../Interface.BoundsAware.md#position)

***

### size

> **size**: [`Dimension`](../Interface.Dimension)

Defined in: [model.ts:142](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L142)

#### Inherited from

[`BoundsAware`](../Interface.BoundsAware).[`size`](../Interface.BoundsAware.md#size)
