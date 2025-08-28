---
title: 'Best Practices'
weight: 5
---

{{< toc >}}

Now that you understand Sprotty's [Extension Points]({{< relref "extension-points" >}}), let's explore the best practices for building robust, maintainable, and performant diagramming applications. These guidelines will help you avoid common pitfalls and create high-quality Sprotty-based solutions.

## Architecture & Design Patterns

### Dependency Injection (DI) Configuration

- **Use InversifyJS properly:** Always use `@injectable` decorators for your classes and configure them in DI modules
- **Use utility functions for your modules:** Use utility functions like `configureModelElement()`, `configureCommand()`, `configureActionHandler()`, etc. to configure your DI modules
- **Load modules in the correct order:** Start with `loadDefaultModules()` then add your custom modules

**✅ Always use proper DI configuration:**

```typescript
// Good: Proper DI setup with type mapping
const customModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    // Map model types to implementations and views
    configureModelElement(context, 'task', RectangularNode, TaskNodeView);
    configureModelElement(context, 'edge', SEdgeImpl, PolylineEdgeView);
    
    // Bind services with proper scoping
    bind(TYPES.ModelSource).to(CustomModelSource).inSingletonScope();
    bind(TYPES.IActionDispatcher).to(ActionDispatcher).inSingletonScope();
    
    // Configure viewer options
    configureViewerOptions(context, {
        needsClientLayout: true,
        baseDiv: 'sprotty-diagram'
    });
});

// Load modules in correct order
const container = new Container();
loadDefaultModules(container);
container.load(customModule);
```

**❌ Avoid direct instantiation:**

```typescript
// Bad: Direct instantiation makes testing difficult
private actionDispatcher = new ActionDispatcher();
private modelSource = new LocalModelSource();
```

### Model Design Principles

- **Extend existing interfaces:** Create custom types by extending Sprotty's base interfaces (SNode, SEdge, etc.)
- **Use JSON-serializable models:** Ensure your model elements can be serialized for client-server communication
- **Implement proper ID management:** Use unique, consistent IDs for all elements
- **Reserve system properties:** Don't override reserved properties like children, parent, index

**✅ Extend existing interfaces properly:**

```typescript
// Good: Extend base interfaces for custom types
export interface TaskNode extends SNode {
    name: string;
    isRunning: boolean;
    isFinished: boolean;
    priority?: 'low' | 'medium' | 'high';
}

// Good: Use JSON-serializable models
export const taskModel: SGraph = {
    type: 'graph',
    id: 'task-graph',
    children: [
        {
            type: 'task',
            id: 'task-1',
            name: 'First Task',
            isRunning: false,
            isFinished: true,
            position: { x: 0, y: 0 },
            size: { width: 100, height: 50 }
        }
    ]
};
```

**❌ Don't override reserved properties:**

```typescript
// Bad: Overriding reserved properties
const node = {
    type: 'task',
    id: 'task-1',
    children: 'invalid', // Reserved property
    parent: 'invalid',   // Reserved property
    index: 'invalid'     // Reserved property
};
```

## Performance & Scalability

### Large Diagram Optimization

- **Use view filtering:** Implement conditional rendering for large datasets
- **Leverage projection features:** Use projection bars for navigation in large diagrams
- **Implement lazy loading:** Load and/or display diagram sections on demand
- **Optimize bounds computation:** Provide valid bounds in your model to avoid expensive calculations

**✅ Implement conditional rendering for large datasets:**

```typescript
// Good: Use ThunkView for performance optimization
@injectable()
export class OptimizedNodeView extends ThunkView {
    watchedArgs(model: SNode): any[] {
        return [model.isVisible, model.zoom, model.position];
    }

    selector(model: SNode): string {
        return 'g';
    }

    isVisible(model: SNode): boolean {
        // Only render when zoomed in enough
        return model.zoom * model.size.width > 10;
    }

    render(model: SNode, context: RenderingContext): VNode {
        return <g class-node={true} class-selected={model.selected}>
            <rect x="0" y="0" width={model.size.width} height={model.size.height} />
            {context.renderChildren(model)}
        </g>;
    }
}
```

**✅ Use projection features for navigation:**

```typescript
// Good: Implement projection bars for large diagrams
export class ProjectionBarView implements IView {
    render(model: ViewportRootElement, context: RenderingContext): VNode {
        const projections = this.getProjections(model);
        return <div class-sprotty-projection-bar={true}>
            {projections.map(p => this.renderProjection(p, model))}
        </div>;
    }
}
```

### Memory Management

- **Set undo history limits:** Configure `undoHistoryLimit` in `CommandStackOptions` to prevent memory leaks
- **Clean up resources:** Properly dispose of event listeners and references

**✅ Configure proper undo history limits:**

```typescript
// Good: Set undo history limits to prevent memory leaks, this is the default configuration
const commandStackOptions: CommandStackOptions = {
    defaultDuration: 250,
    undoHistoryLimit: 50 // Prevent unlimited growth, a negative number results in memory leak
};

// In DI module
configureCommandStackOptions(context, commandStackOptions)
```

**✅ Implement proper cleanup:**

```typescript
// Good: Clean up resources properly
export class CustomModelSource extends LocalModelSource {
    private eventListeners: Array<() => void> = [];

    addEventListener(element: HTMLElement, event: string, handler: EventListener) {
        element.addEventListener(event, handler);
        this.eventListeners.push(() => element.removeEventListener(event, handler));
    }

    dispose() {
        this.eventListeners.forEach(cleanup => cleanup());
        this.eventListeners = [];
    }
}
```

## Security & Validation

- **Implement label validators:** Use `IEditLabelValidator` for user input validation
- **Sanitize HTML content:** When using ForeignObjectElement, validate and sanitize HTML content
- **Validate model data:** Ensure incoming model data is properly validated before processing

**✅ Implement comprehensive label validation:**

```typescript
// Good: Robust input validation
@injectable()
export class TaskLabelValidator implements IEditLabelValidator {
    async validate(value: string, label: EditableLabel): Promise<EditLabelValidationResult> {
        // Length validation
        if (value.length === 0) {
            return { severity: 'error', message: 'Label cannot be empty' };
        }
        
        if (value.length > 100) {
            return { severity: 'error', message: 'Label too long (max 100 characters)' };
        }
        
        // Content validation
        if (!/^[a-zA-Z0-9\s\-_]+$/.test(value)) {
            return { severity: 'warning', message: 'Label contains special characters' };
        }
        
        // Duplicate validation
        if (await this.isDuplicate(value, label)) {
            return { severity: 'error', message: 'Label already exists' };
        }
        
        return { severity: 'ok' };
    }
}
```

**✅ Validate model data and handle HTML content safely:**

```typescript
// Good: Validate model structure and sanitize HTML content
export class SafeModelSource extends LocalModelSource {
    protected validateModel(model: SModelRoot): void {
        // Check for required properties
        if (!model.type || !model.id) {
            throw new Error('Model must have type and id properties');
        }
        
        // Validate children recursively
        if (model.children) {
            this.validateChildren(model.children);
        }
    }
    
    private validateChildren(children: SModelElement[]): void {
        const seenIds = new Set<string>();
        
        for (const child of children) {
            // Check for duplicate IDs (Sprotty throws error for this)
            if (seenIds.has(child.id)) {
                throw new Error(`Duplicate ID found: ${child.id}`);
            }
            seenIds.add(child.id);
            
            // Validate HTML content in ForeignObjectElement
            if (child.type === 'foreignObject' && 'code' in child) {
                this.sanitizeHtmlContent((child as any).code);
            }
            
            // Recursively validate nested children
            if (child.children) {
                this.validateChildren(child.children);
            }
        }
    }
    
    private sanitizeHtmlContent(htmlContent: string): string {
        // Remove script tags and event handlers
        const sanitized = htmlContent
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/\bon\w+\s*=/gi, '') // Remove event handlers
            .replace(/javascript:/gi, '') // Remove javascript: protocol
            .replace(/data:text\/html/gi, ''); // Remove data URLs
        
        return sanitized;
    }
    
    async requestModel(): Promise<void> {
        try {
            const model = await this.loadModel();
            this.validateModel(model);
            this.updateModel(model);
        } catch (error) {
            console.error('Model validation failed:', error);
            // Provide fallback or user feedback
            this.handleValidationError(error);
        }
    }
}
```

## User Experience & Accessibility

### Responsive Design

- **Handle viewport changes:** Implement proper zoom and pan limits
- **Use CSS for styling:** Leverage CSS classes for consistent styling across different states
- **Provide visual feedback:** Implement hover, selection, and focus states

**✅ Implement proper viewport handling:**

```typescript
// Good: Responsive viewport configuration
configureViewerOptions(context, {
    needsClientLayout: true,
    baseDiv: 'sprotty-diagram',
    zoomLimits: { min: 0.1, max: 5.0 },
    horizontalScrollLimits: { min: -10000, max: 10000 },
    verticalScrollLimits: { min: -10000, max: 10000 }
});
```

**✅ Use CSS for consistent styling:**

```css
/* Good: Responsive and accessible styling */
.sprotty-node.task {
    fill: #c0e0fc;
    stroke: #444;
    stroke-width: 1;
    transition: all 0.2s ease;
    cursor: pointer;
}

.sprotty-node.task:hover {
    stroke-width: 2;
    filter: brightness(1.1);
}

.sprotty-node.task.selected {
    stroke-width: 3;
    stroke: #0066cc;
}

.sprotty-node.task.running {
    fill: #ff6b6b;
    animation: pulse 2s infinite;
}

.sprotty-node.task.finished {
    fill: #51cf66;
}

/* Accessibility: High contrast mode support */
@media (prefers-contrast: high) {
    .sprotty-node.task {
        stroke: #000;
        stroke-width: 2;
    }
}
```

### Accessibility Features

- **Add ARIA labels:** Include proper accessibility attributes for screen readers
- **Keyboard navigation:** Implement keyboard shortcuts and navigation
- **Color contrast:** Ensure sufficient color contrast for text and interactive elements

**✅ Add ARIA attributes and keyboard navigation:**

```typescript
// Good: Accessible view implementation
export class AccessibleNodeView extends SShapeElementView {
    render(element: SNode, context: RenderingContext): VNode {
        return <g role="button"
                  aria-label={`Task: ${element.name}`}
                  aria-describedby={`task-${element.id}-desc`}
                  tabindex="0"
                  onkeydown={(e) => this.handleKeyDown(e, element)}
                  onfocus={(e) => this.handleFocus(e, element)}
                  onblur={(e) => this.handleBlur(e, element)}>
            <rect x="0" y="0" 
                  width={element.size.width} 
                  height={element.size.height} />
            <text x={element.size.width / 2} y={element.size.height / 2 + 4}
                  text-anchor="middle">
                {element.name}
            </text>
        </g>;
    }
    
    private handleKeyDown(event: KeyboardEvent, element: SNode): void {
        switch (event.key) {
            case 'Enter':
            case ' ':
                this.actionDispatcher.dispatch(new SelectElementAction([element.id]));
                event.preventDefault();
                break;
            case 'Escape':
                this.actionDispatcher.dispatch(new ClearSelectionAction());
                event.preventDefault();
                break;
        }
    }
}
```

## Next Steps

Remember that Sprotty is designed to be flexible and extensible. These best practices provide a solid foundation, but don't hesitate to adapt them to your specific use case while maintaining the core architectural principles.
