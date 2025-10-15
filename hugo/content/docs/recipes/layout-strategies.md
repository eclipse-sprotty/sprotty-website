---
title: 'Layout Strategies'
---
{{< toc >}}

Layout is a fundamental aspect of creating effective diagrams. Sprotty provides flexible layout strategies that can be configured to run on the client, server, or in hybrid combinations. This recipe covers the different layout approaches, their configuration, and best practices for each scenario.

## Understanding Layout Types

Sprotty distinguishes between two complementary layout systems that work together to create the final diagram appearance:

### 1. Client Layout (Micro-Layout)

**Client layout** handles the internal arrangement of elements within nodes and compartments. This includes:

- Label positioning within nodes
- Icon and text alignment
- Compartment content organization  
- Child element spacing and sizing

Client layout runs in the browser and has access to actual font metrics and CSS styling information, making it ideal for precise text and content positioning.

### 2. Server Layout (Macro-Layout)

**Server layout** determines the overall diagram structure and relationships:

- Node positioning in the diagram space
- Edge routing between nodes
- Global diagram organization
- Cross-node spatial relationships

Server layout typically uses sophisticated algorithms (like those in Eclipse Layout Kernel) to create aesthetically pleasing and readable diagram arrangements.

## Client-Only Layout Configuration

For diagrams where you want complete client-side control, configure Sprotty to handle all layout locally.

### Configuration

```typescript
import { ContainerModule } from 'inversify';
import { TYPES, configureViewerOptions } from 'sprotty';

const layoutModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    const context = { bind, unbind, isBound, rebind };
    
    // Configure for client-side layout
    configureViewerOptions(context, {
        needsClientLayout: true,     // Enable client layout computation
        needsServerLayout: false,    // Disable server layout
        baseDiv: 'diagram-container'
    });
});
```

### Model Configuration

```typescript
// Define nodes with layout properties
const clientLayoutModel: SGraph = {
    type: 'graph',
    id: 'client-layout-demo',
    children: [
        {
            type: 'node:compartment',
            id: 'node1',
            position: { x: 50, y: 50 },
            size: { width: 200, height: 120 },
            layout: 'vbox',              // Vertical layout for children
            layoutOptions: {
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 15,
                paddingRight: 15,
                vGap: 5                  // Gap between vertical elements
            },
            children: [
                {
                    type: 'label',
                    id: 'node1-title',
                    text: 'Client Layout Node',
                    fontSize: 14
                },
                {
                    type: 'label', 
                    id: 'node1-subtitle',
                    text: 'Managed locally',
                    fontSize: 12
                }
            ]
        }
    ]
};
```

### Layout Options Reference

| Option | Description | Default |
|--------|-------------|---------|
| `paddingTop` | Top padding inside container | 0 |
| `paddingBottom` | Bottom padding inside container | 0 |
| `paddingLeft` | Left padding inside container | 0 |
| `paddingRight` | Right padding inside container | 0 |
| `vGap` | Vertical gap between elements (for `vbox` layout) | 0 |
| `hGap` | Horizontal gap between elements (for `hbox` layout) | 0 |
| `hAlign` | Horizontal alignment: `left`, `center`, `right` (for `vbox` layout only) | `left` |
| `vAlign` | Vertical alignment: `top`, `center`, `bottom` (for `hbox` layout only) | `top` |

## Server-Only Layout Configuration

For complex diagrams requiring sophisticated layout algorithms, delegate layout to the server.

### Configuration

```typescript
import { ContainerModule } from 'inversify';
import { TYPES, configureViewerOptions } from 'sprotty';
import { ElkLayoutEngine } from 'sprotty-elk/lib/inversify';

const serverLayoutModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    const context = { bind, unbind, isBound, rebind };
    
    // Configure for server-side layout
    configureViewerOptions(context, {
        needsClientLayout: false,    // Disable client layout
        needsServerLayout: true      // Enable server layout
    });
    
    // Bind layout engine (example with ELK)
    bind(TYPES.IModelLayoutEngine).to(ElkLayoutEngine).inSingletonScope();
});
```

### Model with Layout Hints

```typescript
const serverLayoutModel: SGraph = {
    type: 'graph',
    id: 'server-layout-demo',
    layoutOptions: {
        'elk.algorithm': 'layered',
        'elk.direction': 'DOWN',
        'elk.spacing.nodeNode': '50',
        'elk.layered.spacing.nodeNodeBetweenLayers': '80'
    },
    children: [
        {
            type: 'node',
            id: 'A',
            // No position - will be computed by server
            size: { width: 100, height: 60 },
            layoutOptions: {
                'elk.portConstraints': 'FIXED_SIDE'
            }
        },
        {
            type: 'node', 
            id: 'B',
            size: { width: 120, height: 80 }
        },
        {
            type: 'edge',
            id: 'A-B',
            sourceId: 'A',
            targetId: 'B'
        }
    ]
};
```

### ELK Algorithm Options

ELK provides several layout algorithms optimized for different diagram types, including layered (hierarchical), force-directed, stress-minimization, tree, and radial layouts. Each algorithm supports extensive configuration options for fine-tuning the layout behavior.

For a complete list of available algorithms and their configuration options, see the [Eclipse Layout Kernel documentation](https://www.eclipse.org/elk/reference.html).

## Hybrid Client-Server Layout

Combine both layout types for maximum flexibility and control.

### Configuration

```typescript
const hybridLayoutModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    const context = { bind, unbind, isBound, rebind };
    
    // Enable both layout types
    configureViewerOptions(context, {
        needsClientLayout: true,     // For micro-layout
        needsServerLayout: true      // For macro-layout
    });
    
    bind(TYPES.IModelLayoutEngine).to(ElkLayoutEngine).inSingletonScope();
});
```

### Layout Workflow

The hybrid approach follows this sequence:

1. **Client Layout Phase**:
   - Compute bounds for labels and compartment contents
   - Calculate actual text dimensions using browser fonts
   - Update node sizes based on content

2. **Server Layout Phase**:
   - Use updated node sizes from client layout
   - Compute node positions and edge routing
   - Apply global layout algorithm

3. **Final Rendering**:
   - Render nodes at server-computed positions
   - Render content at client-computed positions within nodes

```typescript
// Model that benefits from hybrid layout
const hybridModel: SGraph = {
    type: 'graph',
    id: 'hybrid-demo',
    layoutOptions: {
        'elk.algorithm': 'layered',
        'elk.direction': 'RIGHT'
    },
    children: [
        {
            type: 'node:compartment',
            id: 'service1',
            // Position computed by server
            layout: 'vbox',              // Client layout for contents
            layoutOptions: {
                paddingTop: 8,
                paddingLeft: 12,
                vGap: 4
            },
            children: [
                { type: 'label', id: 'service1-title', text: 'User Service' },
                { type: 'label', id: 'service1-port', text: 'Port: 8080' },
                { type: 'label', id: 'service1-status', text: 'Status: Running' }
            ]
        }
    ]
};
```

## Bounds Computation Workflow

Understanding the bounds computation process is crucial for effective layout configuration.

### The Two-Phase Process

#### Phase 1: Invisible Rendering

```typescript
// 1. RequestBoundsAction is dispatched
const requestBounds: RequestBoundsAction = {
    kind: 'requestBounds',
    newRoot: model
};

// 2. Model is rendered with hidden visibility
// Elements get actual font metrics and CSS styling
// Text dimensions are measured accurately
```

#### Phase 2: Visible Rendering  

```typescript
// 3. ComputedBoundsAction contains measured sizes
const computedBounds: ComputedBoundsAction = {
    kind: 'computedBounds',
    bounds: [
        { elementId: 'label1', newPosition: { x: 10, y: 5 }, newSize: { width: 85, height: 16 }},
        { elementId: 'node1', newPosition: { x: 0, y: 0 }, newSize: { width: 105, height: 26 }}
    ]
};

// 4. Final model update with computed bounds
const updateModel: UpdateModelAction = {
    kind: 'updateModel', 
    newRoot: updatedModelWithBounds,
    animate: false
};
```

## Best Practices

### 1. Choose the Right Strategy

- **Client-only**: Simple diagrams with mostly static layouts
- **Server-only**: Complex network diagrams requiring sophisticated algorithms  
- **Hybrid**: Rich content nodes in algorithmically-arranged diagrams

### 2. Optimize Performance

```typescript
// Batch layout updates
const batchedUpdates = new Map<string, Partial<SModelElement>>();

// Collect all changes
batchedUpdates.set('node1', { position: { x: 100, y: 50 } });
batchedUpdates.set('node2', { size: { width: 120, height: 80 } });

// Apply all at once
this.modelSource.updateModel(applyBatchedUpdates(currentModel, batchedUpdates));
```

### 3. Handle Dynamic Content

```typescript
// Responsive node sizing based on content
@injectable()
export class ResponsiveNodeView implements IView {
    render(node: ResponsiveNode, context: RenderingContext): VNode {
        const contentLength = node.content?.length || 0;
        const dynamicWidth = Math.max(100, contentLength * 8 + 20);
        
        return <g>
            <rect width={dynamicWidth} height="40" class-responsive-node={true} />
            <text x="10" y="25">{node.content}</text>
        </g>;
    }
}
```

Layout strategies are fundamental to creating effective diagrams. Choose the approach that best fits your use case, and don't hesitate to combine strategies for optimal results.
