---
title: 'Extension Points'
weight: 4
---

{{< toc >}}

Sprotty is designed to be highly extensible, allowing you to customize and enhance its functionality to meet your specific requirements. Sprotty's architecture is built around several key extension points that allow you to:

- **Customize the rendering** of diagram elements
- **Add new behaviors** through actions and commands
- **Integrate with external data sources**
- **Modify the rendering pipeline** with post-processors
- All configurable through the **dependency injection** system

Each extension point follows Sprotty's architectural principles:

- **Separation of concerns**: Each extension has a specific responsibility
- **Dependency injection**: Extensions are loosely coupled and easily testable
- **Type safety**: All extensions are fully typed
- **Composability**: Multiple extensions can work together seamlessly

## Dependency Injection

Sprotty uses [InversifyJS](https://inversify.io/) for dependency injection, which provides a powerful and flexible way to configure and extend the framework.

### Understanding the DI Container

The DI container manages all the services and components in Sprotty. Each module registers its dependencies, and the container resolves them at runtime.

```typescript
import { Container, ContainerModule } from 'inversify';
import { TYPES, loadDefaultModules } from 'sprotty';

// Create a custom module
const customModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    // Register your custom services here
    bind(TYPES.IModelFactory).to(CustomModelFactory).inSingletonScope();
    bind(TYPES.IActionDispatcher).to(CustomActionDispatcher).inSingletonScope();
});

// Create and configure the container
const container = new Container();
loadDefaultModules(container);  // Load Sprotty's default modules
container.load(customModule);   // Load your custom module
```

### Key DI Concepts

**Binding Types:**

- `bind()`: Register a new service
- `rebind()`: Override an existing service
- `unbind()`: Remove a service binding
- `isBound()`: Check if a service is already bound

**Scopes:**

- `inSingletonScope()`: Single instance shared across the container
- `inTransientScope()`: New instance created each time
- `inRequestScope()`: Single instance per request

### Common Extension Patterns

**Service Replacement:**

```typescript
const customModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    // Replace the default logger with a custom one
    rebind(TYPES.ILogger).to(CustomLogger).inSingletonScope();
    
    // Replace the default model factory
    rebind(TYPES.IModelFactory).to(CustomModelFactory).inSingletonScope();
});
```

**Service Addition:**

```typescript
const customModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    // Add a new service
    bind(TYPES.ICustomService).to(CustomService).inSingletonScope();
    
    // Register multiple implementations of the same interface
    bind(TYPES.IActionHandler).to(CustomActionHandler1);
    bind(TYPES.IActionHandler).to(CustomActionHandler2);
});
```

**Conditional Binding:**

```typescript
const customModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    if (process.env.NODE_ENV === 'development') {
        bind(TYPES.ILogger).to(VerboseLogger).inSingletonScope();
    } else {
        bind(TYPES.ILogger).to(ProductionLogger).inSingletonScope();
    }
});
```

## Custom Model Elements and Views

Sprotty's rendering system is based on a model-view architecture where model elements define the data structure and views define how they are rendered.

### Creating Custom Model Elements

Model elements extend `SModelElementImpl` and define the data structure for your diagram elements.

```typescript
import { SModelElementImpl, SShapeElementImpl } from 'sprotty';

export class CustomNode extends SShapeElementImpl {
    customProperty: string = '';
    size: { width: number; height: number } = { width: 100, height: 50 };
    
    constructor() {
        super();
        this.type = 'custom-node';
    }
}

export class CustomEdge extends SEdgeImpl {
    customRouting: string = 'straight';
    
    constructor() {
        super();
        this.type = 'custom-edge';
    }
}
```

### Creating Custom Views

Views define how model elements are rendered. Sprotty uses JSX with a custom `svg` function for SVG rendering.

**SVG View Example:**

```typescript
/** @jsx svg */
import { svg } from 'sprotty/lib/jsx';
import { injectable } from 'inversify';
import { VNode } from 'snabbdom';
import { SShapeElementView, IViewArgs, RenderingContext } from 'sprotty';
import { CustomNode } from './model';

@injectable()
export class CustomNodeView extends SShapeElementView {
    render(element: CustomNode, context: RenderingContext, args?: IViewArgs): VNode | undefined {
        if (!this.isVisible(element, context)) {
            return undefined;
        }
        
        return <g>
            <rect class-sprotty-node={true}
                  class-custom-node={true}
                  class-mouseover={element.hoverFeedback} 
                  class-selected={element.selected}
                  width={element.size.width} 
                  height={element.size.height}
                  rx="5" ry="5"
                  fill="#ffffff" 
                  stroke="#000000" 
                  stroke-width="2" />
            <text x={element.size.width / 2} 
                  y={element.size.height / 2}
                  text-anchor="middle" 
                  dominant-baseline="middle">
                {element.customProperty}
            </text>
            {context.renderChildren(element)}
        </g>;
    }
}
```

### Registering Model Elements and Views

Use `configureModelElement` to register your custom model elements and views:

```typescript
import { configureModelElement, TYPES } from 'sprotty';

const customModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    const context = { bind, unbind, isBound, rebind };
    
    // Register custom node
    configureModelElement(context, 'custom-node', CustomNode, CustomNodeView);
    
    // Register custom edge
    configureModelElement(context, 'custom-edge', CustomEdge, CustomEdgeView);
    
    // Register with features
    configureModelElement(context, 'interactive-node', CustomNode, CustomNodeView, {
        enable: [selectFeature, moveFeature, hoverFeature]
    });
});
```

## Custom Actions and Commands

Actions and commands are the primary mechanism for implementing custom behaviors in Sprotty.

### Understanding Actions and Commands

- **Actions**: Describe what should happen (intent)
- **Commands**: Implement how it should happen (execution)

Actions are serializable objects that can be sent between client and server, while commands perform the actual state changes.

### Creating Custom Actions

Actions extend the base `Action` interface and define the data needed for the operation.

```typescript
import { Action } from 'sprotty-protocol';

export interface CreateCustomNodeAction extends Action {
    kind: 'createCustomNode';
    nodeType: string;
    position: { x: number; y: number };
    parentId?: string;
    properties?: Record<string, any>;
}

export interface UpdateCustomNodeAction extends Action {
    kind: 'updateCustomNode';
    nodeId: string;
    properties: Record<string, any>;
}

export interface DeleteCustomNodeAction extends Action {
    kind: 'deleteCustomNode';
    nodeId: string;
}

export interface MoveCustomNodeAction extends Action {
    kind: 'moveCustomNode';
    nodeId: string;
    newPosition: { x: number; y: number };
}
```

### Creating Custom Commands

Commands implement the actual behavior and must support undo/redo operations.

**Simple Command:**

```typescript
import { injectable, inject } from 'inversify';
import { Command, CommandExecutionContext, CommandResult, TYPES } from 'sprotty';
import { CreateCustomNodeAction } from './actions';

@injectable()
export class CreateCustomNodeCommand extends Command {
    static KIND = 'createCustomNode';
    
    private createdNodeId: string;

    constructor(@inject(TYPES.Action) protected readonly action: CreateCustomNodeAction) {
        super();
    }

    execute(context: CommandExecutionContext): CommandResult {
        const newNode = this.createNode(context);
        const parent = this.action.parentId ? context.root.index.getById(this.action.parentId) : context.root;
        
        if (parent && 'children' in parent) {
            parent.children.push(newNode);
        }
        
        this.createdNodeId = newNode.id;
        return CommandResult.ok();
    }

    undo(context: CommandExecutionContext): CommandResult {
        const node = context.root.index.getById(this.createdNodeId);
        if (node && node.parent && 'children' in node.parent) {
            const index = node.parent.children.indexOf(node);
            if (index >= 0) {
                node.parent.children.splice(index, 1);
            }
        }
        return CommandResult.ok();
    }

    redo(context: CommandExecutionContext): CommandResult {
        return this.execute(context);
    }

    private createNode(context: CommandExecutionContext): CustomNode {
        const node = new CustomNode();
        node.id = context.modelFactory.createId();
        node.position = { ...this.action.position };
        node.type = this.action.nodeType;
        
        if (this.action.properties) {
            Object.assign(node, this.action.properties);
        }
        
        return node;
    }
}
```

**Mergeable Command:**

```typescript
import { injectable, inject } from 'inversify';
import { MergeableCommand, CommandExecutionContext, CommandResult, TYPES } from 'sprotty';
import { MoveCustomNodeAction } from './actions';

@injectable()
export class MoveCustomNodeCommand extends MergeableCommand {
    static KIND = 'moveCustomNode';
    
    private previousPosition?: { x: number; y: number };

    constructor(@inject(TYPES.Action) protected readonly action: MoveCustomNodeAction) {
        super();
    }

    execute(context: CommandExecutionContext): CommandResult {
        const node = context.root.index.getById(this.action.nodeId) as CustomNode;
        if (node) {
            this.previousPosition = { ...node.position };
            node.position = { ...this.action.newPosition };
        }
        return CommandResult.ok();
    }

    undo(context: CommandExecutionContext): CommandResult {
        const node = context.root.index.getById(this.action.nodeId) as CustomNode;
        if (node && this.previousPosition) {
            node.position = { ...this.previousPosition };
        }
        return CommandResult.ok();
    }

    redo(context: CommandExecutionContext): CommandResult {
        return this.execute(context);
    }

    merge(other: Command): boolean {
        if (other instanceof MoveCustomNodeCommand && other.action.nodeId === this.action.nodeId) {
            this.action.newPosition = { ...other.action.newPosition };
            return true;
        }
        return false;
    }
}
```

### Creating Action Handlers

Action handlers connect actions to commands and can perform additional logic.

```typescript
import { injectable } from 'inversify';
import { IActionHandler, ICommand } from 'sprotty';
import { CreateCustomNodeAction, UpdateCustomNodeAction, DeleteCustomNodeAction } from './actions';

@injectable()
export class CustomActionHandler implements IActionHandler {
    handle(action: Action): ICommand | Action | void {
        switch (action.kind) {
            case 'createCustomNode':
                return new CreateCustomNodeCommand(
                    action.nodeType,
                    action.position,
                    action.parentId,
                    action.properties
                );
            
            case 'updateCustomNode':
                return new UpdateCustomNodeCommand(
                    action.nodeId,
                    action.properties
                );
            
            case 'deleteCustomNode':
                return new DeleteCustomNodeCommand(action.nodeId);
        }
    }
}
```

### Registering Actions and Commands

Register your action handlers and commands in the DI container:

```typescript
import { TYPES, configureCommand } from 'sprotty';

const customModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    const context = { bind, unbind, isBound, rebind };
    
    // Register action handler
    bind(TYPES.IActionHandler).to(CustomActionHandler);
    
    // Register commands using configureCommand
    configureCommand(context, CreateCustomNodeCommand);
    configureCommand(context, UpdateCustomNodeCommand);
    configureCommand(context, DeleteCustomNodeCommand);
});
```

## Custom Model Sources

Model sources are responsible for providing the diagram data to Sprotty. They can connect to various data sources and handle the communication between the client and external systems.

### Understanding Model Sources

Model sources implement the `ModelSource` interface and serve as the entry point for external data. They handle:

- Model requests from the client
- Model updates and synchronization
- Communication with external systems
- Bounds computation coordination (when `needsClientLayout` is enabled)
- Action handling and forwarding (for selected action types)

### Creating a Local Model Source

For simple applications, you can extend `LocalModelSource` to provide static or dynamic data.

```typescript
import { injectable } from 'inversify';
import { LocalModelSource, SModelRootImpl } from 'sprotty';

@injectable()
export class CustomLocalModelSource extends LocalModelSource {
    private currentModel: SModelRootImpl;

    constructor() {
        super();
        this.currentModel = this.createInitialModel();
    }

    get model(): SModelRootImpl {
        return this.currentModel;
    }

    async updateModel(newModel: SModelRootImpl): Promise<void> {
        this.currentModel = newModel;
        await this.updateRoot();
    }

    private createInitialModel(): SModelRootImpl {
        const root = new SModelRootImpl();
        root.id = 'root';
        root.type = 'graph';
        
        // Add your initial model elements here
        const node = new CustomNode();
        node.id = 'node1';
        node.position = { x: 100, y: 100 };
        root.children.push(node);
        
        return root;
    }
}
```

### Creating a Remote Model Source

For applications that need to communicate with a server, extend `DiagramServerProxy`.

```typescript
import { injectable } from 'inversify';
import { DiagramServerProxy, SModelRootImpl } from 'sprotty';

@injectable()
export class CustomDiagramServer extends DiagramServerProxy {
    constructor() {
        super();
    }

    protected async requestModel(): Promise<SModelRootImpl> {
        // Implement your server communication logic
        const response = await fetch('/api/diagram/model');
        const modelData = await response.json();
        return this.createModelFromData(modelData);
    }

    protected async handleAction(action: Action): Promise<void> {
        // Handle actions that need server processing
        if (action.kind === 'createCustomNode') {
            await this.sendToServer(action);
        }
    }

    private async sendToServer(action: Action): Promise<void> {
        await fetch('/api/diagram/action', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action)
        });
    }

    private createModelFromData(data: any): SModelRootImpl {
        // Convert your data format to Sprotty model
        const root = new SModelRootImpl();
        root.id = data.id;
        root.type = data.type;
        
        // Convert nodes
        for (const nodeData of data.nodes) {
            const node = new CustomNode();
            node.id = nodeData.id;
            node.position = nodeData.position;
            node.customProperty = nodeData.customProperty;
            root.children.push(node);
        }
        
        return root;
    }
}
```

### Creating a WebSocket Model Source

For real-time applications, you can create a WebSocket-based model source.

```typescript
import { injectable } from 'inversify';
import { ModelSource, SModelRootImpl } from 'sprotty';

@injectable()
export class WebSocketModelSource extends ModelSource {
    private ws: WebSocket;
    private currentModel: SModelRootImpl;

    constructor() {
        super();
        this.ws = new WebSocket('ws://localhost:8080/diagram');
        this.setupWebSocket();
    }

    get model(): SModelRootImpl {
        return this.currentModel;
    }

    handle(action: Action): ICommand | Action | void {
        // Send actions to server via WebSocket
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(action));
        }
    }

    async commitModel(newRoot: SModelRootImpl): Promise<SModelRootImpl> {
        const previousModel = this.currentModel;
        this.currentModel = newRoot;
        return previousModel;
    }

    private setupWebSocket(): void {
        this.ws.onopen = () => {
            console.log('WebSocket connected');
            this.requestModel();
        };

        this.ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            this.handleServerMessage(data);
        };

        this.ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        this.ws.onclose = () => {
            console.log('WebSocket disconnected');
        };
    }

    private handleServerMessage(data: any): void {
        switch (data.type) {
            case 'model':
                this.currentModel = this.createModelFromData(data.model);
                this.updateRoot();
                break;
            case 'action':
                this.actionDispatcher.dispatch(data.action);
                break;
        }
    }

    private createModelFromData(data: any): SModelRootImpl {
        // Implementation similar to previous example
    }
}
```

## Custom Post-processors

Post-processors allow you to modify the rendered VNodes after they are created but before they are applied to the DOM. This is useful for adding custom styling, event handlers, or other modifications.

### Understanding Post-processors

Post-processors implement the `IVNodePostprocessor` interface and are called for each VNode during the rendering process. They can:

- Modify VNode attributes and properties
- Add event listeners
- Apply custom styling
- Add animations
- Perform DOM manipulations

### Creating a Simple Post-processor

```typescript
import { injectable } from 'inversify';
import { VNode } from 'snabbdom';
import { IVNodePostprocessor, SModelElementImpl } from 'sprotty';
import { setAttr, setClass } from 'sprotty/lib/base/views/vnode-utils';

@injectable()
export class CustomStylingPostprocessor implements IVNodePostprocessor {
    decorate(vnode: VNode, element: SModelElementImpl): VNode {
        // Add custom CSS class based on element type
        if (element.type === 'custom-node') {
            setClass(vnode, 'custom-node-style', true);
        }

        // Add custom attributes
        if (element.id.includes('important')) {
            setAttr(vnode, 'data-important', 'true');
        }

        return vnode;
    }

    postUpdate(): void {
        // Called after all VNodes are updated
        // Use this for cleanup or global updates
    }
}
```

### Creating an Event Handler Post-processor

```typescript
import { injectable } from 'inversify';
import { VNode } from 'snabbdom';
import { IVNodePostprocessor, SModelElementImpl } from 'sprotty';
import { on } from 'sprotty/lib/base/views/vnode-utils';

@injectable()
export class CustomEventHandlerPostprocessor implements IVNodePostprocessor {
    decorate(vnode: VNode, element: SModelElementImpl): VNode {
        // Add custom click handler
        if (element.type === 'custom-node') {
            on(vnode, 'click', (event: Event) => {
                event.preventDefault();
                this.handleCustomClick(element, event);
            });
        }

        // Add custom hover handlers
        on(vnode, 'mouseenter', (event: Event) => {
            this.handleMouseEnter(element, event);
        });

        on(vnode, 'mouseleave', (event: Event) => {
            this.handleMouseLeave(element, event);
        });

        return vnode;
    }

    postUpdate(): void {
        // Cleanup if needed
    }

    private handleCustomClick(element: SModelElementImpl, event: Event): void {
        console.log('Custom click on element:', element.id);
        // Dispatch custom action or perform other logic
    }

    private handleMouseEnter(element: SModelElementImpl, event: Event): void {
        // Add hover effect
    }

    private handleMouseLeave(element: SModelElementImpl, event: Event): void {
        // Remove hover effect
    }
}
```

### Creating an Animation Post-processor

```typescript
import { injectable } from 'inversify';
import { VNode } from 'snabbdom';
import { IVNodePostprocessor, SModelElementImpl } from 'sprotty';
import { setAttr } from 'sprotty/lib/base/views/vnode-utils';

@injectable()
export class AnimationPostprocessor implements IVNodePostprocessor {
    private animatedElements = new Set<string>();

    decorate(vnode: VNode, element: SModelElementImpl): VNode {
        // Add animation attributes for new elements
        if (!this.animatedElements.has(element.id)) {
            setAttr(vnode, 'class', 'fade-in');
            setAttr(vnode, 'style', {
                animation: 'fadeIn 0.5s ease-in-out'
            });
            this.animatedElements.add(element.id);
        }

        // Add transition for position changes
        if (element.position) {
            setAttr(vnode, 'style', {
                transition: 'transform 0.3s ease-in-out'
            });
        }

        return vnode;
    }

    postUpdate(): void {
        // Clean up animation tracking if needed
    }
}
```

### Registering Post-processors

Register your post-processors in the DI container:

```typescript
import { TYPES } from 'sprotty';

const customModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    // Register post-processors
    bind(CustomStylingPostprocessor).toSelf().inSingletonScope();
    bind(TYPES.IVNodePostprocessor).toService(CustomStylingPostprocessor);
    
    bind(CustomEventHandlerPostprocessor).toSelf().inSingletonScope();
    bind(TYPES.IVNodePostprocessor).toService(CustomEventHandlerPostprocessor);
    
    bind(AnimationPostprocessor).toSelf().inSingletonScope();
    bind(TYPES.IVNodePostprocessor).toService(AnimationPostprocessor);
});
```

By following these extension points and best practices, you can create powerful, maintainable, and performant customizations for your Sprotty-based diagramming applications.
