
[sprotty](../globals) / configureModelElement

# Function: configureModelElement()

> **configureModelElement**(`context`, `type`, `modelConstr`, `viewConstr`, `features?`): `void`

Defined in: [packages/sprotty/src/base/views/view.tsx:128](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/view.tsx#L128)

Combines `registerModelElement` and `configureView`.

## Parameters

### context

#### bind

`Bind`

#### isBound

`IsBound`

### type

`string`

### modelConstr

() => [`SModelElementImpl`](../Class.SModelElementImpl)

### viewConstr

`ServiceIdentifier`\<[`IView`](../Interface.IView)\<\{ \}\>\>

### features?

[`CustomFeatures`](../Interface.CustomFeatures)

## Returns

`void`
