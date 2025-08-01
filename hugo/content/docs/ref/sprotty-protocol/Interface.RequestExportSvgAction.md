
[sprotty-protocol](../globals) / RequestExportSvgAction

# Interface: RequestExportSvgAction

Defined in: [actions.ts:725](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L725)

Request to extract the currently displayed diagram as an SVG.

## Extends

- [`RequestAction`](../Interface.RequestAction)\<[`ExportSvgAction`](../Interface.ExportSvgAction)\>

## Properties

### \_?

> `readonly` `optional` **\_**: [`ExportSvgAction`](../Interface.ExportSvgAction)

Defined in: [actions.ts:57](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L57)

Used to ensure correct typing. Clients must not use this property

#### Inherited from

[`RequestAction`](../Interface.RequestAction).[`_`](../Interface.RequestAction.md#_)

***

### kind

> **kind**: `"requestExportSvg"`

Defined in: [actions.ts:726](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L726)

#### Overrides

[`RequestAction`](../Interface.RequestAction).[`kind`](../Interface.RequestAction.md#kind)

***

### options?

> `optional` **options**: [`ExportSvgOptions`](../Interface.ExportSvgOptions)

Defined in: [actions.ts:727](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L727)

***

### requestId

> **requestId**: `string`

Defined in: [actions.ts:52](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L52)

#### Inherited from

[`RequestAction`](../Interface.RequestAction).[`requestId`](../Interface.RequestAction.md#requestid)
