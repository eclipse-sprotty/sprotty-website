
### postprocessors

> `protected` **postprocessors**: [`ISvgExportPostProcessor`](../Interface.ISvgExportPostProcessor)[] = `[]`

Defined in: [packages/sprotty/src/features/export/svg-exporter.ts:56](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/export/svg-exporter.ts#L56)

## Methods

### copyStyles()

> `protected` **copyStyles**(`source`, `target`, `skippedProperties`): `void`

Defined in: [packages/sprotty/src/features/export/svg-exporter.ts:111](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/export/svg-exporter.ts#L111)

#### Parameters

##### source

`Element`

##### target

`Element`

##### skippedProperties

`string`[]

#### Returns

`void`

***

### createSvg()

> `protected` **createSvg**(`svgElementOrig`, `root`, `options?`, `cause?`): `string`

Defined in: [packages/sprotty/src/features/export/svg-exporter.ts:77](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/export/svg-exporter.ts#L77)

#### Parameters

##### svgElementOrig

`SVGSVGElement`

##### root

[`SModelRootImpl`](../Class.SModelRootImpl)

##### options?

`ExportSvgOptions`

##### cause?

`Action`

#### Returns

`string`

***

### export()

> **export**(`root`, `request?`): `void`

Defined in: [packages/sprotty/src/features/export/svg-exporter.ts:58](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/export/svg-exporter.ts#L58)

#### Parameters

##### root

[`SModelRootImpl`](../Class.SModelRootImpl)

##### request?

`RequestExportSvgAction`

#### Returns

`void`

***

### getBounds()

> `protected` **getBounds**(`root`, `document`): `Bounds`

Defined in: [packages/sprotty/src/features/export/svg-exporter.ts:135](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/export/svg-exporter.ts#L135)

#### Parameters

##### root

[`SModelRootImpl`](../Class.SModelRootImpl)

##### document

`Document`

#### Returns

`Bounds`
