
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

[`VBoxLayoutOptions`](../Interface.VBoxLayoutOptions)

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

[`VBoxLayoutOptions`](../Interface.VBoxLayoutOptions)

##### layouter

[`StatefulLayouter`](../Class.StatefulLayouter)

#### Returns

`Bounds`

#### Inherited from

`AbstractLayout.getFixedContainerBounds`

***

### getLayoutOptions()

> `protected` **getLayoutOptions**(`element`): [`VBoxLayoutOptions`](../Interface.VBoxLayoutOptions)

Defined in: [packages/sprotty/src/features/bounds/abstract-layout.ts:148](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/abstract-layout.ts#L148)

#### Parameters

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

[`VBoxLayoutOptions`](../Interface.VBoxLayoutOptions)

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

> `protected` **layoutChild**(`child`, `boundsData`, `bounds`, `childOptions`, `containerOptions`, `currentOffset`, `maxWidth`, `maxHeight`): `object`

Defined in: [packages/sprotty/src/features/bounds/vbox-layout.ts:67](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/vbox-layout.ts#L67)

#### Parameters

##### child

[`SChildElementImpl`](../Class.SChildElementImpl)

##### boundsData

[`BoundsData`](../Class.BoundsData)

##### bounds

`Bounds`

##### childOptions

[`VBoxLayoutOptions`](../Interface.VBoxLayoutOptions)

##### containerOptions

[`VBoxLayoutOptions`](../Interface.VBoxLayoutOptions)

##### currentOffset

`Point`

##### maxWidth

`number`

##### maxHeight

`number`

#### Returns

`object`

##### x

> **x**: `number` = `currentOffset.x`

##### y

> **y**: `number`

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

[`VBoxLayoutOptions`](../Interface.VBoxLayoutOptions)

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

> `protected` **spread**(`a`, `b`): [`VBoxLayoutOptions`](../Interface.VBoxLayoutOptions)

Defined in: [packages/sprotty/src/features/bounds/vbox-layout.ts:104](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/bounds/vbox-layout.ts#L104)

#### Parameters

##### a

[`VBoxLayoutOptions`](../Interface.VBoxLayoutOptions)

##### b

[`VBoxLayoutOptions`](../Interface.VBoxLayoutOptions)

#### Returns

[`VBoxLayoutOptions`](../Interface.VBoxLayoutOptions)

#### Overrides

`AbstractLayout.spread`
