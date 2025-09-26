---
title: 'Advanced Interactions'
---

{{< toc >}}

## Introduction

Sprotty provides a rich set of interaction capabilities that go beyond basic viewing and navigation. This recipe covers advanced interaction patterns including custom buttons, mouse and keyboard handling, drag and drop operations, selection management, viewport controls, and custom gesture recognition.

## Button Handlers and Custom Buttons

Buttons in Sprotty enable direct user interaction with diagram elements through clickable controls. They work similarly to other model elements but include special handler mechanisms.

### Basic Button Setup

First, define the button model and view, then register a button handler:

```typescript
import { SButton, configureButtonHandler, configureModelElement } from 'sprotty';
import { CustomButtonView, CustomButtonHandler } from './button-components';

const container = new ContainerModule((bind, unbind, isBound, rebind) => {
    const context = { bind, unbind, isBound, rebind };
    
    // Register button type with custom view
    configureModelElement(context, 'button:custom', SButton, CustomButtonView);
    
    // Register button handler
    configureButtonHandler(context, 'button:custom', CustomButtonHandler);
    
    configureViewerOptions(context, {
        needsClientLayout: true,
        baseDiv: 'sprotty'
    });
});
```

### Button Handler Implementation

A button handler implements the `IButtonHandler` interface with a single `buttonPressed` method:

```typescript
import { injectable } from 'inversify';
import { IButtonHandler, SButton, Action } from 'sprotty';
import { ShowTooltipAction, HideTooltipAction } from './custom-actions';

@injectable()
export class CustomButtonHandler implements IButtonHandler {
    buttonPressed(button: SButton): Action[] {
        const parentId = button.parent?.id || 'unknown';
        
        switch (button.type) {
            case 'button:info':
                return [ShowTooltipAction.create({
                    elementId: parentId,
                    message: 'Information about ' + parentId
                })];
                
            case 'button:delete':
                return [DeleteElementAction.create({ elementId: parentId })];
                
            case 'button:edit':
                return [EditElementAction.create({ elementId: parentId })];
                
            default:
                return [];
        }
    }
}
```

### Custom Button Views

Create visually distinct buttons using custom views:

```typescript
/** @jsx svg */
import { svg, VNode, RenderingContext, SButton } from 'sprotty';
import { injectable } from 'inversify';
import { ButtonView } from 'sprotty/lib/features/button/button-view';

@injectable()
export class IconButtonView extends ButtonView {
    render(button: SButton, context: RenderingContext): VNode {
        const icon = this.getIconForButton(button);
        const isPressed = button.pressed || false;
        
        return <g class-button={true} class-pressed={isPressed}>
            <circle cx="12" cy="12" r="10" 
                    class-button-background={true}
                    class-button-hover={button.hoverFeedback} />
            <text x="12" y="16" text-anchor="middle" 
                  class-button-icon={true}>
                {icon}
            </text>
        </g>;
    }
    
    private getIconForButton(button: SButton): string {
        switch (button.type) {
            case 'button:info': return 'ℹ️';
            case 'button:delete': return '🗑️';
            case 'button:edit': return '✏️';
            case 'button:settings': return '⚙️';
            default: return '●';
        }
    }
}
```

## Mouse and Keyboard Listeners

Global mouse and keyboard listeners provide diagram-wide interaction capabilities.

### Mouse Listener Implementation

```typescript
import { injectable } from 'inversify';
import { MouseListener, SModelElementImpl, Action } from 'sprotty';
import { SelectAction, HoverFeedbackAction } from 'sprotty-protocol';

@injectable()
export class AdvancedMouseListener extends MouseListener {
    
    doubleClick(target: SModelElementImpl, event: MouseEvent): (Action | Promise<Action>)[] {
        // Handle double-click for different element types
        if (target.type.startsWith('node:')) {
            return [ExpandCollapseAction.create({ 
                elementId: target.id, 
                expand: !target.expanded 
            })];
        }
        return [];
    }
    
    mouseDown(target: SModelElementImpl, event: MouseEvent): (Action | Promise<Action>)[] {
        // Handle right-click context menu
        if (event.button === 2) { // Right click
            event.preventDefault();
            return [ShowContextMenuAction.create({
                elementId: target.id,
                position: { x: event.clientX, y: event.clientY }
            })];
        }
        return [];
    }
    
    mouseEnter(target: SModelElementImpl, event: MouseEvent): (Action | Promise<Action>)[] {
        // Show hover effects and tooltips
        return [
            HoverFeedbackAction.create({
                mouseoverElement: target.id,
                mouseIsOver: true
            }),
            ShowTooltipAction.create({
                elementId: target.id,
                position: { x: event.clientX, y: event.clientY }
            })
        ];
    }
    
    mouseLeave(target: SModelElementImpl, event: MouseEvent): (Action | Promise<Action>)[] {
        return [
            HoverFeedbackAction.create({
                mouseoverElement: target.id,
                mouseIsOver: false
            }),
            HideTooltipAction.create()
        ];
    }
}
```

### Keyboard Listener Implementation

```typescript
import { injectable } from 'inversify';
import { KeyListener, SModelElementImpl, Action } from 'sprotty';
import { SelectAllAction, FitToScreenAction } from 'sprotty-protocol';

@injectable()
export class AdvancedKeyListener extends KeyListener {
    
    keyDown(element: SModelElementImpl, event: KeyboardEvent): Action[] {
        // Handle keyboard shortcuts
        if (event.ctrlKey || event.metaKey) {
            switch (event.code) {
                case 'KeyA':
                    event.preventDefault();
                    return [SelectAllAction.create()];
                    
                case 'KeyF':
                    event.preventDefault();
                    return [FitToScreenAction.create([])];
                    
                case 'Delete':
                case 'Backspace':
                    event.preventDefault();
                    return [DeleteSelectedElementsAction.create()];
                    
                case 'KeyC':
                    event.preventDefault();
                    return [CopySelectedElementsAction.create()];
                    
                case 'KeyV':
                    event.preventDefault();
                    return [PasteElementsAction.create()];
            }
        }
        
        // Handle arrow key navigation
        if (!event.ctrlKey && !event.metaKey) {
            switch (event.code) {
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'ArrowRight':
                    event.preventDefault();
                    return [NavigateAction.create({ 
                        direction: event.code.replace('Arrow', '').toLowerCase() 
                    })];
            }
        }
        
        return [];
    }
}
```

### Registering Listeners

Register mouse and keyboard listeners in your DI container:

```typescript
const container = new ContainerModule((bind, unbind, isBound, rebind) => {
    // Mouse listener
    bind(AdvancedMouseListener).toSelf().inSingletonScope();
    bind(TYPES.MouseListener).toService(AdvancedMouseListener);
    
    // Keyboard listener  
    bind(AdvancedKeyListener).toSelf().inSingletonScope();
    bind(TYPES.KeyListener).toService(AdvancedKeyListener);
});
```

## Drag and Drop Interactions

Sprotty supports sophisticated drag and drop operations for element movement, creation, and manipulation.

### Custom Move Logic

```typescript
import { injectable } from 'inversify';
import { MoveMouseListener, SModelElementImpl, Action } from 'sprotty';
import { MoveAction } from 'sprotty-protocol';

@injectable()
export class ConstrainedMoveListener extends MoveMouseListener {
    
    mouseMove(target: SModelElementImpl, event: MouseEvent): Action[] {
        const moveActions = super.mouseMove(target, event);
        
        // Apply constraints to movement
        return moveActions.map(action => {
            if (action.kind === MoveAction.KIND) {
                const moveAction = action as MoveAction;
                return this.applyMovementConstraints(moveAction);
            }
            return action;
        });
    }
    
    private applyMovementConstraints(moveAction: MoveAction): MoveAction {
        // Constrain movement to grid
        const gridSize = 20;
        
        return {
            ...moveAction,
            moves: moveAction.moves.map(move => ({
                ...move,
                toPosition: {
                    x: Math.round(move.toPosition.x / gridSize) * gridSize,
                    y: Math.round(move.toPosition.y / gridSize) * gridSize
                }
            }))
        };
    }
}
```

### Drag and Drop from External Sources

Handle drops from external sources like tool palettes:

```typescript
import { injectable } from 'inversify';
import { MouseListener, SModelElementImpl, Action, Point } from 'sprotty';

@injectable()
export class PaletteDropListener extends MouseListener {
    
    override dragOver(target: SModelElementImpl, event: MouseEvent): Action[] {
        // Allow drop by preventing default
        event.preventDefault();
        return [];
    }
    
    override drop(target: SModelElementImpl, event: MouseEvent): Action[] {
        event.preventDefault();
        
        const dragEvent = event as any as DragEvent;
        const dragData = dragEvent.dataTransfer?.getData('application/json');
        if (!dragData) return [];
        
        try {
            const dropInfo = JSON.parse(dragData);
            const dropPosition = this.getDropPosition(target, dragEvent);
            
            switch (dropInfo.type) {
                case 'palette-node':
                    return [CreateNodeAction.create({
                        nodeType: dropInfo.nodeType,
                        position: dropPosition,
                        containerId: this.getContainerId(target)
                    })];
                    
                case 'palette-edge':
                    return [StartEdgeCreationAction.create({
                        edgeType: dropInfo.edgeType,
                        position: dropPosition
                    })];
                    
                default:
                    return [];
            }
        } catch (error) {
            console.warn('Invalid drop data:', error);
            return [];
        }
    }
    
    private getDropPosition(target: SModelElementImpl, event: DragEvent): Point {
        // Convert screen coordinates to diagram coordinates
        const bounds = target.root.canvasBounds;
        return {
            x: event.clientX - bounds.x,
            y: event.clientY - bounds.y
        };
    }
    
    private getContainerId(target: SModelElementImpl): string {
        // Find the appropriate container for the dropped element
        return target.root.id;
    }
}
```

## Selection and Focus Management

Advanced selection patterns provide rich interaction capabilities.

### Multi-Selection with Modifiers

```typescript
import { injectable } from 'inversify';
import { SelectMouseListener, SModelElementImpl, Action } from 'sprotty';
import { SelectAction } from 'sprotty-protocol';

@injectable()
export class AdvancedSelectListener extends SelectMouseListener {
    
    mouseDown(target: SModelElementImpl, event: MouseEvent): Action[] {
        const selectActions = super.mouseDown(target, event);
        
        // Modify selection behavior based on modifier keys
        return selectActions.map(action => {
            if (action.kind === SelectAction.KIND) {
                const selectAction = action as SelectAction;
                
                if (event.ctrlKey || event.metaKey) {
                    // Toggle selection
                    return {
                        ...selectAction,
                        selectedElementsIDs: this.toggleSelection(
                            selectAction.selectedElementsIDs,
                            target.id
                        )
                    };
                } else if (event.shiftKey) {
                    // Range selection
                    return {
                        ...selectAction,
                        selectedElementsIDs: this.extendSelection(
                            selectAction.selectedElementsIDs,
                            target.id
                        )
                    };
                }
            }
            return action;
        });
    }
    
    private toggleSelection(currentSelection: string[], targetId: string): string[] {
        if (currentSelection.includes(targetId)) {
            return currentSelection.filter(id => id !== targetId);
        } else {
            return [...currentSelection, targetId];
        }
    }
    
    private extendSelection(currentSelection: string[], targetId: string): string[] {
        // Implement range selection logic based on your diagram structure
        // This is a simplified version
        return [...new Set([...currentSelection, targetId])];
    }
}
```

### Focus Management

For focus-like behavior, you can use existing Sprotty actions like `CenterAction` and `SelectAction`, or create custom actions:

#### Using Built-in Actions

```typescript
import { injectable } from 'inversify';
import { MouseListener, SModelElementImpl, Action } from 'sprotty';
import { CenterAction, SelectAction } from 'sprotty-protocol';

@injectable()
export class FocusMouseListener extends MouseListener {
    
    override doubleClick(target: SModelElementImpl, event: MouseEvent): Action[] {
        // Focus by centering and selecting the element
        return [
            SelectAction.create({ selectedElementsIDs: [target.id] }),
            CenterAction.create([target.id], { animate: true })
        ];
    }
    
    override keyDown(target: SModelElementImpl, event: KeyboardEvent): Action[] {
        if (event.code === 'Enter' || event.code === 'Space') {
            // Focus the element under cursor
            return [
                SelectAction.create({ selectedElementsIDs: [target.id] }),
                CenterAction.create([target.id], { animate: true })
            ];
        }
        return [];
    }
}
```

#### Creating Custom Focus Action

If you need custom focus behavior, create a custom action:

```typescript
import { Action } from 'sprotty-protocol';

export interface FocusAction extends Action {
    kind: typeof FocusAction.KIND;
    elementId: string;
    showIndicator?: boolean;
}

export namespace FocusAction {
    export const KIND = 'focus';
    
    export function create(options: { elementId: string, showIndicator?: boolean }): FocusAction {
        return {
            kind: KIND,
            elementId: options.elementId,
            showIndicator: options.showIndicator ?? true
        };
    }
}
```

#### Custom Focus Handler

```typescript
import { injectable, inject } from 'inversify';
import { IActionHandler, Action, TYPES, IActionDispatcher } from 'sprotty';
import { CenterAction, SelectAction } from 'sprotty-protocol';

@injectable()
export class FocusActionHandler implements IActionHandler {
    
    @inject(TYPES.IActionDispatcher) protected actionDispatcher: IActionDispatcher;
    
    private focusedElement: string | undefined;
    
    handle(action: Action): void {
        if (action.kind === FocusAction.KIND) {
            const focusAction = action as FocusAction;
            this.setFocus(focusAction.elementId, focusAction.showIndicator);
        }
    }
    
    private setFocus(elementId: string, showIndicator: boolean = true): void {
        // Remove previous focus indicator
        if (this.focusedElement) {
            this.removeFocusIndicator(this.focusedElement);
        }
        
        // Set new focus
        this.focusedElement = elementId;
        
        // Dispatch built-in actions for centering and selection
        const actions: Action[] = [
            SelectAction.create({ selectedElementsIDs: [elementId] }),
            CenterAction.create([elementId], { animate: true })
        ];
        
        this.actionDispatcher.dispatchAll(actions);
        
        // Add visual focus indicator if requested
        if (showIndicator) {
            this.addFocusIndicator(elementId);
        }
    }
    
    private addFocusIndicator(elementId: string): void {
        const element = document.querySelector(`[id="${elementId}"]`);
        if (element) {
            element.classList.add('focused');
        }
    }
    
    private removeFocusIndicator(elementId: string): void {
        const element = document.querySelector(`[id="${elementId}"]`);
        if (element) {
            element.classList.remove('focused');
        }
    }
}
```

## Projection Bars and Viewport Interactions

Projection bars provide minimap-style navigation for large diagrams.

### Viewport Setup

```typescript
import { ContainerModule } from 'inversify';
import { 
    TYPES, 
    ViewportRootElementImpl, 
    ProjectedViewportView,
    configureModelElement,
    configureViewerOptions 
} from 'sprotty';

const projectionModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    const context = { bind, unbind, isBound, rebind };
    
    // Use viewport root with projected view (projection bars are automatically rendered)
    configureModelElement(context, 'graph', ViewportRootElementImpl, ProjectedViewportView);
    
    // Standard viewer options (no special projection configuration needed)
    configureViewerOptions(context, {
        needsClientLayout: true,
        baseDiv: 'sprotty'
    });
});
```

### Projectable Elements

Make elements appear in projection bars:

```typescript
import { SNode, Projectable, ViewportRootElement } from 'sprotty-protocol';

// Create model with projectable elements
const model: ViewportRootElement = {
    type: 'graph',  // Must match your DI configuration
    id: 'root',
    children: [
        {
            id: 'node-1',
            type: 'node:rect',
            position: { x: 100, y: 100 },
            size: { width: 80, height: 60 },
            // Elements with projectionCssClasses appear in projection bars
            projectionCssClasses: ['node-projection']
        } as SNode & Projectable,
        {
            id: 'node-2', 
            type: 'node:circle',
            position: { x: 300, y: 200 },
            size: { width: 60, height: 60 },
            // Multiple CSS classes for styling
            projectionCssClasses: ['node-projection', 'important-node']
        } as SNode & Projectable,
        {
            id: 'edge-1',
            type: 'edge',
            sourceId: 'node-1',
            targetId: 'node-2'
            // No projectionCssClasses - this element won't appear in projection bars
        }
    ]
};
```

### Custom Projection Styling

Style the projection bars and individual element projections:

```css
/* Projection bar containers (horizontal at bottom, vertical at right) */
.sprotty-projection-bar {
    background-color: rgba(205, 224, 241, 0.5);
}

/* Viewport indicator (shows current view area) */
.sprotty-viewport {
    border-color: rgba(105, 162, 210, 0.8);
    border-width: 2px;
    border-style: solid;
}

/* Individual element projections (using CSS classes from projectionCssClasses) */
.node-projection {
    background-color: rgba(255, 140, 0, 0.2);
}

.important-node {
    background-color: rgba(255, 100, 100, 0.8);
    box-shadow: 0 0 4px rgba(255, 0, 0, 0.5);
}
```
