
[sprotty-protocol](../globals) / UpdateModelAction

# Interface: UpdateModelAction

Defined in: [actions.ts:165](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L165)

Sent from the model source to the client in order to update the model. If no model is present yet,
this behaves the same as a SetModelAction. The transition from the old model to the new one can be animated.

## Properties

### animate?

> `optional` **animate**: `boolean`

Defined in: [actions.ts:169](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L169)

***

### cause?

> `optional` **cause**: [`Action`](../Interface.Action)

Defined in: [actions.ts:170](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L170)

***

### kind

> **kind**: `"updateModel"`

Defined in: [actions.ts:166](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L166)

***

### matches?

> `optional` **matches**: [`Match`](../Interface.Match)[]

Defined in: [actions.ts:168](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L168)

***

### newRoot?

> `optional` **newRoot**: [`SModelRoot`](../Interface.SModelRoot)

Defined in: [actions.ts:167](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L167)
