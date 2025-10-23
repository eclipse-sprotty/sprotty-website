---
title: 'Animation and Transitions'
---

{{< toc >}}

## Introduction

Animations bring diagrams to life by providing visual feedback, guiding user attention, and creating smooth transitions between states. Sprotty offers two complementary approaches to animation: **CSS-based animations** for simple, performant effects, and **programmatic animations** for complex, coordinated transitions.

### When to Use Animations

Animations enhance user experience when they:

- **Provide feedback**: Confirm user actions (clicks, drags, selections)
- **Guide attention**: Draw focus to important changes or updates
- **Show relationships**: Illustrate connections or data flow between elements
- **Smooth transitions**: Make state changes feel natural and understandable
- **Add polish**: Create a professional, refined interface

### Animation Approaches

**CSS Animations**: Best for simple, repeating, or hover effects. Highly performant and easy to maintain.

**Programmatic Animations**: Best for coordinated multi-element transitions, complex timing, or animations that depend on model state.

## Animation Basics

Sprotty's programmatic animation system is built around the `Animation` class, which integrates with the command execution lifecycle to create smooth, coordinated transitions.

### The Animation Class

Every programmatic animation in Sprotty extends the `Animation` base class:

```typescript
import { Animation, CommandExecutionContext, SModelRootImpl } from 'sprotty';

export class MyCustomAnimation extends Animation {
    constructor(
        protected model: SModelRootImpl,
        context: CommandExecutionContext
    ) {
        super(context);
        // Set animation duration (in milliseconds)
        context.duration = 300;
    }

    tween(t: number, context: CommandExecutionContext): SModelRootImpl {
        // t ranges from 0 to 1 over the animation duration
        // Mutate model elements as needed and return this.model
        return this.model;
    }
}
```

### Animation Lifecycle

1. **Creation**: Animation is instantiated with the model and context
2. **Start**: `start()` method is called, beginning the animation loop
3. **Tweening**: `tween(t)` is called repeatedly with t from 0 to 1
4. **Completion**: Promise resolves with the final model state

### Integration with Commands

Animations are typically triggered from commands:

```typescript
import { Command, CommandExecutionContext, CommandReturn } from 'sprotty';

export class AnimatedCommand extends Command {
    static KIND = 'animated-command';

    execute(context: CommandExecutionContext): CommandReturn {
        const animation = new MyCustomAnimation(context.root, context);
        return animation.start();
    }

    undo(context: CommandExecutionContext): CommandReturn {
        // Return to previous state, optionally with animation
        return context.root;
    }

    redo(context: CommandExecutionContext): CommandReturn {
        return this.execute(context);
    }
}
```

## Built-in Animations

Sprotty provides several ready-to-use animations for common scenarios.

### MoveAnimation

Smoothly repositions elements to new positions:

```typescript
import { MoveAnimation, ResolvedElementMove } from 'sprotty';

// Define element movements
const moves: ResolvedElementMove[] = [
    {
        elementId: 'node1',
        fromPosition: { x: 100, y: 100 },
        toPosition: { x: 300, y: 200 }
    }
];

const animation = new MoveAnimation(context.root, moves, context);
return animation.start();
```

### FadeAnimation

Gradually changes element opacity:

```typescript
import { FadeAnimation } from 'sprotty';

// Fade elements in or out
const animation = new FadeAnimation(
    context.root,
    ['node1', 'node2'],  // Element IDs
    'in',                 // 'in' or 'out'
    context
);
return animation.start();
```

### MorphAnimation

Morphs between two complete model states:

```typescript
import { MorphAnimation } from 'sprotty';

const animation = new MorphAnimation(
    oldModel,   // Previous model state
    newModel,   // New model state
    context
);
return animation.start();
```

### CompoundAnimation

Combines multiple animations into a sequence:

```typescript
import { CompoundAnimation } from 'sprotty';

export class MyCompoundAnimation extends CompoundAnimation {
    constructor(model: SModelRootImpl, context: CommandExecutionContext) {
        super(context);
        
        // Animations will execute in sequence
        this.animations = [
            new FadeAnimation(model, ['node1'], 'out', context),
            new MoveAnimation(model, moves, context),
            new FadeAnimation(model, ['node1'], 'in', context)
        ];
    }
}
```

## CSS-Based Animations

CSS animations are ideal for simple effects, hover states, and repeating animations. They're highly performant because they run on the GPU and don't require JavaScript execution on every frame.

### CSS Transitions

Smoothly animate property changes:

```css
/* Basic transition on hover */
.sprotty-node {
    transition: all 0.3s ease-out;
}

.sprotty-node:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

/* Transition on selection */
.sprotty-node.selected {
    stroke-width: 3px;
    stroke: #007acc;
    transition: stroke 0.2s ease-in-out, stroke-width 0.2s ease-in-out;
}
```

### CSS Keyframe Animations

Create complex, repeating animations:

```css
/* Pulsing animation */
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.8;
    }
}

.node-loading {
    animation: pulse 2s ease-in-out infinite;
}

/* Rotating spinner */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.node-spinner {
    animation: spin 1s linear infinite;
}

/* Flowing edge animation - complete pattern */
@keyframes dash-flow {
    from {
        stroke-dashoffset: 100;
    }
    to {
        stroke-dashoffset: 0;
    }
}

.edge-animated path {
    stroke-dasharray: 80 20;        /* Create dashed pattern */
    stroke-linecap: round;          /* Smooth dash ends */
    animation: dash-flow 2s linear; /* Animate offset */
}
```

**How edge flow works:**

- `stroke-dasharray`: Creates the dash pattern (80px dash, 20px gap)
- `stroke-dashoffset`: Shifts the pattern along the path
- `stroke-linecap: round`: Makes dash ends smooth and rounded
- Animating `stroke-dashoffset` creates the illusion of flow

### Animating SVG Properties

Target specific SVG attributes for smooth transitions:

```css
/* Animate fill color */
.sprotty-node rect {
    fill: #e0e0e0;
    transition: fill 0.3s ease;
}

.sprotty-node.state-success rect {
    fill: #4caf50;
}

.sprotty-node.state-error rect {
    fill: #f44336;
}

/* Animate stroke properties */
.sprotty-edge path {
    stroke: #666;
    stroke-width: 2;
    transition: stroke 0.2s, stroke-width 0.2s;
}

.sprotty-edge:hover path {
    stroke: #007acc;
    stroke-width: 3;
}

/* Transform animations (GPU-accelerated) */
.sprotty-node {
    transform-origin: center;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.sprotty-node.emphasized {
    transform: scale(1.15) translateZ(0);  /* translateZ forces GPU */
}
```

### SVG Transform Best Practices

When applying transforms to SVG elements in views, use a **nested `<g>` structure** to avoid conflicts with Sprotty's positioning:

```tsx
render(node: Readonly<AnimatedNode>, context: RenderingContext): VNode {
    const scale = node.scale || 1;
    const rotation = node.rotation || 0;
    
    // Calculate transform centered on the node
    const needsTransform = scale !== 1 || rotation !== 0;
    const transform = needsTransform ?
        `translate(${node.size.width / 2}, ${node.size.height / 2}) ` +
        `scale(${scale}) rotate(${rotation}) ` +
        `translate(${-node.size.width / 2}, ${-node.size.height / 2})` :
        undefined;
    
    return <g class-animated-node={true}>  {/* Outer: positioned by Sprotty */}
        <g {...(transform ? { transform } : {})}>  {/* Inner: custom transforms */}
            <rect width={node.size.width} height={node.size.height} />
            {context.renderChildren(node)}
        </g>
    </g>;
}
```

**Key principles:**

1. **Outer `<g>`**: Positioned by Sprotty - don't add transform attributes here
2. **Inner `<g>`**: Apply your custom scale/rotation transforms here
3. **Conditional attributes**: Use `{...(condition ? { attr: value } : {})}` to avoid `undefined` errors
4. **Center transforms**: Translate to center, apply transform, translate back

**For CSS animations on SVG elements:**

```css
/* Critical properties for SVG animations */
.loading-spinner {
    animation: spin 1s linear infinite;
    transform-origin: center;  /* Ensure rotation happens from center */
    transform-box: fill-box;   /* Use element's bounding box, not viewport */
}

.active-pulse {
    animation: pulse-dot 1.5s ease-in-out infinite;
    transform-origin: center;
    transform-box: fill-box;
}
```

The `transform-box: fill-box` property is **critical for SVG** - it tells the browser to use the element's bounding box as the reference, not the entire SVG viewport. Without it, transforms may appear in the wrong position.

### Combining CSS with Model Updates

Trigger CSS animations by changing model properties:

```typescript
// In your view
render(node: Readonly<AnimatedNode>, context: RenderingContext): VNode {
    return <g class-node-pulsing={node.isLoading}
              class-node-success={node.state === 'success'}
              class-node-error={node.state === 'error'}>
        <rect width={node.size.width} height={node.size.height} />
    </g>;
}
```

```css
/* CSS automatically animates the transition */
.node-pulsing {
    animation: pulse 1.5s ease-in-out infinite;
}

.node-success {
    fill: #4caf50;
    transition: fill 0.4s ease-out;
}

.node-error {
    fill: #f44336;
    animation: shake 0.5s ease-in-out;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}
```

### Model-Driven CSS Animations

A powerful pattern is using model properties to programmatically control CSS animations. This combines the performance of CSS with the flexibility of programmatic control:

```typescript
// Define the model with an animation control property
interface AnimatedNode extends SNode {
    animationClass?: string;  // Controls which CSS animation to apply
    state?: NodeState;
}

// In your custom view, map the property to CSS classes
@injectable()
export class AnimatedNodeView implements IView {
    render(node: Readonly<AnimatedNode>, context: RenderingContext): VNode {
        const animationClass = node.animationClass || '';
        
        return <g class-animated-node={true}
                  class-glow-low={animationClass === 'glow-low'}
                  class-glow-medium={animationClass === 'glow-medium'}
                  class-glow-high={animationClass === 'glow-high'}>
            <rect width={node.size.width} height={node.size.height} />
            {context.renderChildren(node)}
        </g>;
    }
}

// In your animation, update the property to trigger CSS animations
export class GlowAnimation extends Animation {
    protected elementId: string;

    constructor(
        protected model: SModelRootImpl,
        elementId: string,
        context: CommandExecutionContext
    ) {
        super(context);
        this.elementId = elementId;
        context.duration = 1500;
    }

    tween(t: number): SModelRootImpl {
        const element = this.model.index.getById(this.elementId);
        if (!element) return this.model;
        
        // Change the animation class based on progress
        const intensity = Math.sin(t * Math.PI);
        if (intensity < 0.3) {
            (element as any).animationClass = 'glow-low';
        } else if (intensity < 0.7) {
            (element as any).animationClass = 'glow-medium';
        } else {
            (element as any).animationClass = 'glow-high';
        }
        
        return this.model;
    }
}
```

The corresponding CSS defines the animation effects:

```css
/* Glow effects with increasing intensity */
.glow-low {
    filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.6));
    transition: filter 0.3s ease;
}

.glow-medium {
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.8));
    transition: filter 0.3s ease;
}

.glow-high {
    /* Multiple shadows for maximum intensity */
    filter: drop-shadow(0 0 20px rgba(255, 215, 0, 1))
            drop-shadow(0 0 30px rgba(255, 165, 0, 0.6));
    transition: filter 0.3s ease;
}
```

**Important:** Glow colors must contrast with your background. Use bright colors like gold (`#FFD700`) or orange (`#FFA500`) rather than white, which won't be visible on light backgrounds.

**Benefits of this pattern:**

- CSS handles the actual animation rendering (GPU-accelerated)
- TypeScript controls when and which animations play
- Clean separation between animation logic and visual effects
- Easy to add new animation variations by adding CSS classes

### When to Use CSS vs Programmatic

**Use CSS animations when:**

- Simple property transitions (color, size, opacity)
- Hover and interactive feedback
- Repeating or looping animations
- Performance is critical (CSS uses GPU)
- Animations don't depend on complex model state

**Use programmatic animations when:**

- Coordinating multiple element movements
- Complex timing or sequencing
- Animation depends on computed values
- Need to update model state during animation
- Precise control over animation lifecycle

## Custom Programmatic Animations

Create custom animations by extending the `Animation` class and implementing the `tween()` method.

### Basic Custom Animation

```typescript
import { Animation, CommandExecutionContext, SModelRootImpl } from 'sprotty';
import { SNodeImpl } from 'sprotty-protocol';

export class BounceAnimation extends Animation {
    constructor(
        protected model: SModelRootImpl,
        protected elementId: string,
        context: CommandExecutionContext
    ) {
        super(context);
        context.duration = 600;  // 600ms animation
    }

    tween(t: number, context: CommandExecutionContext): SModelRootImpl {
        // Find the element to animate
        const element = this.model.index.getById(this.elementId);
        if (!(element instanceof SNodeImpl)) {
            return this.model;
        }

        // Calculate bounce offset using easing function
        const bounceHeight = 50;
        const offset = bounceHeight * this.easeOutBounce(t);

        // Directly mutate the element position
        element.position = {
            x: element.position.x,
            y: element.position.y - offset
        };

        return this.model;
    }

    private easeOutBounce(t: number): number {
        if (t < 1 / 2.75) {
            return 7.5625 * t * t;
        } else if (t < 2 / 2.75) {
            t -= 1.5 / 2.75;
            return 7.5625 * t * t + 0.75;
        } else if (t < 2.5 / 2.75) {
            t -= 2.25 / 2.75;
            return 7.5625 * t * t + 0.9375;
        } else {
            t -= 2.625 / 2.75;
            return 7.5625 * t * t + 0.984375;
        }
    }
}
```

### Animating Multiple Properties

```typescript
export class PulseAnimation extends Animation {
    private originalSize: { width: number; height: number };

    constructor(
        protected model: SModelRootImpl,
        protected elementId: string,
        context: CommandExecutionContext
    ) {
        super(context);
        context.duration = 400;
        
        const element = this.model.index.getById(elementId) as SNodeImpl;
        this.originalSize = { ...element.size };
    }

    tween(t: number, context: CommandExecutionContext): SModelRootImpl {
        const element = this.model.index.getById(this.elementId) as SNodeImpl;
        if (!element) return this.model;

        // Pulse: grow then shrink
        const scale = 1 + 0.2 * Math.sin(t * Math.PI);
        const opacity = 0.8 + 0.2 * Math.sin(t * Math.PI);

        // Directly mutate element properties
        element.size = {
            width: this.originalSize.width * scale,
            height: this.originalSize.height * scale
        };
        (element as any).opacity = opacity;

        return this.model;
    }
}
```

### Direct Element Mutation

In practice, Sprotty animations work best with **direct mutation** of model elements rather than creating new copies. The model index maintains references to elements, and you should mutate properties directly:

```typescript
export class BounceAnimation extends Animation {
    private originalPosition: { x: number; y: number } | null = null;

    constructor(
        protected model: SModelRootImpl,
        protected elementId: string,
        context: CommandExecutionContext
    ) {
        super(context);
        context.duration = 600;
        
        const element = this.model.index.getById(elementId);
        if (element instanceof SNodeImpl) {
            this.originalPosition = { ...element.position };
        }
    }

    tween(t: number): SModelRootImpl {
        const element = this.model.index.getById(this.elementId);
        if (!(element instanceof SNodeImpl) || !this.originalPosition) {
            return this.model;
        }

        const bounceHeight = 50;
        const progress = Easing.easeOutBounce(t);
        const offset = bounceHeight * (1 - progress);

        // Directly mutate the element properties
        element.position = {
            x: this.originalPosition.x,
            y: this.originalPosition.y - offset
        };

        // Return the model (Sprotty will detect the changes)
        return this.model;
    }
}
```

**Key points:**

- Model elements in the index should be mutated directly
- No need to remove and re-add elements to the index
- Simply return `this.model` after making changes
- Sprotty's rendering system will detect the property changes and update the view

### Edge Animations

Animate edges to show flow, connections, or data movement. This example demonstrates a complete edge flow animation that returns to a solid line at the end:

```typescript
export class EdgeFlowAnimation extends Animation {
    constructor(
        protected model: SModelRootImpl,
        protected edgeId: string,
        context: CommandExecutionContext
    ) {
        super(context);
        context.duration = 4000;  // Longer duration for smooth flow
    }

    tween(t: number): SModelRootImpl {
        const edge = this.model.index.getById(this.edgeId);
        if (!edge) return this.model;

        if (t < 1) {
            // Animate dash offset for flow effect
            (edge as any).strokeDashOffset = 80 * (1 - t);
            (edge as any).animated = true;
        } else {
            // Return to solid line at end
            (edge as any).strokeDashOffset = 0;
            (edge as any).animated = false;
        }

        return this.model;
    }
}
```

The corresponding view should handle the `animated` property:

```tsx
render(edge: Readonly<AnimatedEdge>, context: RenderingContext): VNode {
    const animated = edge.animated || false;
    const strokeDashOffset = edge.strokeDashOffset || 0;
    
    return <g class-animated-edge={true}
              class-edge-animated={animated}>
        <path d={this.getPath(edge)}
              stroke={edge.color || '#666'}
              stroke-width="2"
              stroke-dasharray={animated ? '80 20' : 'none'}
              stroke-dashoffset={strokeDashOffset}
              stroke-linecap="round" />
    </g>;
}
```

The CSS completes the pattern:

```css
.animated-edge .edge-path {
    transition: stroke-dasharray 0.3s ease;
}

.edge-animated .edge-path {
    stroke-dasharray: 80 20;
    stroke-linecap: round;  /* Smooth dash ends */
}
```

## Easing Functions

Easing functions control the rate of change during an animation, creating natural-feeling motion.

### Built-in Easing

Sprotty supports standard easing functions:

```typescript
// Linear (constant speed)
function linear(t: number): number {
    return t;
}

// Ease-in (slow start, fast end)
function easeIn(t: number): number {
    return t * t;
}

// Ease-out (fast start, slow end)
function easeOut(t: number): number {
    return t * (2 - t);
}

// Ease-in-out (slow start and end)
function easeInOut(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
```

### CSS Easing Functions

CSS provides powerful easing through `cubic-bezier` and timing functions:

```css
/* Standard timing functions */
.ease-linear { transition-timing-function: linear; }
.ease-in { transition-timing-function: ease-in; }
.ease-out { transition-timing-function: ease-out; }
.ease-in-out { transition-timing-function: ease-in-out; }

/* Custom cubic-bezier curves */
.ease-smooth { 
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

.ease-bounce {
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.ease-spring {
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Step-based animations */
.steps-animation {
    transition-timing-function: steps(5, end);
}
```

### Custom Programmatic Easing

Create sophisticated easing functions for programmatic animations:

```typescript
export namespace Easing {
    // Bounce effect (like a ball dropping)
    export function easeOutBounce(t: number): number {
        if (t < 1 / 2.75) {
            return 7.5625 * t * t;
        } else if (t < 2 / 2.75) {
            t -= 1.5 / 2.75;
            return 7.5625 * t * t + 0.75;
        } else if (t < 2.5 / 2.75) {
            t -= 2.25 / 2.75;
            return 7.5625 * t * t + 0.9375;
        } else {
            t -= 2.625 / 2.75;
            return 7.5625 * t * t + 0.984375;
        }
    }

    // Elastic effect (like a spring)
    export function easeOutElastic(t: number): number {
        const p = 0.3;
        const s = p / 4;
        return Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
    }

    // Back effect (slight overshoot)
    export function easeInOutBack(t: number): number {
        const s = 1.70158 * 1.525;
        t *= 2;
        if (t < 1) {
            return 0.5 * (t * t * ((s + 1) * t - s));
        }
        t -= 2;
        return 0.5 * (t * t * ((s + 1) * t + s) + 2);
    }

    // Circular easing
    export function easeOutCirc(t: number): number {
        return Math.sqrt(1 - (--t * t));
    }
}
```

### Using Custom Easing

Apply easing functions in your animations:

```typescript
export class SmoothMoveAnimation extends Animation {
    tween(t: number, context: CommandExecutionContext): SModelRootImpl {
        // Apply easing to the time parameter
        const easedT = Easing.easeOutCirc(t);
        
        // Use eased value for interpolation
        const element = this.model.index.getById(this.elementId) as SNodeImpl;
        if (!element) return this.model;

        // Directly mutate element position
        element.position = {
            x: this.startX + (this.endX - this.startX) * easedT,
            y: this.startY + (this.endY - this.startY) * easedT
        };

        return this.model;
    }
}
```

## State Transitions

Animating state changes makes your diagrams feel responsive and alive.

### Model State Animation

Define states in your model:

```typescript
export type NodeState = 'idle' | 'active' | 'success' | 'error' | 'loading';

export interface StateNode extends SNode {
    state: NodeState;
    previousState?: NodeState;
}
```

Create an animation that transitions between states:

```typescript
export class StateTransitionAnimation extends Animation {
    private stateColors = {
        idle: '#e0e0e0',
        active: '#2196f3',
        success: '#4caf50',
        error: '#f44336',
        loading: '#ff9800'
    };

    constructor(
        protected model: SModelRootImpl,
        protected elementId: string,
        protected fromState: NodeState,
        protected toState: NodeState,
        context: CommandExecutionContext
    ) {
        super(context);
        context.duration = 400;
    }

    tween(t: number, context: CommandExecutionContext): SModelRootImpl {
        const element = this.model.index.getById(this.elementId);
        if (!element) return this.model;

        // Interpolate colors between states
        const fromColor = this.stateColors[this.fromState];
        const toColor = this.stateColors[this.toState];
        const interpolatedColor = this.interpolateColor(fromColor, toColor, t);

        // Apply easing for smooth transition
        const easedT = Easing.easeInOutBack(t);

        // Directly mutate element properties
        (element as any).color = interpolatedColor;
        (element as any).scale = 1 + 0.1 * Math.sin(easedT * Math.PI);

        return this.model;
    }

    private interpolateColor(from: string, to: string, t: number): string {
        // Convert hex to RGB, interpolate, convert back
        const fromRgb = this.hexToRgb(from);
        const toRgb = this.hexToRgb(to);
        
        const r = Math.round(fromRgb.r + (toRgb.r - fromRgb.r) * t);
        const g = Math.round(fromRgb.g + (toRgb.g - fromRgb.g) * t);
        const b = Math.round(fromRgb.b + (toRgb.b - fromRgb.b) * t);
        
        return this.rgbToHex(r, g, b);
    }

    private hexToRgb(hex: string): { r: number; g: number; b: number } {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    }

    private rgbToHex(r: number, g: number, b: number): string {
        return '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    }
}
```

### Size and Position Morphing

Smoothly transition element dimensions:

```typescript
export class MorphSizeAnimation extends Animation {
    constructor(
        protected model: SModelRootImpl,
        protected elementId: string,
        protected fromSize: { width: number; height: number },
        protected toSize: { width: number; height: number },
        context: CommandExecutionContext
    ) {
        super(context);
        context.duration = 300;
    }

    tween(t: number, context: CommandExecutionContext): SModelRootImpl {
        const element = this.model.index.getById(this.elementId) as SNodeImpl;
        if (!element) return this.model;

        const easedT = Easing.easeOutCirc(t);

        // Directly mutate element size
        element.size = {
            width: this.fromSize.width + (this.toSize.width - this.fromSize.width) * easedT,
            height: this.fromSize.height + (this.toSize.height - this.fromSize.height) * easedT
        };

        return this.model;
    }
}
```

### State Indicator Icons

A practical pattern for visualizing state is rendering different icons based on the current state. This combines SVG rendering with CSS animations for a polished result:

```tsx
@injectable()
export class AnimatedNodeView implements IView {
    render(node: Readonly<StateNode>, context: RenderingContext): VNode {
        const state = node.state || 'idle';
        
        return <g class-animated-node={true}
                  class-state-{state}={true}>
            <rect width={node.size.width} height={node.size.height} />
            {this.renderStateIndicator(state, node.size.width, node.size.height)}
            {context.renderChildren(node)}
        </g>;
    }

    protected renderStateIndicator(state: NodeState, width: number, height: number): VNode | undefined {
        const iconSize = 16;
        const x = width - iconSize - 8;
        const y = 8;

        switch (state) {
            case 'loading':
                // Rotating spinner with visible arc
                return <g transform={`translate(${x}, ${y})`}>
                    <circle cx={iconSize / 2} cy={iconSize / 2} r={iconSize / 2 - 2}
                        class-loading-spinner={true}
                        fill="none"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-dasharray="28 10"   // Creates visible arc
                        stroke-linecap="round" />  // Smooth ends
                </g>;
            
            case 'active':
                // Pulsing circle indicator
                return <g transform={`translate(${x}, ${y})`}>
                    <circle cx={iconSize / 2} cy={iconSize / 2} r={4}
                        class-active-pulse={true}  // CSS animation
                        fill="#fff" />
                </g>;
            
            case 'success':
                // Checkmark icon
                return <g transform={`translate(${x}, ${y})`}>
                    <path d="M3,8 L7,12 L13,4"
                        fill="none"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round" />
                </g>;
            
            case 'error':
                // X icon
                return <g transform={`translate(${x}, ${y})`}>
                    <path d="M4,4 L12,12 M12,4 L4,12"
                        fill="none"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round" />
                </g>;
            
            default:
                return undefined;
        }
    }
}
```

The CSS provides the animations for dynamic states:

```css
/* Loading spinner - rotates continuously */
.loading-spinner {
    animation: spin 1s linear infinite;
    transform-origin: center;
    transform-box: fill-box;  /* Critical for SVG */
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Active pulse - scales and fades */
.active-pulse {
    animation: pulse-dot 1.5s ease-in-out infinite;
    transform-origin: center;
    transform-box: fill-box;
}

@keyframes pulse-dot {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.3);
    }
}
```

**Key techniques:**

- **`stroke-dasharray="28 10"`**: Creates a visible arc instead of a full circle for the spinner
- **`stroke-linecap="round"`**: Makes the arc ends smooth and rounded
- **`transform-box: fill-box`**: Critical for SVG - ensures transforms use the element's bounding box, not the viewport
- **`transform-origin: center`**: Ensures rotation and scaling happen from the center of the element

## Triggering Animations

Animations can be triggered in several ways, depending on your application's needs.

### From Custom Actions

Define an action that triggers an animation:

```typescript
import { Action } from 'sprotty-protocol';

export interface TriggerAnimationAction extends Action {
    kind: typeof TriggerAnimationAction.KIND;
    elementId: string;
    animationType: 'bounce' | 'pulse' | 'shake' | 'spin';
}

export namespace TriggerAnimationAction {
    export const KIND = 'triggerAnimation';

    export function create(elementId: string, animationType: string): TriggerAnimationAction {
        return { kind: KIND, elementId, animationType };
    }
}
```

Handle the action with a command:

```typescript
import { Command, CommandExecutionContext, CommandReturn } from 'sprotty';

@injectable()
export class TriggerAnimationCommand extends Command {
    static KIND = TriggerAnimationAction.KIND;

    constructor(@inject(TYPES.Action) private action: TriggerAnimationAction) {
        super();
    }

    execute(context: CommandExecutionContext): CommandReturn {
        const { elementId, animationType } = this.action;

        let animation: Animation;
        switch (animationType) {
            case 'bounce':
                animation = new BounceAnimation(context.root, elementId, context);
                break;
            case 'pulse':
                animation = new PulseAnimation(context.root, elementId, context);
                break;
            // ... other animation types
            default:
                return context.root;
        }

        return animation.start();
    }

    undo(context: CommandExecutionContext): CommandReturn {
        return context.root;
    }

    redo(context: CommandExecutionContext): CommandReturn {
        return this.execute(context);
    }
}
```

Register the command handler:

```typescript
configureCommand(context, TriggerAnimationCommand);
```

Dispatch the action:

```typescript
dispatcher.dispatch(TriggerAnimationAction.create('node1', 'bounce'));
```

### From Button Handlers

Trigger animations from interactive buttons:

```typescript
@injectable()
export class AnimationButtonHandler implements IButtonHandler {
    buttonPressed(button: SButton): Action[] {
        if (button.type === 'button:animate') {
            const parentId = button.parent?.id || '';
            return [TriggerAnimationAction.create(parentId, 'pulse')];
        }
        return [];
    }
}
```

### Automatic Model Update Animations

Animate whenever the model changes:

```typescript
@injectable()
export class AnimatedModelSource extends LocalModelSource {
    override updateModel(newModel: SModelRootImpl): Promise<void> {
        if (this.currentModel) {
            // Create morph animation between old and new model
            const animation = new MorphAnimation(
                this.currentModel,
                newModel,
                this.actionDispatcher
            );
            return animation.start().then(() => {
                this.currentModel = newModel;
                return super.updateModel(newModel);
            });
        }
        return super.updateModel(newModel);
    }
}
```

### User Interaction Triggers

Respond to user events:

```typescript
@injectable()
export class AnimatedMouseListener extends MouseListener {
    override doubleClick(target: SModelElementImpl, event: MouseEvent): Action[] {
        // Trigger animation on double-click
        return [TriggerAnimationAction.create(target.id, 'bounce')];
    }

    override mouseDown(target: SModelElementImpl, event: MouseEvent): Action[] {
        // Quick pulse feedback
        return [TriggerAnimationAction.create(target.id, 'pulse')];
    }
}
```

## Animation Composition

Combine multiple animations to create sophisticated effects.

### Sequential Animations

Execute animations one after another:

```typescript
export class SequentialAnimation extends CompoundAnimation {
    constructor(
        model: SModelRootImpl,
        elementId: string,
        context: CommandExecutionContext
    ) {
        super(context);
        
        // Each animation waits for the previous to complete
        this.animations = [
            new FadeAnimation(model, [elementId], 'out', context),
            new MoveAnimation(model, [/* moves */], context),
            new BounceAnimation(model, elementId, context),
            new FadeAnimation(model, [elementId], 'in', context)
        ];
    }
}
```

### Parallel Animations

Run multiple animations simultaneously:

```typescript
export class ParallelAnimation extends Animation {
    private animations: Animation[];

    constructor(
        model: SModelRootImpl,
        elementIds: string[],
        context: CommandExecutionContext
    ) {
        super(context);
        context.duration = 500;
        
        // Create animations for multiple elements
        this.animations = elementIds.map(id =>
            new PulseAnimation(model, id, context)
        );
    }

    tween(t: number, context: CommandExecutionContext): SModelRootImpl {
        // Apply all animations to the same model
        let result = this.model;
        for (const animation of this.animations) {
            result = animation.tween(t, context);
        }
        return result;
    }
}
```

### Choreographed Sequences

Create complex, timed sequences:

```typescript
export class ChoreographedAnimation extends Animation {
    constructor(
        protected model: SModelRootImpl,
        protected elementIds: string[],
        context: CommandExecutionContext
    ) {
        super(context);
        context.duration = 2000;  // 2 second total sequence
    }

    tween(t: number, context: CommandExecutionContext): SModelRootImpl {
        let result = this.model;

        // Stagger animations with delays
        this.elementIds.forEach((id, index) => {
            const delay = index * 0.1;  // 100ms delay between elements
            const duration = 0.3;       // Each animation lasts 300ms
            
            // Calculate local time for this element's animation
            const localT = this.calculateLocalTime(t, delay, duration);
            
            if (localT > 0 && localT < 1) {
                // Element is currently animating
                const element = result.index.getById(id);
                if (element) {
                    const scale = 1 + 0.2 * Math.sin(localT * Math.PI);
                    (element as any).scale = scale;
                }
            }
        });

        return result;
    }

    private calculateLocalTime(globalT: number, delay: number, duration: number): number {
        if (globalT < delay) return 0;
        if (globalT > delay + duration) return 1;
        return (globalT - delay) / duration;
    }
}
```

## Performance Considerations

Animations should enhance, not hinder, user experience. Follow these guidelines to maintain smooth, responsive diagrams.

> **Note**: The performance monitoring examples in this section are primarily useful during development and debugging. For production applications, consider removing monitoring code or making it toggleable via a debug flag to avoid performance overhead.

### Frame Budget (60fps)

Target 60 frames per second, giving you approximately 16ms per frame:

```typescript
export class PerformantAnimation extends Animation {
    private cache: Map<string, any> = new Map();

    tween(t: number, context: CommandExecutionContext): SModelRootImpl {
        const startTime = performance.now();

        // Your animation logic here
        const result = this.performAnimation(t);

        const endTime = performance.now();
        const frameTime = endTime - startTime;

        if (frameTime > 16) {
            console.warn(`Frame took ${frameTime}ms - exceeding 60fps budget`);
        }

        return result;
    }
}
```

### Optimize Tween Calculations

Cache expensive computations:

```typescript
export class OptimizedAnimation extends Animation {
    private cachedPath: string;
    private lastT: number = -1;

    tween(t: number, context: CommandExecutionContext): SModelRootImpl {
        // Skip if time hasn't changed enough
        if (Math.abs(t - this.lastT) < 0.01) {
            return this.model;
        }
        this.lastT = t;

        // Cache expensive calculations
        if (!this.cachedPath) {
            this.cachedPath = this.calculateComplexPath();
        }

        // Use cached values in animation
        return this.applyAnimation(t, this.cachedPath);
    }
}
```

### GPU Acceleration

Leverage CSS transforms for better performance:

```css
/* GPU-accelerated properties */
.sprotty-node {
    /* Use transform instead of left/top */
    transform: translateZ(0);  /* Force GPU rendering */
    will-change: transform, opacity;  /* Hint to browser */
}

.sprotty-node.animating {
    /* These properties are GPU-accelerated */
    transform: translate3d(0, 0, 0) scale(1.1) rotate(5deg);
    opacity: 0.9;
}

/* Avoid animating these (CPU-bound) */
.avoid {
    /* Don't animate: width, height, top, left, margin, padding */
}
```

### Performance Monitoring

Track animation performance in development:

```typescript
export class MonitoredAnimation extends Animation {
    private frameCount: number = 0;
    private totalTime: number = 0;

    start(): Promise<SModelRootImpl> {
        const startTime = performance.now();
        
        return super.start().then(result => {
            const endTime = performance.now();
            const totalDuration = endTime - startTime;
            const avgFrameTime = this.totalTime / this.frameCount;
            
            console.log(`Animation completed:
                Duration: ${totalDuration}ms
                Frames: ${this.frameCount}
                Avg frame time: ${avgFrameTime.toFixed(2)}ms
                Target: 16.67ms (60fps)
                FPS: ${(1000 / avgFrameTime).toFixed(1)}`);
            
            return result;
        });
    }

    tween(t: number, context: CommandExecutionContext): SModelRootImpl {
        const frameStart = performance.now();
        const result = super.tween(t, context);
        const frameTime = performance.now() - frameStart;
        
        this.frameCount++;
        this.totalTime += frameTime;
        
        return result;
    }
}
```

### Large Diagram Optimization

For diagrams with many elements:

```typescript
export class ViewportAwareAnimation extends Animation {
    tween(t: number, context: CommandExecutionContext): SModelRootImpl {
        const viewport = this.getViewport(context);
        
        // Only animate visible elements
        const visibleElements = this.getVisibleElements(viewport);
        
        return this.animateElements(visibleElements, t);
    }

    private getVisibleElements(viewport: Viewport): SModelElementImpl[] {
        return this.model.children.filter(child => {
            const bounds = child.bounds;
            return this.isInViewport(bounds, viewport);
        });
    }
}
```

## Best Practices

### Animation Duration Guidelines

Choose appropriate durations for different contexts:

```typescript
const ANIMATION_DURATIONS = {
    instant: 0,           // No animation
    quick: 100,           // Quick feedback (button press)
    normal: 250,          // Standard transitions
    moderate: 400,        // Complex state changes
    slow: 600,            // Dramatic effects
    verySlow: 1000        // Attention-grabbing animations
};
```

**General Rules:**

- **Micro-interactions**: 100-200ms (button clicks, hover feedback)
- **State transitions**: 250-400ms (color changes, size adjustments)
- **Layout changes**: 400-600ms (repositioning, morphing)
- **Decorative effects**: 600-1000ms (celebration animations)

### Accessibility Considerations

Respect user preferences for reduced motion:

```css
/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

```typescript
// Check for reduced motion preference in TypeScript
export function shouldAnimate(): boolean {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    return !mediaQuery.matches;
}

export class AccessibleAnimation extends Animation {
    constructor(model: SModelRootImpl, context: CommandExecutionContext) {
        super(context);
        
        // Drastically reduce duration for reduced motion preference
        context.duration = shouldAnimate() ? 400 : 1;
    }
}
```

### When NOT to Animate

Avoid animations in these scenarios:

**Too Frequent**: Don't animate every tiny change

```typescript
// ❌ Bad: Animating every character typed
onTextChange(text: string) {
    this.animateTextUpdate(text);
}

// ✅ Good: Only animate significant changes
onTextComplete(text: string) {
    this.animateTextUpdate(text);
}
```

**Performance Critical**: Skip animations during intensive operations

```typescript
if (this.isLoadingLargeDataset || this.isProcessing) {
    // Skip animations, update instantly
    this.updateModelImmediate(newModel);
} else {
    this.updateModelAnimated(newModel);
}
```

**User-Initiated Repetitive Actions**: Don't animate repeated user commands

```typescript
// After first animation, reduce or remove subsequent ones
private animationCount = 0;

animate() {
    const duration = Math.max(400 - this.animationCount * 100, 0);
    this.animationCount++;
    
    if (duration > 0) {
        return new Animation(this.model, duration, context).start();
    }
    return Promise.resolve(this.model);
}
```

### Animation Polish

Small details make animations feel professional:

```typescript
// Add subtle secondary motion
export class PolishedAnimation extends Animation {
    tween(t: number, context: CommandExecutionContext): SModelRootImpl {
        const easedT = Easing.easeOutCirc(t);
        
        // Primary animation: move
        const x = this.lerp(this.startX, this.endX, easedT);
        
        // Secondary animation: slight vertical bounce
        const bounceY = 10 * Math.sin(t * Math.PI);
        const y = this.lerp(this.startY, this.endY, easedT) + bounceY;
        
        // Tertiary animation: rotation follows movement
        const rotation = 5 * Math.sin(t * Math.PI);
        
        const element = this.model.index.getById(this.elementId) as SNodeImpl;
        if (!element) return this.model;

        // Directly mutate element
        element.position = { x, y };
        (element as any).rotation = rotation;

        return this.model;
    }

    private lerp(start: number, end: number, t: number): number {
        return start + (end - start) * t;
    }
}
```

Animations are a powerful tool for creating engaging, intuitive diagrams. Master both CSS and programmatic approaches to choose the right technique for each situation.
