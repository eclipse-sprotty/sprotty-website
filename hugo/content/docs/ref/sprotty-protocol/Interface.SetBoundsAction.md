
[sprotty-protocol](../globals) / SetBoundsAction

# Interface: SetBoundsAction

Defined in: [actions.ts:248](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L248)

Sent from the model source (e.g. a DiagramServer) to the client to update the bounds of some
(or all) model elements.

## Extends

- [`Action`](../Interface.Action)

## Properties

### bounds

> **bounds**: [`ElementAndBounds`](../Interface.ElementAndBounds)[]

Defined in: [actions.ts:250](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L250)

***

### kind

> **kind**: `"setBounds"`

Defined in: [actions.ts:249](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L249)

#### Overrides

[`Action`](../Interface.Action).[`kind`](../Interface.Action.md#kind)
