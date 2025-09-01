
[sprotty-protocol](../globals) / SIssueMarker

# Interface: SIssueMarker

Defined in: [model.ts:292](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L292)

An issue marker is used to display a symbol about an error or a warning attached to another model element.

## Extends

- [`SShapeElement`](../Interface.SShapeElement)

## Properties

### children?

> `optional` **children**: [`SModelElement`](../Interface.SModelElement)[]

Defined in: [model.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L27)

#### Inherited from

[`SShapeElement`](../Interface.SShapeElement).[`children`](../Interface.SShapeElement.md#children)

***

### cssClasses?

> `optional` **cssClasses**: `string`[]

Defined in: [model.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L28)

#### Inherited from

[`SShapeElement`](../Interface.SShapeElement).[`cssClasses`](../Interface.SShapeElement.md#cssclasses)

***

### id

> **id**: `string`

Defined in: [model.ts:26](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L26)

#### Inherited from

[`SShapeElement`](../Interface.SShapeElement).[`id`](../Interface.SShapeElement.md#id)

***

### issues

> **issues**: [`SIssue`](../Interface.SIssue)[]

Defined in: [model.ts:293](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L293)

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

[`SShapeElement`](../Interface.SShapeElement).[`type`](../Interface.SShapeElement.md#type)
