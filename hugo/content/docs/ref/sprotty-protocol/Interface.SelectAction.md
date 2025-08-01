
[sprotty-protocol](../globals) / SelectAction

# Interface: SelectAction

Defined in: [actions.ts:357](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L357)

Triggered when the user changes the selection, e.g. by clicking on a selectable element. The resulting
SelectCommand changes the `selected` state accordingly, so the elements can be rendered differently.
This action is also forwarded to the diagram server, if present, so it may react on the selection change.
Furthermore, the server can send such an action to the client in order to change the selection programmatically.

## Properties

### deselectedElementsIDs

> **deselectedElementsIDs**: `string`[]

Defined in: [actions.ts:360](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L360)

***

### kind

> **kind**: `"elementSelected"`

Defined in: [actions.ts:358](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L358)

***

### selectedElementsIDs

> **selectedElementsIDs**: `string`[]

Defined in: [actions.ts:359](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/actions.ts#L359)
