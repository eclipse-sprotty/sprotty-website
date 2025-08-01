
[sprotty-protocol](../globals) / IDiagramGenerator

# Interface: IDiagramGenerator

Defined in: [diagram-services.ts:48](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-services.ts#L48)

A diagram generator is responsible for creating a diagram model from some source.
This process is controlled by the `DiagramOptions`, which for example may contain
a URI to the source document from which the diagram shall be created.

## Methods

### generate()

> **generate**(`args`): [`SModelRoot`](../Interface.SModelRoot) \| `Promise`\<[`SModelRoot`](../Interface.SModelRoot)\>

Defined in: [diagram-services.ts:49](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty-protocol/src/diagram-services.ts#L49)

#### Parameters

##### args

[`GeneratorArguments`](../Interface.GeneratorArguments)

#### Returns

[`SModelRoot`](../Interface.SModelRoot) \| `Promise`\<[`SModelRoot`](../Interface.SModelRoot)\>
