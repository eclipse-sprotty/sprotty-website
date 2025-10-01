---
title: 'Communication Patterns'
---
{{< toc >}}

Sprotty's architecture is built around an action-based communication system where all interactions flow through dispatched actions. This recipe provides practical guidance for implementing custom actions, handling user interactions, and building interactive diagram applications with proper state management.

## Understanding Actions

Actions are the fundamental communication mechanism in Sprotty. They are plain JSON-serializable objects that represent user interactions, system events, or state changes.

### Action Structure

Every action must have a `kind` property that identifies its type:

```typescript
interface Action {
    kind: string;
    [key: string]: any;
}
```

### Essential Action Types

#### Model Management Actions

**SetModelAction** - Replaces the entire diagram model:

```typescript
import { SetModelAction } from 'sprotty-protocol';

// Create a complete new model
const setModelAction: SetModelAction = {
    kind: 'setModel',
    newRoot: {
        type: 'graph',
        id: 'root',
        children: [
            { 
                type: 'node', 
                id: 'node1', 
                position: { x: 100, y: 100 },
                size: { width: 80, height: 40 }
            }
        ]
    }
};

// Dispatch the action
actionDispatcher.dispatch(setModelAction);
```

**UpdateModelAction** - Updates the model with optional animations:

```typescript
import { UpdateModelAction } from 'sprotty-protocol';

// Update existing model (useful for incremental changes)
const updateAction: UpdateModelAction = {
    kind: 'updateModel',
    newRoot: updatedModel,
    animate: true  // Enable smooth transitions
};
```

#### Navigation Actions

**FitToScreenAction** - Fits the diagram to the viewport:

```typescript
import { FitToScreenAction } from 'sprotty-protocol';

const fitAction: FitToScreenAction = {
    kind: 'fit',
    elementIds: [],  // Empty array fits entire diagram
    padding: 20,     // Padding around content
    maxZoom: 1.0,    // Maximum zoom level
    animate: true    // Smooth animation
};
```

**CenterAction** - Centers specific elements:

```typescript
import { CenterAction } from 'sprotty-protocol';

const centerAction: CenterAction = {
    kind: 'center',
    elementIds: ['node1', 'node2'],  // Elements to center
    animate: true
};
```

## Creating Custom Actions

Custom actions enable application-specific functionality like creating, updating, or deleting diagram elements. Here's how to implement them properly.

### 1. Define Action Interfaces with KIND Constants

```typescript
// actions.ts
import { Action } from 'sprotty-protocol';

// Create Node Action
export interface CreateNodeAction extends Action {
    kind: typeof CreateNodeAction.KIND;
    nodeType: 'client' | 'server' | 'database';
    position: { x: number, y: number };
    label: string;
}

export namespace CreateNodeAction {
    export const KIND = 'createNode';
    
    export function create(options: {
        nodeType: 'client' | 'server' | 'database';
        position: { x: number, y: number };
        label: string;
    }): CreateNodeAction {
        return {
            kind: KIND,
            nodeType: options.nodeType,
            position: options.position,
            label: options.label
        };
    }
}

// Update Node Action
export interface UpdateNodeAction extends Action {
    kind: typeof UpdateNodeAction.KIND;
    nodeId: string;
    properties: {
        label?: string;
        status?: 'active' | 'inactive' | 'error';
        color?: string;
    };
}

export namespace UpdateNodeAction {
    export const KIND = 'updateNode';
    
    export function create(nodeId: string, properties: UpdateNodeAction['properties']): UpdateNodeAction {
        return {
            kind: KIND,
            nodeId,
            properties
        };
    }
}

// Delete Node Action
export interface DeleteNodeAction extends Action {
    kind: typeof DeleteNodeAction.KIND;
    nodeId: string;
}

export namespace DeleteNodeAction {
    export const KIND = 'deleteNode';
    
    export function create(nodeId: string): DeleteNodeAction {
        return {
            kind: KIND,
            nodeId
        };
    }
}

// Connect Nodes Action
export interface ConnectNodesAction extends Action {
    kind: typeof ConnectNodesAction.KIND;
    sourceId: string;
    targetId: string;
    edgeType: 'communication' | 'dependency';
}

export namespace ConnectNodesAction {
    export const KIND = 'connectNodes';
    
    export function create(sourceId: string, targetId: string, edgeType: 'communication' | 'dependency'): ConnectNodesAction {
        return {
            kind: KIND,
            sourceId,
            targetId,
            edgeType
        };
    }
}
```

### 2. Implement Model Source for Action Handling

The recommended pattern is to extend `LocalModelSource` to handle your custom actions:

```typescript
// model-source.ts
import { injectable } from 'inversify';
import { LocalModelSource, ActionHandlerRegistry } from 'sprotty';
import { Action } from 'sprotty-protocol';
import {
    CreateNodeAction,
    UpdateNodeAction,
    DeleteNodeAction,
    ConnectNodesAction
} from './actions';

@injectable()
export class DiagramModelSource extends LocalModelSource {

    initialize(registry: ActionHandlerRegistry): void {
        super.initialize(registry);
        
        // Register custom action handlers
        registry.register(CreateNodeAction.KIND, this);
        registry.register(UpdateNodeAction.KIND, this);
        registry.register(DeleteNodeAction.KIND, this);
        registry.register(ConnectNodesAction.KIND, this);
    }

    handle(action: Action): void {
        switch (action.kind) {
            case CreateNodeAction.KIND:
                this.handleCreateNode(action as CreateNodeAction);
                break;
            case UpdateNodeAction.KIND:
                this.handleUpdateNode(action as UpdateNodeAction);
                break;
            case DeleteNodeAction.KIND:
                this.handleDeleteNode(action as DeleteNodeAction);
                break;
            case ConnectNodesAction.KIND:
                this.handleConnectNodes(action as ConnectNodesAction);
                break;
            default:
                super.handle(action);
        }
    }

    private handleCreateNode(action: CreateNodeAction): void {
        const currentModel = this.currentRoot;
        
        // Create new node
        const newNode = {
            type: 'node:debug',
            id: `${action.nodeType}-${Date.now()}`,
            position: action.position,
            size: { width: 120, height: 60 },
            nodeType: action.nodeType,
            label: action.label,
            status: 'active'
        };

        // Create updated model with new node
        const updatedModel = {
            ...currentModel,
            children: [...(currentModel.children || []), newNode]
        };

        // Update the model
        this.updateModel(updatedModel);
    }

    private handleUpdateNode(action: UpdateNodeAction): void {
        const currentModel = this.currentRoot;
        
        // Find and update the node
        const updatedChildren = (currentModel.children || []).map(child => {
            if (child.id === action.nodeId) {
                return {
                    ...child,
                    ...action.properties
                };
            }
            return child;
        });

        const updatedModel = {
            ...currentModel,
            children: updatedChildren
        };

        this.updateModel(updatedModel);
    }

    private handleDeleteNode(action: DeleteNodeAction): void {
        const currentModel = this.currentRoot;
        
        // Remove node and its connected edges
        const updatedChildren = (currentModel.children || []).filter(child => {
            if (child.type === 'edge:debug') {
                // Remove edges connected to the deleted node
                return child.sourceId !== action.nodeId && child.targetId !== action.nodeId;
            }
            // Remove the node itself
            return child.id !== action.nodeId;
        });

        const updatedModel = {
            ...currentModel,
            children: updatedChildren
        };

        this.updateModel(updatedModel);
    }

    private handleConnectNodes(action: ConnectNodesAction): void {
        const currentModel = this.currentRoot;
        
        // Check if both nodes exist
        const sourceExists = (currentModel.children || []).some(child => child.id === action.sourceId);
        const targetExists = (currentModel.children || []).some(child => child.id === action.targetId);
        
        if (!sourceExists || !targetExists) {
            console.warn('Cannot connect nodes: source or target not found');
            return;
        }

        // Create new edge
        const newEdge = {
            type: 'edge:debug',
            id: `edge-${action.sourceId}-${action.targetId}-${Date.now()}`,
            sourceId: action.sourceId,
            targetId: action.targetId,
            edgeType: action.edgeType,
            routingPoints: []
        };

        const updatedModel = {
            ...currentModel,
            children: [...(currentModel.children || []), newEdge]
        };

        this.updateModel(updatedModel);
    }
}
```

### 3. Configure Dependency Injection

```typescript
// di.config.ts
import { Container, ContainerModule } from 'inversify';
import { 
    TYPES, 
    loadDefaultModules, 
    configureModelElement,
    SGraphImpl, 
    SNodeImpl, 
    SEdgeImpl, 
    SLabelImpl 
} from 'sprotty';
import { DiagramModelSource } from './model-source';

export const diagramModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    // Use custom model source instead of LocalModelSource
    rebind(TYPES.ModelSource).to(DiagramModelSource).inSingletonScope();
    
    // Configure model elements
    configureModelElement(context, 'graph', SGraphImpl);
    configureModelElement(context, 'node:debug', SNodeImpl);
    configureModelElement(context, 'edge:debug', SEdgeImpl);
    configureModelElement(context, 'label:text', SLabelImpl);
});

// Create container with default modules
export function createDiagramContainer(): Container {
    const container = new Container();
    
    // Load essential Sprotty modules
    loadDefaultModules(container);
    
    // Load custom module
    container.load(diagramModule);
    
    return container;
}
```

## Using Actions in Practice

### 4. Dispatching Actions from UI

```typescript
// standalone.ts - Main application setup
import { TYPES, IActionDispatcher } from 'sprotty';
import { CreateNodeAction, UpdateNodeAction, DeleteNodeAction } from './actions';
import { createDiagramContainer } from './di.config';

export default function runDiagramApp(): void {
    // Create container and get action dispatcher
    const container = createDiagramContainer();
    const actionDispatcher = container.get<IActionDispatcher>(TYPES.IActionDispatcher);
    
    // Set up initial model
    const initialModel = {
        type: 'graph',
        id: 'diagram',
        children: [],
        // Required properties for Sprotty
        scroll: { x: 0, y: 0 },
        zoom: 1,
        canvasBounds: { x: 0, y: 0, width: 800, height: 600 }
    };
    
    actionDispatcher.dispatch({
        kind: 'setModel',
        newRoot: initialModel
    });
    
    // Set up UI controls
    setupUIControls(actionDispatcher);
    
    // Fit diagram to screen
    actionDispatcher.dispatch({
        kind: 'fit',
        elementIds: [],
        padding: 20,
        animate: true
    });
}

function setupUIControls(actionDispatcher: IActionDispatcher): void {
    // Add Client button
    const addClientBtn = document.getElementById('add-client');
    if (addClientBtn) {
        addClientBtn.addEventListener('click', () => {
            actionDispatcher.dispatch(CreateNodeAction.create({
                nodeType: 'client',
                position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 100 },
                label: `Client ${Math.floor(Math.random() * 1000)}`
            }));
        });
    }
    
    // Update Node button
    const updateBtn = document.getElementById('update-node');
    if (updateBtn) {
        updateBtn.addEventListener('click', () => {
            const nodeId = prompt('Enter node ID to update:');
            if (nodeId) {
                actionDispatcher.dispatch(UpdateNodeAction.create(nodeId, {
                    status: 'active',
                    label: 'Updated Node'
                }));
            }
        });
    }
    
    // Delete Node button
    const deleteBtn = document.getElementById('delete-node');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            const nodeId = prompt('Enter node ID to delete:');
            if (nodeId) {
                actionDispatcher.dispatch(DeleteNodeAction.create(nodeId));
            }
        });
    }
}
```

### 5. HTTP API Integration

Simple pattern for loading/saving diagrams:

```typescript
// api-client.ts
export class DiagramApiClient {
    constructor(private actionDispatcher: IActionDispatcher) {}
    
    async loadDiagram(diagramId: string): Promise<void> {
        try {
            const response = await fetch(`/api/diagrams/${diagramId}`);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const diagramData = await response.json();
            
            // Ensure required properties are present
            const modelWithDefaults = {
                scroll: { x: 0, y: 0 },
                zoom: 1,
                canvasBounds: { x: 0, y: 0, width: 800, height: 600 },
                ...diagramData
            };
            
            this.actionDispatcher.dispatch({
                kind: 'setModel',
                newRoot: modelWithDefaults
            });
            
        } catch (error) {
            console.error('Failed to load diagram:', error);
            this.showNotification('Failed to load diagram', 'error');
        }
    }
    
    async saveDiagram(model: any, diagramId: string): Promise<void> {
        try {
            const response = await fetch(`/api/diagrams/${diagramId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(model)
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            this.showNotification('Diagram saved successfully', 'success');
            
        } catch (error) {
            console.error('Failed to save diagram:', error);
            this.showNotification('Failed to save diagram', 'error');
        }
    }
    
    private showNotification(message: string, type: 'success' | 'error'): void {
        // Simple toast notification
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 4px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            background-color: ${type === 'error' ? '#dc3545' : '#28a745'};
        `;
        
        document.body.appendChild(toast);
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 3000);
    }
}
```

## Common Patterns and Best Practices

### Action Lifecycle Understanding

Actions in Sprotty follow a specific lifecycle that's important to understand:

1. **Action Dispatch**: `actionDispatcher.dispatch(action)`
2. **Action Handler Registration**: Actions are routed to registered handlers
3. **Model Update**: Handlers update the model using `this.updateModel()`
4. **View Refresh**: Views automatically re-render when the model changes

### Important Initialization Requirements

Sprotty requires certain actions to be processed before custom actions work:

```typescript
// Essential: Ensure canvas bounds are initialized
function initializeDiagram(actionDispatcher: IActionDispatcher): void {
    // This action must be dispatched early to unblock other actions
    setTimeout(() => {
        actionDispatcher.dispatch({
            kind: 'initializeCanvasBounds',
            newCanvasBounds: { x: 0, y: 0, width: 800, height: 600 }
        });
    }, 100);
}
```

### Model Structure Requirements

Your model must include these essential properties:

```typescript
const validModel = {
    type: 'graph',
    id: 'root',
    children: [...], // Your nodes and edges
    
    // Required by Sprotty's core views
    scroll: { x: 0, y: 0 },
    zoom: 1,
    canvasBounds: { x: 0, y: 0, width: 800, height: 600 }
};
```

### Error Handling

Simple error handling pattern for actions:

```typescript
export class SafeModelSource extends LocalModelSource {
    
    handle(action: Action): void {
        try {
            switch (action.kind) {
                case CreateNodeAction.KIND:
                    this.handleCreateNode(action as CreateNodeAction);
                    break;
                default:
                    super.handle(action);
            }
        } catch (error) {
            console.error(`Error handling action ${action.kind}:`, error);
            
            // Show user-friendly error
            this.showError(`Failed to ${action.kind}. Please try again.`);
        }
    }
    
    private showError(message: string): void {
        // Simple error notification
        const errorDiv = document.createElement('div');
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #dc3545;
            color: white;
            padding: 12px 20px;
            border-radius: 4px;
            z-index: 10000;
        `;
        
        document.body.appendChild(errorDiv);
        setTimeout(() => document.body.removeChild(errorDiv), 5000);
    }
}

## Testing Actions

Simple testing approach for action handlers:

```typescript
// action-handler.test.ts
import { DiagramModelSource } from './model-source';
import { CreateNodeAction } from './actions';

describe('DiagramModelSource', () => {
    let modelSource: DiagramModelSource;
    
    beforeEach(() => {
        modelSource = new DiagramModelSource();
        // Set up initial model
        modelSource.currentRoot = {
            type: 'graph',
            id: 'test',
            children: [],
            scroll: { x: 0, y: 0 },
            zoom: 1,
            canvasBounds: { x: 0, y: 0, width: 800, height: 600 }
        };
    });
    
    it('should create a new node', () => {
        const action = CreateNodeAction.create({
            nodeType: 'client',
            position: { x: 100, y: 100 },
            label: 'Test Node'
        });
        
        modelSource.handle(action);
        
        // Verify node was added
        expect(modelSource.currentRoot.children).toHaveLength(1);
        expect(modelSource.currentRoot.children[0].nodeType).toBe('client');
        expect(modelSource.currentRoot.children[0].label).toBe('Test Node');
    });
});
```

## Best Practices

### 1. Action Design

- **Use KIND constants** for type safety and consistency
- **Provide factory methods** for easy action creation
- **Keep actions simple** - one responsibility per action
- **Make actions serializable** - avoid functions or complex objects

### 2. Model Updates

- **Always include required properties** (`scroll`, `zoom`, `canvasBounds`)
- **Use immutable updates** - create new objects instead of modifying existing ones
- **Validate data** before updating the model
- **Handle edge cases** like missing nodes or invalid IDs

### 3. Error Handling

- **Wrap action handlers** in try-catch blocks
- **Provide user feedback** for both success and failure
- **Log errors** for debugging
- **Graceful degradation** when actions fail

### 4. Performance

- **Batch related updates** when possible
- **Avoid frequent model updates** - debounce rapid actions
- **Use `UpdateModelAction`** for incremental changes instead of `SetModelAction`

## Summary

Sprotty's action-based communication system enables powerful, interactive diagram applications. The key patterns are:

1. **Define actions with KIND constants** and factory methods
2. **Extend LocalModelSource** to handle custom actions
3. **Register actions** in the DI container
4. **Dispatch actions** from UI interactions
5. **Handle errors gracefully** and provide user feedback

This approach provides a clean separation between user interactions, business logic, and view updates, making your diagram applications maintainable and testable.

For a complete working example, see the [Communication Patterns Showcase](../../examples/communication-showcase/communication-showcase.html) which demonstrates all these patterns in action.
