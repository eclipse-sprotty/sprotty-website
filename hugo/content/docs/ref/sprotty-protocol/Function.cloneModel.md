
[sprotty-protocol](../globals) / cloneModel

# Function: cloneModel()

> **cloneModel**\<`T`\>(`model`): `T`

Defined in: [utils/model-utils.ts:24](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/utils/model-utils.ts#L24)

Clone a given model. This function requires that the model is serializable, so it's
free of cycles and functions.

## Type Parameters

### T

`T` *extends* [`SModelElement`](../Interface.SModelElement)

## Parameters

### model

`T`

## Returns

`T`
