
[sprotty-protocol](../globals) / Projectable

# Interface: Projectable

Defined in: [model.ts:233](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L233)

Model elements implementing this interface can be displayed on a projection bar.
_Note:_ If set, the projectedBounds property will be prefered over the model element bounds.
Otherwise model elements also have to be `BoundsAware` so their projections can be shown.

## Properties

### projectedBounds?

> `optional` **projectedBounds**: [`Bounds`](../Interface.Bounds)

Defined in: [model.ts:235](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L235)

***

### projectionCssClasses

> **projectionCssClasses**: `string`[]

Defined in: [model.ts:234](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/model.ts#L234)
