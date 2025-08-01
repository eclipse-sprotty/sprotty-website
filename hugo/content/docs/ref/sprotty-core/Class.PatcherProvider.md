
[sprotty](../globals) / PatcherProvider

# Class: PatcherProvider

Defined in: [packages/sprotty/src/base/views/viewer.tsx:100](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/viewer.tsx#L100)

## Constructors

### Constructor

> **new PatcherProvider**(): `PatcherProvider`

Defined in: [packages/sprotty/src/base/views/viewer.tsx:104](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/viewer.tsx#L104)

#### Returns

`PatcherProvider`

## Properties

### patcher

> `readonly` **patcher**: [`Patcher`](../TypeAlias.Patcher)

Defined in: [packages/sprotty/src/base/views/viewer.tsx:102](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/viewer.tsx#L102)

## Methods

### createModules()

> `protected` **createModules**(): `Partial`\<\{ `create`: `CreateHook`; `destroy`: `DestroyHook`; `post`: `PostHook`; `pre`: `PreHook`; `remove`: `RemoveHook`; `update`: `UpdateHook`; \}\>[]

Defined in: [packages/sprotty/src/base/views/viewer.tsx:108](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/views/viewer.tsx#L108)

#### Returns

`Partial`\<\{ `create`: `CreateHook`; `destroy`: `DestroyHook`; `post`: `PostHook`; `pre`: `PreHook`; `remove`: `RemoveHook`; `update`: `UpdateHook`; \}\>[]
