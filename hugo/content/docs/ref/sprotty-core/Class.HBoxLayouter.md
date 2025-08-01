
### getDx()

> `protected` **getDx**(`hAlign`, `bounds`, `maxWidth`): `number`

Defined in: [packages/sprotty/src/features/bounds/abstract-layout.ts:118](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/abstract-layout.ts#L118)

#### Parameters

##### hAlign

`HAlignment`

##### bounds

`Bounds`

##### maxWidth

`number`

#### Returns

`number`

#### Inherited from

`AbstractLayout.getDx`

***

### getDy()

> `protected` **getDy**(`vAlign`, `bounds`, `maxHeight`): `number`

Defined in: [packages/sprotty/src/features/bounds/abstract-layout.ts:129](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/abstract-layout.ts#L129)

#### Parameters

##### vAlign

`VAlignment`

##### bounds

`Bounds`

##### maxHeight

`number`

#### Returns

`number`

#### Inherited from

`AbstractLayout.getDy`

***

### getFinalContainerBounds()

> `protected` **getFinalContainerBounds**(`container`, `lastOffset`, `options`, `maxWidth`, `maxHeight`): `Bounds`

Defined in: [packages/sprotty/src/features/bounds/abstract-layout.ts:54](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/abstract-layout.ts#L54)

#### Parameters

##### container

[`SParentElementImpl`](../Class.SParentElementImpl) & [`InternalLayoutContainer`](../Interface.InternalLayoutContainer)

##### lastOffset

`Point`

##### options

[`HBoxLayoutOptions`](../Interface.HBoxLayoutOptions)

##### maxWidth

`number`

##### maxHeight

`number`

#### Returns

`Bounds`

#### Inherited from

`AbstractLayout.getFinalContainerBounds`

***

### getFixedContainerBounds()

> `protected` **getFixedContainerBounds**(`container`, `layoutOptions`, `layouter`): `Bounds`

Defined in: [packages/sprotty/src/features/bounds/abstract-layout.ts:67](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/abstract-layout.ts#L67)

#### Parameters

##### container

[`SModelElementImpl`](../Class.SModelElementImpl)

##### layoutOptions

[`HBoxLayoutOptions`](../Interface.HBoxLayoutOptions)

##### layouter

[`StatefulLayouter`](../Class.StatefulLayouter)

#### Returns

`Bounds`

#### Inherited from

`AbstractLayout.getFixedContainerBounds`

***

### getLayoutOptions()

> `protected` **getLayoutOptions**(`element`): [`HBoxLayoutOptions`](../Interface.HBoxLayoutOptions)

Defined in: [packages/sprotty/src/features/bounds/abstract-layout.ts:148](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/abstract-layout.ts#L148)

#### Parameters

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

[`HBoxLayoutOptions`](../Interface.HBoxLayoutOptions)

#### Inherited from

`AbstractLayout.getLayoutOptions`

***

### layout()

> **layout**(`container`, `layouter`): `void`

Defined in: [packages/sprotty/src/features/bounds/abstract-layout.ts:29](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/abstract-layout.ts#L29)

#### Parameters

##### container

[`SParentElementImpl`](../Class.SParentElementImpl) & [`InternalLayoutContainer`](../Interface.InternalLayoutContainer)

##### layouter

[`StatefulLayouter`](../Class.StatefulLayouter)

#### Returns

`void`

#### Inherited from

`AbstractLayout.layout`

***

### layoutChild()

> `protected` **layoutChild**(`child`, `boundsData`, `bounds`, `childOptions`, `containerOptions`, `currentOffset`, `maxWidth`, `maxHeight`): `Point`

Defined in: [packages/sprotty/src/features/bounds/hbox-layout.ts:67](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/hbox-layout.ts#L67)

#### Parameters

##### child

[`SChildElementImpl`](../Class.SChildElementImpl)

##### boundsData

[`BoundsData`](../Class.BoundsData)

##### bounds

`Bounds`

##### childOptions

[`HBoxLayoutOptions`](../Interface.HBoxLayoutOptions)

##### containerOptions

[`HBoxLayoutOptions`](../Interface.HBoxLayoutOptions)

##### currentOffset

`Point`

##### maxWidth

`number`

##### maxHeight

`number`

#### Returns

`Point`

#### Overrides

`AbstractLayout.layoutChild`

***

### layoutChildren()

> `protected` **layoutChildren**(`container`, `layouter`, `containerOptions`, `maxWidth`, `maxHeight`): `Point`

Defined in: [packages/sprotty/src/features/bounds/abstract-layout.ts:93](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/abstract-layout.ts#L93)

#### Parameters

##### container

[`SParentElementImpl`](../Class.SParentElementImpl) & [`InternalLayoutContainer`](../Interface.InternalLayoutContainer)

##### layouter

[`StatefulLayouter`](../Class.StatefulLayouter)

##### containerOptions

[`HBoxLayoutOptions`](../Interface.HBoxLayoutOptions)

##### maxWidth

`number`

##### maxHeight

`number`

#### Returns

`Point`

#### Inherited from

`AbstractLayout.layoutChildren`

***

### spread()

> `protected` **spread**(`a`, `b`): [`HBoxLayoutOptions`](../Interface.HBoxLayoutOptions)

Defined in: [packages/sprotty/src/features/bounds/hbox-layout.ts:104](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/hbox-layout.ts#L104)

#### Parameters

##### a

[`HBoxLayoutOptions`](../Interface.HBoxLayoutOptions)

##### b

[`HBoxLayoutOptions`](../Interface.HBoxLayoutOptions)

#### Returns

[`HBoxLayoutOptions`](../Interface.HBoxLayoutOptions)

#### Overrides

`AbstractLayout.spread`
