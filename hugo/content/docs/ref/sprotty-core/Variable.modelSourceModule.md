
[sprotty](../globals) / modelSourceModule

# Variable: modelSourceModule

> `const` **modelSourceModule**: `ContainerModule`

Defined in: [packages/sprotty/src/model-source/di.config.ts:28](https://github.com/eclipse-sprotty/sprotty/blob/f9b2433481cc27a1ac0c92d525a92039ae7f6c76/packages/sprotty/src/model-source/di.config.ts#L28)

This container module does NOT provide any binding for TYPES.ModelSource because that needs to be
done according to the needs of the application. You can choose between a local (LocalModelSource)
and a remote (e.g. WebSocketDiagramServer) implementation.
