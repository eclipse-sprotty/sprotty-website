
### oldViewport

> **oldViewport**: `Viewport`

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:37](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L37)

#### Inherited from

[`BoundsAwareViewportCommand`](../Class.BoundsAwareViewportCommand).[`oldViewport`](../Class.BoundsAwareViewportCommand.md#oldviewport)

***

### viewerOptions

> `protected` **viewerOptions**: [`ViewerOptions`](../Interface.ViewerOptions)

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:36](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L36)

#### Inherited from

[`BoundsAwareViewportCommand`](../Class.BoundsAwareViewportCommand).[`viewerOptions`](../Class.BoundsAwareViewportCommand.md#vieweroptions)

***

### KIND

> `readonly` `static` **KIND**: `"center"` = `CenterAction.KIND`

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:133](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L133)

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

#### Inherited from

[`BoundsAwareViewportCommand`](../Class.BoundsAwareViewportCommand).[`boundsInViewport`](../Class.BoundsAwareViewportCommand.md#boundsinviewport)

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

#### Inherited from

[`BoundsAwareViewportCommand`](../Class.BoundsAwareViewportCommand).[`equal`](../Class.BoundsAwareViewportCommand.md#equal)

***

### execute()

> **execute**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:96](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L96)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Inherited from

[`BoundsAwareViewportCommand`](../Class.BoundsAwareViewportCommand).[`execute`](../Class.BoundsAwareViewportCommand.md#execute)

***

### getElementIds()

> **getElementIds**(): `string`[]

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:139](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L139)

#### Returns

`string`[]

#### Overrides

[`BoundsAwareViewportCommand`](../Class.BoundsAwareViewportCommand).[`getElementIds`](../Class.BoundsAwareViewportCommand.md#getelementids)

***

### getNewViewport()

> **getNewViewport**(`bounds`, `model`): `undefined` \| `Viewport`

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:143](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L143)

#### Parameters

##### bounds

`Bounds`

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Returns

`undefined` \| `Viewport`

#### Overrides

[`BoundsAwareViewportCommand`](../Class.BoundsAwareViewportCommand).[`getNewViewport`](../Class.BoundsAwareViewportCommand.md#getnewviewport)

***

### initialize()

> `protected` **initialize**(`model`): `void`

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:44](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L44)

#### Parameters

##### model

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Returns

`void`

#### Inherited from

[`BoundsAwareViewportCommand`](../Class.BoundsAwareViewportCommand).[`initialize`](../Class.BoundsAwareViewportCommand.md#initialize)

***

### redo()

> **redo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:114](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L114)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Inherited from

[`BoundsAwareViewportCommand`](../Class.BoundsAwareViewportCommand).[`redo`](../Class.BoundsAwareViewportCommand.md#redo)

***

### undo()

> **undo**(`context`): [`CommandReturn`](../TypeAlias.CommandReturn)

Defined in: [packages/sprotty/src/features/viewport/center-fit.ts:101](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/viewport/center-fit.ts#L101)

#### Parameters

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`CommandReturn`](../TypeAlias.CommandReturn)

#### Inherited from

[`BoundsAwareViewportCommand`](../Class.BoundsAwareViewportCommand).[`undo`](../Class.BoundsAwareViewportCommand.md#undo)
