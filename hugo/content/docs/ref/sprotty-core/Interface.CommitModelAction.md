
[sprotty](../globals) / CommitModelAction

# Interface: CommitModelAction

Defined in: [packages/sprotty/src/model-source/commit-model.ts:33](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/commit-model.ts#L33)

Commit the current SModel back to the model source.

The SModel (AKA internal model) contains a lot of dirty/transitional state, such
as intermediate move postions or handles. When a user interaction that spans multiple
commands finishes, it fires a CommitModelAction to write the final changes back to
the model source.

## Extends

- `Action`

## Properties

### kind

> **kind**: `"commitModel"`

Defined in: [packages/sprotty/src/model-source/commit-model.ts:34](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/commit-model.ts#L34)

#### Overrides

`Action.kind`
