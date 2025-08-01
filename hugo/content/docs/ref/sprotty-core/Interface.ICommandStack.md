
### undo()

> **undo**(): `Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

Defined in: [packages/sprotty/src/base/commands/command-stack.ts:61](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack.ts#L61)

Takes the topmost command from the undo stack, undoes its
changes and pushes it ot the redo stack. Returns a Promise for
the changed model.

#### Returns

`Promise`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>
