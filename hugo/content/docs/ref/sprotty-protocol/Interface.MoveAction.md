
[sprotty-protocol](../globals) / MoveAction

# Interface: MoveAction

Defined in: [actions.ts:674](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L674)

Move an arbitrary set of elements to new positions.

## Extends

- [`Action`](../Interface.Action)

## Properties

### animate

> **animate**: `boolean`

Defined in: [actions.ts:677](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L677)

***

### finished

> **finished**: `boolean`

Defined in: [actions.ts:678](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L678)

***

### kind

> **kind**: `"move"`

Defined in: [actions.ts:675](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L675)

#### Overrides

[`Action`](../Interface.Action).[`kind`](../Interface.Action.md#kind)

***

### moves

> **moves**: [`ElementMove`](../Interface.ElementMove)[]

Defined in: [actions.ts:676](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L676)

***

### stoppable

> **stoppable**: `boolean`

Defined in: [actions.ts:679](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L679)
