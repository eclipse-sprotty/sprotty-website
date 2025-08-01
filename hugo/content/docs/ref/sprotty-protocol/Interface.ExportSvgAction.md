
[sprotty-protocol](../globals) / ExportSvgAction

# Interface: ExportSvgAction

Defined in: [actions.ts:748](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L748)

Response to a `RequestExportSvgAction` containing the current diagram's SVG code.

## Extends

- [`ResponseAction`](../Interface.ResponseAction)

## Properties

### kind

> **kind**: `"exportSvg"`

Defined in: [actions.ts:749](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L749)

#### Overrides

[`ResponseAction`](../Interface.ResponseAction).[`kind`](../Interface.ResponseAction.md#kind)

***

### options?

> `optional` **options**: [`ExportSvgOptions`](../Interface.ExportSvgOptions)

Defined in: [actions.ts:752](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L752)

***

### responseId

> **responseId**: `string`

Defined in: [actions.ts:751](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L751)

#### Overrides

[`ResponseAction`](../Interface.ResponseAction).[`responseId`](../Interface.ResponseAction.md#responseid)

***

### svg

> **svg**: `string`

Defined in: [actions.ts:750](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L750)
