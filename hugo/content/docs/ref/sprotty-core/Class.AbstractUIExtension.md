
### options

> `protected` **options**: [`ViewerOptions`](../Interface.ViewerOptions)

Defined in: [packages/sprotty/src/base/ui-extensions/ui-extension.ts:44](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/ui-extensions/ui-extension.ts#L44)

## Methods

### containerClass()

> `abstract` **containerClass**(): `string`

Defined in: [packages/sprotty/src/base/ui-extensions/ui-extension.ts:51](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/ui-extensions/ui-extension.ts#L51)

#### Returns

`string`

***

### getOrCreateContainer()

> `protected` **getOrCreateContainer**(`baseDivId`): `HTMLElement`

Defined in: [packages/sprotty/src/base/ui-extensions/ui-extension.ts:89](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/ui-extensions/ui-extension.ts#L89)

#### Parameters

##### baseDivId

`string`

#### Returns

`HTMLElement`

***

### hide()

> **hide**(): `void`

Defined in: [packages/sprotty/src/base/ui-extensions/ui-extension.ts:62](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/ui-extensions/ui-extension.ts#L62)

#### Returns

`void`

#### Implementation of

[`IUIExtension`](../Interface.IUIExtension).[`hide`](../Interface.IUIExtension.md#hide)

***

### id()

> `abstract` **id**(): `string`

Defined in: [packages/sprotty/src/base/ui-extensions/ui-extension.ts:50](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/ui-extensions/ui-extension.ts#L50)

#### Returns

`string`

#### Implementation of

[`IUIExtension`](../Interface.IUIExtension).[`id`](../Interface.IUIExtension.md#id)

***

### initialize()

> `protected` **initialize**(): `boolean`

Defined in: [packages/sprotty/src/base/ui-extensions/ui-extension.ts:75](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/ui-extensions/ui-extension.ts#L75)

#### Returns

`boolean`

***

### initializeContents()

> `abstract` `protected` **initializeContents**(`containerElement`): `void`

Defined in: [packages/sprotty/src/base/ui-extensions/ui-extension.ts:127](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/ui-extensions/ui-extension.ts#L127)

Initializes the contents of this UI extension.

Subclasses must implement this method to initialize the UI elements of this UI extension inside the specified `containerElement`.

#### Parameters

##### containerElement

`HTMLElement`

#### Returns

`void`

***

### onBeforeShow()

> `protected` **onBeforeShow**(`containerElement`, `root`, ...`contextElementIds`): `void`

Defined in: [packages/sprotty/src/base/ui-extensions/ui-extension.ts:118](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/ui-extensions/ui-extension.ts#L118)

Updates the `containerElement` under the given `context` before it becomes visible.

Subclasses may override this method to, for instance, modifying the position of the
`containerElement`, add or remove elements, etc. depending on the specified `root`
or `contextElementIds`.

#### Parameters

##### containerElement

`HTMLElement`

##### root

`Readonly`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

##### contextElementIds

...`string`[]

#### Returns

`void`

***

### restoreFocus()

> `protected` **restoreFocus**(): `void`

Defined in: [packages/sprotty/src/base/ui-extensions/ui-extension.ts:68](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/ui-extensions/ui-extension.ts#L68)

#### Returns

`void`

***

### setContainerVisible()

> `protected` **setContainerVisible**(`visible`): `void`

Defined in: [packages/sprotty/src/base/ui-extensions/ui-extension.ts:99](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/ui-extensions/ui-extension.ts#L99)

#### Parameters

##### visible

`boolean`

#### Returns

`void`

***

### show()

> **show**(`root`, ...`contextElementIds`): `void`

Defined in: [packages/sprotty/src/base/ui-extensions/ui-extension.ts:53](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/ui-extensions/ui-extension.ts#L53)

#### Parameters

##### root

`Readonly`\<[`SModelRootImpl`](../Class.SModelRootImpl)\>

##### contextElementIds

...`string`[]

#### Returns

`void`

#### Implementation of

[`IUIExtension`](../Interface.IUIExtension).[`show`](../Interface.IUIExtension.md#show)
