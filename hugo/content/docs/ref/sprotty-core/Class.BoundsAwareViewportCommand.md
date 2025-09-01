
### viewerOptions

> `protected` **viewerOptions**: [`ViewerOptions`](../Interface.ViewerOptions)

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:36](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L36)

## Methods

### boundsInViewport()

> `protected` **boundsInViewport**(`element`, `bounds`, `viewport`): `Bounds`

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:85](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L85)

#### Parameters

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

##### bounds

`Bounds`

##### viewport

[`SModelRootImpl`](../Class.SModelRootImpl) & `Viewport`

#### Returns

`Bounds`

***

### equal()

> `protected` **equal**(`vp1`, `vp2`): `boolean`

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:127](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L127)

#### Parameters

##### vp1

`Viewport`

##### vp2

`Viewport`

#### Returns

`boolean`

***

### execute()

> **execute**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:96](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L96)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`Command`](../Class.Command).[`execute`](../Class.Command.md#execute)

***

### getElementIds()

> `abstract` `protected` **getElementIds**(): `string`[]

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:94](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L94)

#### Returns

`string`[]

***

### getNewViewport()

> `abstract` `protected` **getNewViewport**(`bounds`, `model`): `undefined` \| `Viewport`

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:92](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L92)

#### Parameters

##### bounds

`Bounds`

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Returns

`undefined` \| `Viewport`

***

### initialize()

> `protected` **initialize**(`model`): `void`

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:44](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L44)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Returns

`void`

***

### redo()

> **redo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:114](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L114)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`Command`](../Class.Command).[`redo`](../Class.Command.md#redo)

***

### undo()

> **undo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:101](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L101)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Overrides

[`Command`](../Class.Command).[`undo`](../Class.Command.md#undo)
