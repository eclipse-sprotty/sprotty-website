
[sprotty-protocol](../globals) / EdgePlacement

# Interface: EdgePlacement

Defined in: [model.ts:252](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L252)

Each label attached to an edge can be placed on the edge in different ways.
With this interface the placement of such a single label is defined.

## Properties

### moveMode?

> `optional` **moveMode**: `"edge"` \| `"free"` \| `"none"`

Defined in: [model.ts:278](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L278)

where should the label be moved when move feature is enabled.
'edge' means the label is moved along the edge, 'free' means the label is moved freely, 'none' means the label can not be moved.
Default is 'edge'.

***

### offset

> **offset**: `number`

Defined in: [model.ts:271](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L271)

space between label and edge/connected nodes

***

### position

> **position**: `number`

Defined in: [model.ts:266](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L266)

between 0 (source anchor) and 1 (target anchor)

***

### rotate

> **rotate**: `boolean`

Defined in: [model.ts:256](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L256)

true, if the label should be rotated to touch the edge tangentially

***

### side

> **side**: [`EdgeSide`](../TypeAlias.EdgeSide)

Defined in: [model.ts:261](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L261)

where is the label relative to the line's direction
