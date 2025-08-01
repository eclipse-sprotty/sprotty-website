
[sprotty-protocol](../globals) / ForeignObjectElement

# Interface: ForeignObjectElement

Defined in: [model.ts:337](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L337)

A `foreignObject` element to be transferred to the DOM within the SVG.

This can be useful to to benefit from e.g. HTML rendering features, such as line wrapping, inside of
the SVG diagram.  Note that `foreignObject` is not supported by all browsers and SVG viewers may not
support rendering the `foreignObject` content.

If no dimensions are specified in the schema element, this element will obtain the dimension of
its parent to fill the entire available room. Thus, this element requires specified bounds itself
or bounds to be available for its parent.

## Extends

- [`ShapedPreRenderedElement`](../Interface.ShapedPreRenderedElement)

## Properties

### children?

> `optional` **children**: [`SModelElement`](../Interface.SModelElement)[]

Defined in: [model.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L27)

#### Inherited from

[`ShapedPreRenderedElement`](../Interface.ShapedPreRenderedElement).[`children`](../Interface.ShapedPreRenderedElement.md#children)

***

### code

> **code**: `string`

Defined in: [model.ts:315](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L315)

#### Inherited from

[`ShapedPreRenderedElement`](../Interface.ShapedPreRenderedElement).[`code`](../Interface.ShapedPreRenderedElement.md#code)

***

### cssClasses?

> `optional` **cssClasses**: `string`[]

Defined in: [model.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L28)

#### Inherited from

[`ShapedPreRenderedElement`](../Interface.ShapedPreRenderedElement).[`cssClasses`](../Interface.ShapedPreRenderedElement.md#cssclasses)

***

### id

> **id**: `string`

Defined in: [model.ts:26](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L26)

#### Inherited from

[`ShapedPreRenderedElement`](../Interface.ShapedPreRenderedElement).[`id`](../Interface.ShapedPreRenderedElement.md#id)

***

### namespace

> **namespace**: `string`

Defined in: [model.ts:339](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L339)

The namespace to be assigned to the elements inside of the `foreignObject`.

***

### position?

> `optional` **position**: [`Point`](../Interface.Point)

Defined in: [model.ts:322](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L322)

#### Inherited from

[`ShapedPreRenderedElement`](../Interface.ShapedPreRenderedElement).[`position`](../Interface.ShapedPreRenderedElement.md#position)

***

### size?

> `optional` **size**: [`Dimension`](../Interface.Dimension)

Defined in: [model.ts:323](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L323)

#### Inherited from

[`ShapedPreRenderedElement`](../Interface.ShapedPreRenderedElement).[`size`](../Interface.ShapedPreRenderedElement.md#size)

***

### type

> **type**: `string`

Defined in: [model.ts:25](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L25)

#### Inherited from

[`ShapedPreRenderedElement`](../Interface.ShapedPreRenderedElement).[`type`](../Interface.ShapedPreRenderedElement.md#type)
