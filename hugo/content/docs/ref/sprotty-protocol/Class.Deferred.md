
[sprotty-protocol](../globals) / Deferred

# Class: Deferred\<T\>

Defined in: [utils/async.ts:21](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/utils/async.ts#L21)

Simple implementation of the deferred pattern.
An object that exposes a promise and functions to resolve and reject it.

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new Deferred**\<`T`\>(): `Deferred`\<`T`\>

Defined in: [utils/async.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/utils/async.ts#L28)

#### Returns

`Deferred`\<`T`\>

## Properties

### promise

> `readonly` **promise**: `Promise`\<`T`\>

Defined in: [utils/async.ts:24](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/utils/async.ts#L24)

***

### reject()

> **reject**: (`reason?`) => `void`

Defined in: [utils/async.ts:23](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/utils/async.ts#L23)

#### Parameters

##### reason?

`any`

#### Returns

`void`

***

### resolve()

> **resolve**: (`value?`) => `void`

Defined in: [utils/async.ts:22](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/utils/async.ts#L22)

#### Parameters

##### value?

`T` | `PromiseLike`\<`T`\>

#### Returns

`void`
