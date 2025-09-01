
[sprotty-protocol](../globals) / hasOwnProperty

# Function: hasOwnProperty()

> **hasOwnProperty**\<`K`, `T`\>(`arg`, `key`, `type?`): `arg is Record<K, T>`

Defined in: [utils/object.ts:31](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/utils/object.ts#L31)

## Type Parameters

### K

`K` *extends* `PropertyKey`

### T

`T`

## Parameters

### arg

`unknown`

### key

`K` | `K`[]

### type?

[`TypeOf`](../TypeAlias.TypeOf)\<`T`\> | (`v`) => `v is T`

## Returns

`arg is Record<K, T>`
