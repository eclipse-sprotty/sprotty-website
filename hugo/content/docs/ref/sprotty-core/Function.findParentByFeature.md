
[sprotty](../globals) / findParentByFeature

# Function: findParentByFeature()

> **findParentByFeature**\<`T`\>(`element`, `predicate`): `undefined` \| [`SModelElementImpl`](../Class.SModelElementImpl) & `T`

Defined in: [packages/sprotty/src/base/model/smodel-utils.ts:52](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel-utils.ts#L52)

Find a parent element that implements the feature identified with the given predicate.

## Type Parameters

### T

`T`

## Parameters

### element

[`SModelElementImpl`](../Class.SModelElementImpl)

### predicate

(`t`) => `t is SModelElementImpl & T`

## Returns

`undefined` \| [`SModelElementImpl`](../Class.SModelElementImpl) & `T`
