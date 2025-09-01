
[sprotty-protocol](../globals) / SShapeElement

# Interface: SShapeElement

Defined in: [model.ts:55](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L55)

Base type for all elements of the diagram model.
Each model element must have a unique ID and a type that is used to look up its view.

## Extends

- [`SModelElement`](../Interface.SModelElement).`Partial`\<[`LayoutableChild`](../Interface.LayoutableChild)\>

## Extended by

- [`SNode`](../Interface.SNode)
- [`SPort`](../Interface.SPort)
- [`SLabel`](../Interface.SLabel)
- [`SCompartment`](../Interface.SCompartment)
- [`SButton`](../Interface.SButton)
- [`SIssueMarker`](../Interface.SIssueMarker)

## Properties

### children?

> `optional` **children**: [`SModelElement`](../Interface.SModelElement)[]

Defined in: [model.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L27)

#### Inherited from

[`SModelElement`](../Interface.SModelElement).[`children`](../Interface.SModelElement.md#children)

***

### cssClasses?

> `optional` **cssClasses**: `string`[]

Defined in: [model.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L28)

#### Inherited from

[`SModelElement`](../Interface.SModelElement).[`cssClasses`](../Interface.SModelElement.md#cssclasses)

***

### id

> **id**: `string`

Defined in: [model.ts:26](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L26)

#### Inherited from

[`SModelElement`](../Interface.SModelElement).[`id`](../Interface.SModelElement.md#id)

***

### layoutOptions?

> `optional` **layoutOptions**: [`ModelLayoutOptions`](../Interface.ModelLayoutOptions)

Defined in: [model.ts:150](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L150)

#### Inherited from

[`LayoutableChild`](../Interface.LayoutableChild).[`layoutOptions`](../Interface.LayoutableChild.md#layoutoptions)

***

### position?

> `optional` **position**: [`Point`](../Interface.Point)

Defined in: [model.ts:135](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L135)

#### Inherited from

[`Locateable`](../Interface.Locateable).[`position`](../Interface.Locateable.md#position)

***

### size?

> `optional` **size**: [`Dimension`](../Interface.Dimension)

Defined in: [model.ts:142](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L142)

#### Inherited from

[`BoundsAware`](../Interface.BoundsAware).[`size`](../Interface.BoundsAware.md#size)

***

### type

> **type**: `string`

Defined in: [model.ts:25](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L25)

#### Inherited from

[`SModelElement`](../Interface.SModelElement).[`type`](../Interface.SModelElement.md#type)
