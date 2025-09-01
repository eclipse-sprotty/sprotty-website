
### stop()

> **stop**(): `void`

Defined in: [packages/sprotty/src/base/animations/animation.ts:74](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/animations/animation.ts#L74)

Stop the animation at the current state.
The promise returned by start() will be resolved with the current state after the next tweening step.

#### Returns

`void`

***

### tween()

> `abstract` **tween**(`t`, `context`): [`SModelRootImpl`](../Class.SModelRootImpl)

Defined in: [packages/sprotty/src/base/animations/animation.ts:85](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/animations/animation.ts#L85)

This method called by the animation at each rendering pass until
the duration is reached. Implement it to interpolate the state.

#### Parameters

##### t

`number`

varies between 0 (start of animation) and 1 (end of animation)

##### context

[`CommandExecutionContext`](../Interface.CommandExecutionContext)

#### Returns

[`SModelRootImpl`](../Class.SModelRootImpl)
