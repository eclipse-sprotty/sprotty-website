
[sprotty-protocol](../globals) / TypeOf

# Type Alias: TypeOf\<T\>

> **TypeOf**\<`T`\> = `T` *extends* `number` ? `"number"` : `T` *extends* `string` ? `"string"` : `T` *extends* `boolean` ? `"boolean"` : `T` *extends* `bigint` ? `"bigint"` : `T` *extends* `symbol` ? `"symbol"` : `T` *extends* `Function` ? `"function"` : `T` *extends* `object` ? `"object"` : `"undefined"`

Defined in: [utils/object.ts:21](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/utils/object.ts#L21)

## Type Parameters

### T

`T`
