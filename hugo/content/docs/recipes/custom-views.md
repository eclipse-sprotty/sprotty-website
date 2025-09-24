---
title: 'Custom Views'
---
{{< toc >}}

Custom views are the foundation of how Sprotty renders your diagram elements. Each model element type is associated with a view that defines how it appears in the SVG DOM. This recipe covers everything you need to know about creating, configuring, and composing custom views.

## Understanding Views

Views are classes that implement the `IView` interface and transform model elements into SVG representations. Each view has a `render()` method that returns a virtual DOM node (`VNode`) describing the SVG elements to be rendered.

### The View-Model Relationship

Every model element has a `type` property that maps to exactly one view in the `ViewRegistry`. When Sprotty renders your diagram, it:

1. Traverses the model tree
2. Looks up each element's view by its type
3. Calls the view's `render()` method
4. Builds the SVG DOM from the returned virtual nodes

```typescript
// Model element with type
const nodeModel: SNode = {
    id: 'node1',
    type: 'node:custom',  // This maps to a view
    position: { x: 100, y: 50 },
    size: { width: 120, height: 80 }
};
```

## Creating Your First Custom View

Let's create a custom view step by step:

### 1. Basic View Structure

```typescript
import { injectable } from 'inversify';
import { VNode } from 'snabbdom';
import { IView, RenderingContext, SNodeImpl, IViewArgs } from 'sprotty';

@injectable()
export class CustomNodeView implements IView {
    render(node: Readonly<SNodeImpl>, context: RenderingContext, args?: IViewArgs): VNode | undefined {
        // Check if the element should be rendered
        if (!this.isVisible(node, context)) {
            return undefined;
        }

        // Return the SVG representation
        return <g class-custom-node={true}>
            <rect x="0" y="0" 
                  width={Math.max(node.size.width, 0)} 
                  height={Math.max(node.size.height, 0)}
                  class-selected={node.selected}
                  class-hovered={node.hoverFeedback} />
            {context.renderChildren(node)}
        </g>;
    }

    // Helper method for visibility checking
    protected isVisible(element: SNodeImpl, context: RenderingContext): boolean {
        return !element.hidden && context.targetKind !== 'hidden';
    }
}
```

### 2. Key Components Explained

**Injectable Decorator**: The `@injectable()` decorator is required for dependency injection. Never forget this!

**Visibility Check**: Always check if an element should be rendered. This optimizes performance by skipping hidden or out-of-viewport elements.

**Root Element**: The render method must return exactly one root element. Use `<g>` (group) to wrap multiple SVG elements.

**Position**: Set `x="0" y="0"` - the layout engine handles actual positioning.

**Children Rendering**: Use `context.renderChildren(node)` to render child elements in their own views.

## TSX Syntax and Conventions

Sprotty uses TSX (TypeScript + JSX) for defining SVG elements. This allows you to write SVG declaratively with TypeScript expressions.

### CSS Classes

Use Sprotty's convenient class syntax for dynamic styling (which gets transformed into Snabbdom's class module format):

```typescript
return <rect 
    class-base-style={true}                    // Always applied → class="base-style"
    class-selected={node.selected}             // Conditional → class="selected" (if node.selected is true)
    class-error={node.issues && node.issues.length > 0}  // Complex condition → class="error" (if condition is true)
    class-large={node.size.width > 200}       // Size-based styling → class="large" (if width > 200)
/>;
// Results in HTML: <rect class="base-style selected large" /> (assuming conditions are met)
```

### Attributes and Properties

```typescript
return <circle
    cx={node.size.width / 2}        // Calculated values
    cy={node.size.height / 2}
    r={Math.min(node.size.width, node.size.height) / 2}
    fill={node.selected ? '#007acc' : '#cccccc'}  // Conditional attributes
    stroke-width="2"                // Static values
/>;
```

### Handling Complex Content

For complex content, use TypeScript expressions:

```typescript
render(node: Readonly<CustomNode>, context: RenderingContext): VNode {
    const corners = this.calculateCorners(node);
    const pathData = this.createPathFromCorners(corners);
    
    return <g>
        <path d={pathData} class-custom-shape={true} />
        {node.showLabel && <text x="10" y="20">{node.label}</text>}
        {context.renderChildren(node)}
    </g>;
}
```

## View Registry Configuration

Views must be registered in your dependency injection container to be used:

### Basic Registration

```typescript
import { ContainerModule } from 'inversify';
import { configureModelElement, TYPES } from 'sprotty';

const diagramModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    const context = { bind, unbind, isBound, rebind };
    
    // Register model element with its view
    configureModelElement(context, 'node:custom', SNodeImpl, CustomNodeView);
    configureModelElement(context, 'edge:custom', SEdgeImpl, CustomEdgeView);
    configureModelElement(context, 'label:custom', SLabelImpl, CustomLabelView);
});
```

### Advanced Registration with Features

```typescript
configureModelElement(context, 'node:interactive', InteractiveNode, InteractiveNodeView, {
    enable: [selectFeature, moveFeature, hoverFeedback, popupFeature]
});
```

## Rendering Context and Lifecycle

The `RenderingContext` provides essential services and information during rendering:

### Context Properties

```typescript
render(node: Readonly<SNodeImpl>, context: RenderingContext): VNode {
    // Check rendering target (main, popup, hidden)
    if (context.targetKind === 'popup') {
        return this.renderPopupVersion(node);
    }
    
    // Access the model root
    const root = context.root;
    
    // Check if we're in hidden rendering (for bounds computation)
    if (context.targetKind === 'hidden') {
        return this.renderForBoundsComputation(node);
    }
    
    return this.renderNormal(node, context);
}
```

### Rendering Children

```typescript
// Render all children
{context.renderChildren(node)}

// Render specific child
{context.renderElement(specificChild)}

// Render children with filtering
{node.children
    .filter(child => child.type === 'label')
    .map(child => context.renderElement(child))}
```

### Context Services

```typescript
render(node: Readonly<SNodeImpl>, context: RenderingContext): VNode {
    // Access view registry for manual view lookup
    const labelView = context.viewRegistry.get('label:standard');
    
    // Access parent arguments if available
    const parentArgs = context.parentArgs;
    
    return <g>/* ... */</g>;
}
```

## View Composition Patterns

### Extending Existing Views

Build upon Sprotty's built-in views:

```typescript
@injectable()
export class EnhancedNodeView extends RectangularNodeView {
    override render(node: Readonly<SNodeImpl>, context: RenderingContext): VNode | undefined {
        const baseNode = super.render(node, context);
        if (!baseNode) return undefined;
        
        // Add custom decorations
        const decorations = this.renderDecorations(node);
        
        return <g>
            {baseNode}
            {decorations}
        </g>;
    }
    
    protected renderDecorations(node: SNodeImpl): VNode[] {
        const decorations: VNode[] = [];
        
        if (node.selected) {
            decorations.push(<rect class-selection-border={true} 
                                  x="-2" y="-2" 
                                  width={node.size.width + 4} 
                                  height={node.size.height + 4} />);
        }
        
        return decorations;
    }
}
```

### Compositional Views

Create reusable view components:

```typescript
@injectable()
export class ComplexNodeView implements IView {
    render(node: Readonly<ComplexNode>, context: RenderingContext): VNode {
        return <g>
            {this.renderHeader(node)}
            {this.renderBody(node, context)}
            {this.renderFooter(node)}
        </g>;
    }
    
    protected renderHeader(node: ComplexNode): VNode {
        return <rect class-header={true} 
                     width={node.size.width} 
                     height="30" />;
    }
    
    protected renderBody(node: ComplexNode, context: RenderingContext): VNode {
        return <g transform="translate(0, 30)">
            {context.renderChildren(node)}
        </g>;
    }
    
    protected renderFooter(node: ComplexNode): VNode {
        return <line x1="0" y1={node.size.height - 1} 
                     x2={node.size.width} y2={node.size.height - 1} 
                     class-footer-line={true} />;
    }
}
```

### Conditional View Logic

Handle different states and configurations:

```typescript
@injectable()
export class StatefulNodeView implements IView {
    render(node: Readonly<StatefulNode>, context: RenderingContext): VNode {
        switch (node.state) {
            case 'loading':
                return this.renderLoadingState(node);
            case 'error':
                return this.renderErrorState(node);
            case 'success':
                return this.renderSuccessState(node, context);
            default:
                return this.renderDefaultState(node, context);
        }
    }
    
    protected renderLoadingState(node: StatefulNode): VNode {
        return <g>
            <rect class-loading={true} width={node.size.width} height={node.size.height} />
            <text x={node.size.width / 2} y={node.size.height / 2} 
                  text-anchor="middle" class-loading-text={true}>
                Loading...
            </text>
        </g>;
    }
    
    // ... other state renderers
}
```

## Best Practices

### Performance Optimization

1. **Early Returns**: Always check visibility first
2. **Minimal Calculations**: Cache expensive computations
3. **Conditional Rendering**: Skip unnecessary elements

```typescript
render(node: Readonly<SNodeImpl>, context: RenderingContext): VNode | undefined {
    // Early visibility check
    if (!this.isVisible(node, context)) {
        return undefined;
    }
    
    // Cache expensive calculations
    if (!this.cachedPath || this.isDirty(node)) {
        this.cachedPath = this.calculateComplexPath(node);
        this.markClean(node);
    }
    
    return <path d={this.cachedPath} />;
}
```

### Separation of Concerns

1. **Keep views focused**: One view per visual concept
2. **Delegate to children**: Let child views handle their own rendering
3. **Extract helpers**: Move complex calculations to separate methods

### Error Handling

```typescript
render(node: Readonly<SNodeImpl>, context: RenderingContext): VNode | undefined {
    try {
        return this.renderContent(node, context);
    } catch (error) {
        console.error('Error rendering node:', node.id, error);
        return this.renderErrorFallback(node);
    }
}

protected renderErrorFallback(node: SNodeImpl): VNode {
    return <rect class-error={true} 
                 width={Math.max(node.size.width, 50)} 
                 height={Math.max(node.size.height, 30)} />;
}
```

The key to mastering custom views is practice. Start simple, build incrementally, and always keep the separation between model and view clear.
