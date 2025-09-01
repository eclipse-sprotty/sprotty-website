
[sprotty](../globals) / IDiagramLocker

# Interface: IDiagramLocker

Defined in: [packages/sprotty/src/base/actions/diagram-locker.ts:27](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/diagram-locker.ts#L27)

Allows to lock the diagram by preventing certain actions from being
dispatched.

This could for example be used to prevent the diagram from being modified
when the underlying model is broken or the server is unavailable.

## Methods

### isAllowed()

> **isAllowed**(`action`): `boolean`

Defined in: [packages/sprotty/src/base/actions/diagram-locker.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/diagram-locker.ts#L28)

#### Parameters

##### action

`Action`

#### Returns

`boolean`
