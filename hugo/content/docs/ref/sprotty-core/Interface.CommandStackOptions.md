
### undoHistoryLimit

> **undoHistoryLimit**: `number`

Defined in: [packages/sprotty/src/base/commands/command-stack-options.ts:37](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/commands/command-stack-options.ts#L37)

The maximum number of commands that can be undone. Once the undo stack
reaches this number, any additional command that is pushed will remove
one from the bottom of the stack.

If negative, there is no limit, which results in a memory leak.
