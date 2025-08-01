
### getAttachedElements()

> **getAttachedElements**(`element`): `FluentIterable`\<[`SModelElementImpl`](../Class.SModelElementImpl)\>

Defined in: [packages/sprotty/src/graph/sgraph.ts:221](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/sgraph.ts#L221)

#### Parameters

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`FluentIterable`\<[`SModelElementImpl`](../Class.SModelElementImpl)\>

#### Overrides

[`ModelIndexImpl`](../Class.ModelIndexImpl).[`getAttachedElements`](../Class.ModelIndexImpl.md#getattachedelements)

***

### getById()

> **getById**(`id`): `undefined` \| [`SModelElementImpl`](../Class.SModelElementImpl)

Defined in: [packages/sprotty/src/base/model/smodel.ts:237](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/base/model/smodel.ts#L237)

#### Parameters

##### id

`string`

#### Returns

`undefined` \| [`SModelElementImpl`](../Class.SModelElementImpl)

#### Inherited from

[`ModelIndexImpl`](../Class.ModelIndexImpl).[`getById`](../Class.ModelIndexImpl.md#getbyid)

***

### getIncomingEdges()

> **getIncomingEdges**(`element`): `FluentIterable`\<[`SEdgeImpl`](../Class.SEdgeImpl)\>

Defined in: [packages/sprotty/src/graph/sgraph.ts:252](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/sgraph.ts#L252)

#### Parameters

##### element

[`SConnectableElementImpl`](../Class.SConnectableElementImpl)

#### Returns

`FluentIterable`\<[`SEdgeImpl`](../Class.SEdgeImpl)\>

***

### getOutgoingEdges()

> **getOutgoingEdges**(`element`): `FluentIterable`\<[`SEdgeImpl`](../Class.SEdgeImpl)\>

Defined in: [packages/sprotty/src/graph/sgraph.ts:256](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/sgraph.ts#L256)

#### Parameters

##### element

[`SConnectableElementImpl`](../Class.SConnectableElementImpl)

#### Returns

`FluentIterable`\<[`SEdgeImpl`](../Class.SEdgeImpl)\>

***

### remove()

> **remove**(`element`): `void`

Defined in: [packages/sprotty/src/graph/sgraph.ts:193](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/graph/sgraph.ts#L193)

#### Parameters

##### element

[`SModelElementImpl`](../Class.SModelElementImpl)

#### Returns

`void`

#### Overrides

[`ModelIndexImpl`](../Class.ModelIndexImpl).[`remove`](../Class.ModelIndexImpl.md#remove)
