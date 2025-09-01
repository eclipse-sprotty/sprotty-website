
[sprotty-protocol](../globals) / ReconnectAction

# Interface: ReconnectAction

Defined in: [actions.ts:828](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L828)

Change the source or target node of a routable element (edge of a graph).

## Extends

- [`Action`](../Interface.Action)

## Properties

### kind

> **kind**: `"reconnect"`

Defined in: [actions.ts:829](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L829)

#### Overrides

[`Action`](../Interface.Action).[`kind`](../Interface.Action.md#kind)

***

### newSourceId?

> `optional` **newSourceId**: `string`

Defined in: [actions.ts:831](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L831)

***

### newTargetId?

> `optional` **newTargetId**: `string`

Defined in: [actions.ts:832](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L832)

***

### routableId

> **routableId**: `string`

Defined in: [actions.ts:830](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L830)
