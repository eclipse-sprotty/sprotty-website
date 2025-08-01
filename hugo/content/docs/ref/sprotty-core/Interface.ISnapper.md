
[sprotty](../globals) / ISnapper

# Interface: ISnapper

Defined in: [packages/sprotty/src/features/move/snap.ts:25](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/snap.ts#L25)

A snapper helps to align nodes and routing handles.

## Methods

### snap()

> **snap**(`position`, `element`): `Point`

Defined in: [packages/sprotty/src/features/move/snap.ts:29](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/move/snap.ts#L29)

#### Parameters

##### position

`Point`

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`Point`

#### Retruns

the closest snapped position that for the `element` located at `position`
