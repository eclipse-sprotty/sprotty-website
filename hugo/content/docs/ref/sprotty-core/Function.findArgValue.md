
[sprotty](../globals) / findArgValue

# Function: findArgValue()

> **findArgValue**\<`T`\>(`arg`, `key`): `undefined` \| `T`

Defined in: [packages/sprotty/src/base/views/view.tsx:47](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/view.tsx#L47)

Searches for the property specified in `key` in the specified `args`,
including its direct or indirect `IRenderingArgs#parentArgs`.

## Type Parameters

### T

`T`

## Parameters

### arg

the rendering arguments.

`undefined` | [`IViewArgs`](../Interface.IViewArgs)

### key

`string`

the key to search for.

## Returns

`undefined` \| `T`

the found value or `undefined.
