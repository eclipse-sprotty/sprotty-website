
[sprotty](../globals) / IEditLabelValidator

# Interface: IEditLabelValidator

Defined in: [packages/sprotty/src/features/edit/edit-label.ts:93](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edit/edit-label.ts#L93)

## Methods

### validate()

> **validate**(`value`, `label`): `Promise`\<[`EditLabelValidationResult`](../Interface.EditLabelValidationResult)\>

Defined in: [packages/sprotty/src/features/edit/edit-label.ts:94](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/edit/edit-label.ts#L94)

#### Parameters

##### value

`string`

##### label

[`EditableLabel`](../Interface.EditableLabel) & [`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`Promise`\<[`EditLabelValidationResult`](../Interface.EditLabelValidationResult)\>
