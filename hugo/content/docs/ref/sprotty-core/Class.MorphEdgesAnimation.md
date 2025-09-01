
### model

> `protected` **model**: [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/features/move/move.ts:334](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L334)

***

### reverse

> `protected` **reverse**: `boolean` = `false`

Defined in: [packages/sprotty/src/features/move/move.ts:337](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L337)

***

### stopped

> `protected` **stopped**: `boolean` = `false`

Defined in: [packages/sprotty/src/base/animations/animation.ts:30](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/animations/animation.ts#L30)

#### Inherited from

[`Animation`](../Class.Animation).[`stopped`](../Class.Animation.md#stopped)

## Methods

### growToSize()

> `protected` **growToSize**(`route`, `targetSize`): `Point`[]

Defined in: [packages/sprotty/src/features/move/move.ts:398](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L398)

#### Parameters

##### route

[`RoutedPoint`](../Interface.RoutedPoint)[]

##### targetSize

`number`

#### Returns

`Point`[]

***

### midPoint()

> `protected` **midPoint**(`edgeMemento`): `Point`

Defined in: [packages/sprotty/src/features/move/move.ts:353](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L353)

#### Parameters

##### edgeMemento

[`EdgeMemento`](../Interface.EdgeMemento)

#### Returns

`Point`

***

### start()

> **start**(): `Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

Defined in: [packages/sprotty/src/features/move/move.ts:363](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L363)

#### Returns

`Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

#### Overrides

[`Animation`](../Class.Animation).[`start`](../Class.Animation.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [packages/sprotty/src/base/animations/animation.ts:74](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/animations/animation.ts#L74)

Stop the animation at the current state.
The promise returned by start() will be resolved with the current state after the next tweening step.

#### Returns

`void`

#### Inherited from

[`Animation`](../Class.Animation).[`stop`](../Class.Animation.md#stop)

***

### tween()

> **tween**(`t`): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/features/move/move.ts:370](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/move.ts#L370)

This method called by the animation at each rendering pass until
the duration is reached. Implement it to interpolate the state.

#### Parameters

##### t

`number`

varies between 0 (start of animation) and 1 (end of animation)

#### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)

#### Overrides

[`Animation`](../Class.Animation).[`tween`](../Class.Animation.md#tween)
