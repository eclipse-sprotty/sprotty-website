
### icon?

> `readonly` `optional` **icon**: `string`

Defined in: [packages/sprotty/src/base/actions/action.ts:25](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action.ts#L25)

#### Inherited from

[`MenuItem`]().[`icon`](#icon)

***

### id

> `readonly` **id**: `string`

Defined in: [packages/sprotty/src/features/context-menu/context-menu-service.ts:20](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/context-menu/context-menu-service.ts#L20)

Technical id of the menu item.

***

### isEnabled()?

> `readonly` `optional` **isEnabled**: () => `boolean`

Defined in: [packages/sprotty/src/features/context-menu/context-menu-service.ts:32](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/context-menu/context-menu-service.ts#L32)

Function determining whether the element is enabled.

#### Returns

`boolean`

***

### isToggled()?

> `readonly` `optional` **isToggled**: () => `boolean`

Defined in: [packages/sprotty/src/features/context-menu/context-menu-service.ts:36](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/context-menu/context-menu-service.ts#L36)

Function determining whether the element is toggled on or off.

#### Returns

`boolean`

***

### isVisible()?

> `readonly` `optional` **isVisible**: () => `boolean`

Defined in: [packages/sprotty/src/features/context-menu/context-menu-service.ts:34](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/context-menu/context-menu-service.ts#L34)

Function determining whether the element is visible.

#### Returns

`boolean`

***

### label

> `readonly` **label**: `string`

Defined in: [packages/sprotty/src/base/actions/action.ts:25](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/actions/action.ts#L25)

#### Inherited from

[`MenuItem`]().[`label`](#label)

***

### parentId?

> `readonly` `optional` **parentId**: `string`

Defined in: [packages/sprotty/src/features/context-menu/context-menu-service.ts:30](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/context-menu/context-menu-service.ts#L30)

The optional parent id can be used to add this element as a child of another element provided by anohter menu provider.
The `parentId` must be fully qualified in the form of `a.b.c`, whereas `a`, `b` and `c` are referring to the IDs of other elements.
Note that this attribute will only be considered for root items of a provider and not for children of provided items.

***

### sortString?

> `readonly` `optional` **sortString**: `string`

Defined in: [packages/sprotty/src/features/context-menu/context-menu-service.ts:22](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/features/context-menu/context-menu-service.ts#L22)

String indicating the order.
