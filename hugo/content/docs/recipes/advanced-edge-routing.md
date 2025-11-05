---
title: 'Advanced Edge Routing'
---

{{< toc >}}

## Introduction

Edge routing determines how connections between nodes are drawn in your diagram. Sprotty provides powerful routing capabilities that range from simple straight lines to sophisticated curved paths with custom anchor points and intersection handling. This recipe covers everything you need to create professional, readable edge routing in your diagrams.

### When to Use Different Routing Strategies

Choosing the right routing strategy depends on your diagram's purpose and complexity:

**Polyline Router**: Best for simple, direct connections where clarity is paramount. Ideal for:

- Flow diagrams
- Simple dependency graphs
- Diagrams with minimal edge crossings
- Cases where straight lines convey relationships clearly

**Manhattan Router**: Perfect for technical diagrams requiring orthogonal routing. Best for:

- Circuit diagrams
- Entity-relationship diagrams
- UML class diagrams
- Any diagram where perpendicular connections are expected

**Bezier Router**: Creates smooth, curved connections for aesthetic appeal. Ideal for:

- State machines
- Mind maps
- Artistic or presentation-focused diagrams
- Cases where visual flow matters more than precision

**Custom Routers**: Build your own when you need:

- Domain-specific routing patterns
- Arc or circular routing
- Specialized path calculations
- Unique visual requirements

## Built-in Edge Routers

Sprotty includes three production-ready edge routers, each with distinct characteristics and use cases.

### Polyline Router

The polyline router creates straight-line segments between routing points. It's the simplest and most performant option.

#### Basic Configuration

```typescript
import { SEdge } from 'sprotty-protocol';

const edge: SEdge = {
    id: 'edge1',
    type: 'edge',
    sourceId: 'node1',
    targetId: 'node2',
    routerKind: 'polyline'  // Use polyline routing
};
```

#### With Routing Points

Add intermediate points to control the edge path:

```typescript
const edgeWithPoints: SEdge = {
    id: 'edge2',
    type: 'edge',
    sourceId: 'node1',
    targetId: 'node2',
    routerKind: 'polyline',
    routingPoints: [
        { x: 200, y: 150 },
        { x: 250, y: 200 },
        { x: 300, y: 150 }
    ]
};
```

**Key Features:**

- Direct paths between points
- Support for manual routing points
- Fast rendering performance
- Simple, predictable behavior

### Manhattan Router

The Manhattan router creates orthogonal (right-angled) connections, perfect for technical diagrams.

#### Configuration

```typescript
const manhattanEdge: SEdge = {
    id: 'edge3',
    type: 'edge',
    sourceId: 'node1',
    targetId: 'node2',
    routerKind: 'manhattan'
};
```

#### How Manhattan Routing Works

The Manhattan router:

1. Determines the best side of the source node to connect from
2. Determines the best side of the target node to connect to
3. Creates a path using only horizontal and vertical segments
4. Minimizes the number of turns when possible

```typescript
// Manhattan router with custom options
import { ManhattanEdgeRouter } from 'sprotty';

// The router automatically calculates orthogonal paths
// No routing points needed - it figures out the best path
const autoRoutedEdge: SEdge = {
    id: 'edge4',
    type: 'edge',
    sourceId: 'left-node',
    targetId: 'right-node',
    routerKind: 'manhattan'
    // Router will automatically create the orthogonal path
};
```

**Key Features:**

- Automatic orthogonal path calculation
- Smart corner placement
- Professional technical diagram appearance
- Works well with rectangular nodes

### Bezier Router

The Bezier router creates smooth, curved paths using Bézier splines.

#### Configuration

```typescript
const bezierEdge: SEdge = {
    id: 'edge5',
    type: 'edge',
    sourceId: 'node1',
    targetId: 'node2',
    routerKind: 'bezier'
};
```

#### Bezier Control Points

The Bezier router uses control points to define curve shapes:

```typescript
// Bezier with control points for custom curves
const curvedEdge: SEdge = {
    id: 'edge6',
    type: 'edge',
    sourceId: 'node1',
    targetId: 'node2',
    routerKind: 'bezier',
    routingPoints: [
        // First control point (affects curve from source)
        { x: 150, y: 100 },
        // Second control point (affects curve to target)
        { x: 250, y: 100 }
    ]
};
```

**Key Features:**

- Smooth, curved paths
- Interactive control point editing
- Professional, polished appearance
- Good for state diagrams and flows

#### Bezier Segments

For complex curves, add junction points to create multiple Bezier segments:

```typescript
const multiSegmentBezier: SEdge = {
    id: 'edge7',
    type: 'edge',
    sourceId: 'node1',
    targetId: 'node2',
    routerKind: 'bezier',
    routingPoints: [
        { x: 150, y: 100 },  // Control point after source
        { x: 200, y: 150 },  // Control point before junction
        { x: 250, y: 150 },  // Junction point
        { x: 300, y: 150 },  // Control point after junction
        { x: 350, y: 100 }   // Control point before target
    ]
};
```

### Registering Routers

Routers are automatically registered when you import the routing module:

```typescript
import { ContainerModule } from 'inversify';
import { TYPES, configureModelElement, SEdgeImpl } from 'sprotty';
import routingModule from 'sprotty/lib/features/routing/di.config';

const diagramModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    const context = { bind, unbind, isBound, rebind };
    
    // Configure edge element
    configureModelElement(context, 'edge', SEdgeImpl, PolylineEdgeView);
});

// Create container with routing support
const container = new Container();
container.load(defaultModule, selectModule, moveModule, routingModule, diagramModule);
```

## Custom Edge Routers

Create custom routers when you need specialized routing behavior or visual styles not provided by the built-in routers.

### Extending AbstractEdgeRouter

The easiest way to create a custom router is to extend `AbstractEdgeRouter`:

```typescript
import { injectable } from 'inversify';
import { AbstractEdgeRouter, LinearRouteOptions } from 'sprotty';
import { SRoutableElementImpl } from 'sprotty';
import { RoutedPoint } from 'sprotty';
import { Point } from 'sprotty-protocol';

@injectable()
export class ArcEdgeRouter extends AbstractEdgeRouter {
    static readonly KIND = 'arc';
    
    get kind() {
        return ArcEdgeRouter.KIND;
    }
    
    protected getOptions(edge: SRoutableElementImpl): LinearRouteOptions {
        return {
            minimalPointDistance: 2,
            standardDistance: 20,
            selfEdgeOffset: 0.25
        };
    }
    
    route(edge: SRoutableElementImpl): RoutedPoint[] {
        const source = edge.source;
        const target = edge.target;
        
        if (!source || !target) {
            return [];
        }
        
        // Calculate arc route
        const result: RoutedPoint[] = [];
        
        // Get source anchor point
        const sourceCenter = this.getElementCenter(source);
        const targetCenter = this.getElementCenter(target);
        const sourceAnchor = this.getTranslatedAnchor(
            source, 
            targetCenter, 
            target.parent, 
            edge,
            edge.sourceAnchorCorrection
        );
        
        result.push({ 
            kind: 'source', 
            x: sourceAnchor.x, 
            y: sourceAnchor.y 
        });
        
        // Create arc points
        const arcPoints = this.calculateArcPoints(sourceAnchor, targetCenter);
        arcPoints.forEach(p => {
            result.push({ 
                kind: 'linear', 
                x: p.x, 
                y: p.y 
            });
        });
        
        // Get target anchor point
        const lastArcPoint = arcPoints[arcPoints.length - 1];
        const targetAnchor = this.getTranslatedAnchor(
            target,
            lastArcPoint,
            source.parent,
            edge,
            edge.targetAnchorCorrection
        );
        
        result.push({ 
            kind: 'target', 
            x: targetAnchor.x, 
            y: targetAnchor.y 
        });
        
        return result;
    }
    
    private calculateArcPoints(start: Point, end: Point): Point[] {
        // Calculate intermediate points for an arc
        const points: Point[] = [];
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Arc height is 20% of distance
        const arcHeight = distance * 0.2;
        
        // Create points along the arc
        const segments = 10;
        for (let i = 1; i < segments; i++) {
            const t = i / segments;
            
            // Parabolic arc calculation
            const x = start.x + dx * t;
            const y = start.y + dy * t + 
                     Math.sin(t * Math.PI) * arcHeight;
            
            points.push({ x, y });
        }
        
        return points;
    }
    
    private getElementCenter(element: SConnectableElementImpl): Point {
        return {
            x: element.bounds.x + element.bounds.width / 2,
            y: element.bounds.y + element.bounds.height / 2
        };
    }
    
    createRoutingHandles(edge: SRoutableElementImpl): void {
        // Optional: implement if you want interactive handles
    }
    
    applyHandleMoves(edge: SRoutableElementImpl, moves: ResolvedHandleMove[]): void {
        // Optional: implement if you want draggable routing points
    }
}
```

### Registering Custom Routers

Register your custom router in the DI container:

```typescript
import { ContainerModule } from 'inversify';
import { TYPES } from 'sprotty';

const customRoutingModule = new ContainerModule((bind) => {
    bind(ArcEdgeRouter).toSelf().inSingletonScope();
    bind(TYPES.IEdgeRouter).toService(ArcEdgeRouter);
});
```

### Using Custom Routers

Reference your custom router by its kind:

```typescript
const arcEdge: SEdge = {
    id: 'edge8',
    type: 'edge',
    sourceId: 'node1',
    targetId: 'node2',
    routerKind: 'arc'  // Use custom arc router
};
```

### Step Router Example

Here's another example of a custom router that creates stepped connections:

```typescript
@injectable()
export class StepEdgeRouter extends AbstractEdgeRouter {
    static readonly KIND = 'step';
    
    get kind() {
        return StepEdgeRouter.KIND;
    }
    
    protected getOptions(edge: SRoutableElementImpl): LinearRouteOptions {
        return {
            minimalPointDistance: 2,
            standardDistance: 20,
            selfEdgeOffset: 0.25
        };
    }
    
    route(edge: SRoutableElementImpl): RoutedPoint[] {
        const source = edge.source;
        const target = edge.target;
        
        if (!source || !target) {
            return [];
        }
        
        const result: RoutedPoint[] = [];
        
        // Get anchor points
        const sourceCenter = this.getElementCenter(source);
        const targetCenter = this.getElementCenter(target);
        
        const sourceAnchor = this.getTranslatedAnchor(
            source, targetCenter, target.parent, edge, 
            edge.sourceAnchorCorrection
        );
        
        result.push({ 
            kind: 'source', 
            x: sourceAnchor.x, 
            y: sourceAnchor.y 
        });
        
        // Create stepped path
        const midX = (sourceAnchor.x + targetCenter.x) / 2;
        
        // First step: horizontal
        result.push({ 
            kind: 'linear', 
            x: midX, 
            y: sourceAnchor.y 
        });
        
        // Second step: vertical
        result.push({ 
            kind: 'linear', 
            x: midX, 
            y: targetCenter.y 
        });
        
        // Target anchor
        const targetAnchor = this.getTranslatedAnchor(
            target, { x: midX, y: targetCenter.y }, 
            source.parent, edge, edge.targetAnchorCorrection
        );
        
        result.push({ 
            kind: 'target', 
            x: targetAnchor.x, 
            y: targetAnchor.y 
        });
        
        return result;
    }
    
    private getElementCenter(element: SConnectableElementImpl): Point {
        return {
            x: element.bounds.x + element.bounds.width / 2,
            y: element.bounds.y + element.bounds.height / 2
        };
    }
    
    createRoutingHandles(edge: SRoutableElementImpl): void {
        // No handles for this simple router
    }
    
    applyHandleMoves(edge: SRoutableElementImpl, moves: ResolvedHandleMove[]): void {
        // Not implemented for this router
    }
}
```

## Edge Decorations and Markers

Decorations enhance edges with visual elements like arrows, markers, and labels to convey additional information.

### Arrow Heads

Arrow heads are the most common edge decoration, indicating direction of flow or relationship.

#### Standard Arrow in CSS

The simplest approach uses CSS markers:

```css
/* Define arrow marker */
.sprotty-graph defs marker#arrow {
    overflow: visible;
}

.sprotty-graph defs marker#arrow path {
    fill: #333;
    stroke: #333;
    stroke-width: 1;
}

/* Apply marker to edges */
.sprotty-edge > path {
    marker-end: url(#arrow);
}
```

#### Custom Arrow Views

For more control, render arrows in your edge view:

```typescript
import { injectable } from 'inversify';
import { VNode } from 'snabbdom';
import { PolylineEdgeView, RenderingContext, SEdgeImpl, IViewArgs } from 'sprotty';
import { Point } from 'sprotty-protocol';

@injectable()
export class ArrowEdgeView extends PolylineEdgeView {
    override render(edge: Readonly<SEdgeImpl>, context: RenderingContext, args?: IViewArgs): VNode | undefined {
        const route = this.edgeRouterRegistry.route(edge, args);
        if (route.length === 0) {
            return this.renderDanglingEdge('Cannot compute route', edge, context);
        }
        
        return <g class-sprotty-edge={true} class-arrow-edge={true}>
            {this.renderLine(edge, route, context, args)}
            {this.renderArrowHead(route, edge)}
            {context.renderChildren(edge, { route })}
        </g>;
    }
    
    protected renderArrowHead(route: Point[], edge: SEdgeImpl): VNode | undefined {
        if (route.length < 2) return undefined;
        
        const lastPoint = route[route.length - 1];
        const secondLastPoint = route[route.length - 2];
        
        // Calculate arrow angle
        const angle = Math.atan2(
            lastPoint.y - secondLastPoint.y,
            lastPoint.x - secondLastPoint.x
        );
        
        const arrowLength = 10;
        const arrowWidth = 6;
        
        // Calculate arrow points
        const arrowAngle = Math.PI / 6;  // 30 degrees
        
        const x1 = lastPoint.x - arrowLength * Math.cos(angle - arrowAngle);
        const y1 = lastPoint.y - arrowLength * Math.sin(angle - arrowAngle);
        const x2 = lastPoint.x - arrowLength * Math.cos(angle + arrowAngle);
        const y2 = lastPoint.y - arrowLength * Math.sin(angle + arrowAngle);
        
        return <path 
            class-arrow-head={true}
            d={`M ${lastPoint.x} ${lastPoint.y} L ${x1} ${y1} L ${x2} ${y2} Z`}
            fill={this.getEdgeColor(edge)} />;
    }
    
    protected getEdgeColor(edge: SEdgeImpl): string {
        return edge.selected ? '#1976d2' : '#333';
    }
}
```

#### Arrow Variations

Create different arrow styles by modifying the rendering:

```typescript
// Hollow arrow
protected renderHollowArrow(route: Point[], edge: SEdgeImpl): VNode {
    const arrowPath = this.calculateArrowPath(route);
    return <path 
        class-arrow-hollow={true}
        d={arrowPath}
        fill="none"
        stroke={this.getEdgeColor(edge)}
        stroke-width="2" />;
}

// Diamond arrow
protected renderDiamondArrow(route: Point[], edge: SEdgeImpl): VNode {
    const lastPoint = route[route.length - 1];
    const secondLastPoint = route[route.length - 2];
    
    const angle = Math.atan2(
        lastPoint.y - secondLastPoint.y,
        lastPoint.x - secondLastPoint.x
    );
    
    const size = 8;
    const length = 12;
    
    // Diamond points
    const p1 = {
        x: lastPoint.x,
        y: lastPoint.y
    };
    const p2 = {
        x: lastPoint.x - length * Math.cos(angle) + size * Math.sin(angle),
        y: lastPoint.y - length * Math.sin(angle) - size * Math.cos(angle)
    };
    const p3 = {
        x: lastPoint.x - length * 2 * Math.cos(angle),
        y: lastPoint.y - length * 2 * Math.sin(angle)
    };
    const p4 = {
        x: lastPoint.x - length * Math.cos(angle) - size * Math.sin(angle),
        y: lastPoint.y - length * Math.sin(angle) + size * Math.cos(angle)
    };
    
    return <path 
        class-arrow-diamond={true}
        d={`M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} L ${p4.x} ${p4.y} Z`}
        fill={this.getEdgeColor(edge)} />;
}

// Circular arrow
protected renderCircleArrow(route: Point[], edge: SEdgeImpl): VNode {
    const lastPoint = route[route.length - 1];
    const radius = 5;
    
    return <circle
        class-arrow-circle={true}
        cx={lastPoint.x}
        cy={lastPoint.y}
        r={radius}
        fill={this.getEdgeColor(edge)} />;
}
```

### Mid-path Decorations

Add decorations along the edge path for additional visual information:

```typescript
protected renderMidpathDecorations(route: Point[], edge: SEdgeImpl): VNode[] {
    const decorations: VNode[] = [];
    
    // Find midpoint
    const midIndex = Math.floor(route.length / 2);
    if (midIndex > 0 && midIndex < route.length) {
        const midPoint = route[midIndex];
        
        // Add decoration at midpoint
        decorations.push(
            <circle 
                class-edge-decoration={true}
                cx={midPoint.x}
                cy={midPoint.y}
                r={4}
                fill="#ff9800" />
        );
    }
    
    return decorations;
}
```

### Label Positioning on Edges

Position labels intelligently along edges:

```typescript
@injectable()
export class EdgeLabelView extends SLabelView {
    override render(label: Readonly<SLabelImpl>, context: RenderingContext): VNode | undefined {
        // Label position is calculated by edge layout
        // We just need to render it with proper styling
        
        return <text 
            class-edge-label={true}
            class-selected={label.selected}>
            <tspan x={0} y={0} dy="0.3em">
                {label.text}
            </tspan>
        </text>;
    }
}
```

Style edge labels with CSS:

```css
.edge-label {
    font-size: 12px;
    fill: #666;
    text-anchor: middle;
    pointer-events: none;
}

.edge-label.selected {
    fill: #1976d2;
    font-weight: bold;
}

/* Label background for better readability */
.edge-label-bg {
    fill: white;
    opacity: 0.8;
}
```

## Anchor Customization

Anchors determine where edges connect to nodes. Sprotty provides built-in anchors for common shapes and supports custom anchor computation.

### Built-in Anchors

Sprotty includes anchors for standard shapes:

**RectangleAnchor**: Computes anchor points on rectangular node boundaries.

**EllipseAnchor**: Computes anchor points on circular/elliptical boundaries.

**DiamondAnchor**: Computes anchor points on diamond-shaped boundaries.

### Specifying Anchor Types

Set the anchor kind on your nodes:

```typescript
const nodeWithAnchor: SNode = {
    id: 'node1',
    type: 'node:rect',
    position: { x: 100, y: 100 },
    size: { width: 120, height: 80 },
    anchorKind: 'rectangular'  // Use rectangular anchor
};

const circularNode: SNode = {
    id: 'node2',
    type: 'node:circle',
    position: { x: 300, y: 100 },
    size: { width: 100, height: 100 },
    anchorKind: 'elliptic'  // Use elliptical anchor
};
```

### Custom Anchor Computers

Create custom anchors for non-standard shapes:

```typescript
import { injectable } from 'inversify';
import { IAnchorComputer, SConnectableElementImpl } from 'sprotty';
import { Point } from 'sprotty-protocol';

@injectable()
export class HexagonAnchor implements IAnchorComputer {
    static readonly KIND = 'hexagon';
    
    get kind() {
        return HexagonAnchor.KIND;
    }
    
    getAnchor(
        connectable: SConnectableElementImpl, 
        referencePoint: Point, 
        offset: number = 0
    ): Point {
        // Hexagon vertices (flat-top orientation)
        const cx = connectable.bounds.x + connectable.bounds.width / 2;
        const cy = connectable.bounds.y + connectable.bounds.height / 2;
        const width = connectable.bounds.width;
        const height = connectable.bounds.height;
        
        // Calculate hexagon points
        const points: Point[] = [
            { x: cx + width / 2, y: cy },                    // Right
            { x: cx + width / 4, y: cy + height / 2 },       // Bottom-right
            { x: cx - width / 4, y: cy + height / 2 },       // Bottom-left
            { x: cx - width / 2, y: cy },                    // Left
            { x: cx - width / 4, y: cy - height / 2 },       // Top-left
            { x: cx + width / 4, y: cy - height / 2 }        // Top-right
        ];
        
        // Find closest point on hexagon boundary
        let closestPoint = points[0];
        let minDist = this.distance(referencePoint, closestPoint);
        
        // Check each edge of the hexagon
        for (let i = 0; i < points.length; i++) {
            const p1 = points[i];
            const p2 = points[(i + 1) % points.length];
            
            const projected = this.projectPointOnLine(referencePoint, p1, p2);
            const dist = this.distance(referencePoint, projected);
            
            if (dist < minDist) {
                minDist = dist;
                closestPoint = projected;
            }
        }
        
        // Apply offset if needed
        if (offset !== 0) {
            const dx = referencePoint.x - closestPoint.x;
            const dy = referencePoint.y - closestPoint.y;
            const length = Math.sqrt(dx * dx + dy * dy);
            
            if (length > 0) {
                closestPoint = {
                    x: closestPoint.x - (dx / length) * offset,
                    y: closestPoint.y - (dy / length) * offset
                };
            }
        }
        
        return closestPoint;
    }
    
    private distance(p1: Point, p2: Point): number {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    private projectPointOnLine(point: Point, lineStart: Point, lineEnd: Point): Point {
        const dx = lineEnd.x - lineStart.x;
        const dy = lineEnd.y - lineStart.y;
        const length2 = dx * dx + dy * dy;
        
        if (length2 === 0) return lineStart;
        
        const t = Math.max(0, Math.min(1, 
            ((point.x - lineStart.x) * dx + (point.y - lineStart.y) * dy) / length2
        ));
        
        return {
            x: lineStart.x + t * dx,
            y: lineStart.y + t * dy
        };
    }
}
```

### Registering Custom Anchors

Register your anchor computer:

```typescript
import { ContainerModule } from 'inversify';
import { TYPES } from 'sprotty';

const customAnchorModule = new ContainerModule((bind) => {
    bind(HexagonAnchor).toSelf().inSingletonScope();
    bind(TYPES.IAnchorComputer).toService(HexagonAnchor);
});
```

### Port-Specific Anchoring

For precise connection points, use ports:

```typescript
const nodeWithPorts: SNode = {
    id: 'node-with-ports',
    type: 'node:component',
    position: { x: 100, y: 100 },
    size: { width: 120, height: 80 },
    children: [
        {
            id: 'port-input',
            type: 'port',
            position: { x: 0, y: 40 },  // Left side, middle
            size: { width: 8, height: 8 }
        },
        {
            id: 'port-output',
            type: 'port',
            position: { x: 112, y: 40 },  // Right side, middle
            size: { width: 8, height: 8 }
        }
    ]
};

// Connect to specific ports
const portEdge: SEdge = {
    id: 'edge-to-port',
    type: 'edge',
    sourceId: 'node1',
    targetId: 'port-input',  // Connect to port, not node
    routerKind: 'polyline'
};
```

### Dynamic Anchor Positioning

Compute anchor positions based on edge properties:

```typescript
@injectable()
export class DynamicAnchor implements IAnchorComputer {
    static readonly KIND = 'dynamic';
    
    get kind() {
        return DynamicAnchor.KIND;
    }
    
    getAnchor(
        connectable: SConnectableElementImpl,
        referencePoint: Point,
        offset: number = 0
    ): Point {
        const bounds = connectable.bounds;
        const center = {
            x: bounds.x + bounds.width / 2,
            y: bounds.y + bounds.height / 2
        };
        
        // Determine which side the reference point is on
        const angle = Math.atan2(
            referencePoint.y - center.y,
            referencePoint.x - center.x
        );
        
        // Place anchor based on angle
        let anchor: Point;
        
        if (Math.abs(angle) < Math.PI / 4) {
            // Right side
            anchor = { x: bounds.x + bounds.width, y: center.y };
        } else if (Math.abs(angle) > 3 * Math.PI / 4) {
            // Left side
            anchor = { x: bounds.x, y: center.y };
        } else if (angle > 0) {
            // Bottom
            anchor = { x: center.x, y: bounds.y + bounds.height };
        } else {
            // Top
            anchor = { x: center.x, y: bounds.y };
        }
        
        // Apply offset
        if (offset !== 0) {
            const dx = referencePoint.x - anchor.x;
            const dy = referencePoint.y - anchor.y;
            const length = Math.sqrt(dx * dx + dy * dy);
            
            if (length > 0) {
                anchor = {
                    x: anchor.x - (dx / length) * offset,
                    y: anchor.y - (dy / length) * offset
                };
            }
        }
        
        return anchor;
    }
}
```

## Edge Intersection Handling

When edges cross each other, visual treatments like jumps or gaps improve diagram readability.

### Configuring Intersection Detection

Enable intersection detection with the `IntersectionFinder`:

```typescript
import { ContainerModule } from 'inversify';
import { TYPES } from 'sprotty';
import { IntersectionFinder } from 'sprotty';

const intersectionModule = new ContainerModule((bind) => {
    bind(IntersectionFinder).toSelf().inSingletonScope();
    bind(TYPES.IEdgeRoutePostprocessor).toService(IntersectionFinder);
});
```

### Line Jumps

Display jumps where edges cross:

```typescript
import { JumpingPolylineEdgeView } from 'sprotty';
import { configureModelElement } from 'sprotty';

// Register jumping edge view
configureModelElement(context, 'edge:jumping', SEdgeImpl, JumpingPolylineEdgeView);
```

Use the jumping view:

```typescript
const jumpingEdge: SEdge = {
    id: 'edge-jump',
    type: 'edge:jumping',  // Use jumping edge view
    sourceId: 'node1',
    targetId: 'node2',
    routerKind: 'polyline'
};
```

### Line Gaps

Display gaps instead of jumps:

```typescript
import { PolylineEdgeViewWithGapsOnIntersections } from 'sprotty';

// Register gap view
configureModelElement(
    context, 
    'edge:gaps', 
    SEdgeImpl, 
    PolylineEdgeViewWithGapsOnIntersections
);
```

### Custom Intersection Handling

Create your own intersection visualization:

```typescript
@injectable()
export class CustomIntersectionEdgeView extends PolylineEdgeView {
    protected jumpHeight = 10;
    
    protected override renderLine(
        edge: SEdgeImpl, 
        segments: Point[], 
        context: RenderingContext, 
        args?: IViewArgs
    ): VNode {
        let path = '';
        
        for (let i = 0; i < segments.length; i++) {
            const p = segments[i];
            
            if (i === 0) {
                path = `M ${p.x},${p.y}`;
            }
            
            // Check if this point has intersections
            if (this.hasIntersection(p)) {
                path += this.createJumpSegment(segments, i);
            } else if (i > 0) {
                path += ` L ${p.x},${p.y}`;
            }
        }
        
        return <path d={path} class-edge-path={true} />;
    }
    
    protected hasIntersection(point: any): boolean {
        return point.intersections && point.intersections.length > 0;
    }
    
    protected createJumpSegment(segments: Point[], index: number): string {
        const p = segments[index];
        
        if (index === 0 || index === segments.length - 1) {
            return '';
        }
        
        const prev = segments[index - 1];
        const next = segments[index + 1];
        
        // Calculate jump direction
        const dx = next.x - prev.x;
        const dy = next.y - prev.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        
        if (length === 0) return ` L ${p.x},${p.y}`;
        
        // Perpendicular offset for jump
        const offsetX = (-dy / length) * this.jumpHeight;
        const offsetY = (dx / length) * this.jumpHeight;
        
        const jumpPoint = {
            x: p.x + offsetX,
            y: p.y + offsetY
        };
        
        // Create smooth jump with quadratic curve
        return ` Q ${jumpPoint.x},${jumpPoint.y} ${p.x},${p.y}`;
    }
}
```

## Dynamic Edge Styling

Style edges dynamically based on their state, type, or data.

### Conditional Styling

Apply styles based on edge properties:

```typescript
@injectable()
export class DynamicEdgeView extends PolylineEdgeView {
    override render(edge: Readonly<SEdgeImpl>, context: RenderingContext, args?: IViewArgs): VNode | undefined {
        const route = this.edgeRouterRegistry.route(edge, args);
        if (route.length === 0) {
            return this.renderDanglingEdge('Cannot compute route', edge, context);
        }
        
        const edgeType = (edge as any).edgeType || 'normal';
        const isActive = (edge as any).isActive || false;
        
        return <g class-sprotty-edge={true}
                  class-edge-dependency={edgeType === 'dependency'}
                  class-edge-composition={edgeType === 'composition'}
                  class-edge-active={isActive}
                  class-selected={edge.selected}>
            {this.renderStyledLine(edge, route, edgeType)}
            {this.renderArrowForType(route, edgeType)}
            {context.renderChildren(edge, { route })}
        </g>;
    }
    
    protected renderStyledLine(edge: SEdgeImpl, route: Point[], edgeType: string): VNode {
        const pathData = this.createPathData(route);
        
        // Different styles for different types
        const strokeWidth = edgeType === 'composition' ? 2 : 1;
        const strokeDasharray = edgeType === 'dependency' ? '5,5' : 'none';
        
        return <path 
            d={pathData}
            stroke-width={strokeWidth}
            stroke-dasharray={strokeDasharray}
            class-edge-path={true} />;
    }
    
    protected renderArrowForType(route: Point[], edgeType: string): VNode | undefined {
        switch (edgeType) {
            case 'composition':
                return this.renderDiamondArrow(route);
            case 'dependency':
                return this.renderHollowArrow(route);
            default:
                return this.renderStandardArrow(route);
        }
    }
    
    private createPathData(route: Point[]): string {
        if (route.length === 0) return '';
        
        let path = `M ${route[0].x} ${route[0].y}`;
        for (let i = 1; i < route.length; i++) {
            path += ` L ${route[i].x} ${route[i].y}`;
        }
        return path;
    }
    
    private renderStandardArrow(route: Point[]): VNode | undefined {
        // Implementation from earlier example
        return undefined;
    }
    
    private renderHollowArrow(route: Point[]): VNode | undefined {
        // Implementation from earlier example
        return undefined;
    }
    
    private renderDiamondArrow(route: Point[]): VNode | undefined {
        // Implementation from earlier example
        return undefined;
    }
}
```

### CSS-Based Dynamic Styling

Define styles in CSS for different edge states:

```css
/* Base edge styling */
.sprotty-edge .edge-path {
    stroke: #666;
    stroke-width: 1.5;
    fill: none;
    transition: stroke 0.2s, stroke-width 0.2s;
}

/* Edge types */
.edge-dependency .edge-path {
    stroke: #ff9800;
    stroke-dasharray: 5, 5;
}

.edge-composition .edge-path {
    stroke: #4caf50;
    stroke-width: 2;
}

.edge-aggregation .edge-path {
    stroke: #2196f3;
    stroke-width: 1.5;
}

/* State-based styling */
.edge-active .edge-path {
    stroke: #f44336;
    stroke-width: 2.5;
    animation: pulse-edge 1.5s ease-in-out infinite;
}

.sprotty-edge.selected .edge-path {
    stroke: #1976d2;
    stroke-width: 2.5;
}

.sprotty-edge.mouseover .edge-path {
    stroke: #1976d2;
    stroke-width: 2;
}

/* Animated edges */
@keyframes pulse-edge {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.6;
    }
}

.edge-animated .edge-path {
    stroke-dasharray: 10, 5;
    animation: dash-flow 2s linear infinite;
}

@keyframes dash-flow {
    from {
        stroke-dashoffset: 15;
    }
    to {
        stroke-dashoffset: 0;
    }
}
```

### Flow Animation

Create animated flow effects along edges:

```typescript
@injectable()
export class AnimatedFlowEdgeView extends PolylineEdgeView {
    override render(edge: Readonly<SEdgeImpl>, context: RenderingContext, args?: IViewArgs): VNode | undefined {
        const route = this.edgeRouterRegistry.route(edge, args);
        if (route.length === 0) {
            return this.renderDanglingEdge('Cannot compute route', edge, context);
        }
        
        const isFlowing = (edge as any).isFlowing || false;
        const flowSpeed = (edge as any).flowSpeed || 'normal';
        
        return <g class-sprotty-edge={true}
                  class-edge-flowing={isFlowing}
                  class-flow-fast={flowSpeed === 'fast'}
                  class-flow-slow={flowSpeed === 'slow'}>
            {this.renderBaseLine(edge, route)}
            {isFlowing && this.renderFlowParticles(route)}
            {this.renderArrowHead(route, edge)}
            {context.renderChildren(edge, { route })}
        </g>;
    }
    
    protected renderBaseLine(edge: SEdgeImpl, route: Point[]): VNode {
        const pathData = this.createPathData(route);
        return <path d={pathData} class-edge-base={true} />;
    }
    
    protected renderFlowParticles(route: Point[]): VNode[] {
        const particles: VNode[] = [];
        const pathData = this.createPathData(route);
        
        // Create multiple flow particles
        for (let i = 0; i < 3; i++) {
            const delay = i * 0.33;  // Stagger particles
            
            particles.push(
                <circle 
                    class-flow-particle={true}
                    r={3}
                    fill="#2196f3"
                    style={{
                        'animation-delay': `${delay}s`
                    }}>
                    <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        begin={`${delay}s`}>
                        <mpath href={`#${pathData}`} />
                    </animateMotion>
                </circle>
            );
        }
        
        return particles;
    }
    
    protected renderArrowHead(route: Point[], edge: SEdgeImpl): VNode | undefined {
        // Standard arrow implementation
        return undefined;
    }
    
    private createPathData(route: Point[]): string {
        if (route.length === 0) return '';
        
        let path = `M ${route[0].x} ${route[0].y}`;
        for (let i = 1; i < route.length; i++) {
            path += ` L ${route[i].x} ${route[i].y}`;
        }
        return path;
    }
}
```

Add CSS for flow animation:

```css
.edge-flowing .edge-base {
    stroke: #2196f3;
    stroke-width: 2;
    stroke-dasharray: 8, 4;
    animation: dash-flow 2s linear infinite;
}

.edge-flowing.flow-fast .edge-base {
    animation-duration: 1s;
}

.edge-flowing.flow-slow .edge-base {
    animation-duration: 4s;
}

.flow-particle {
    opacity: 0.8;
}

@keyframes dash-flow {
    from {
        stroke-dashoffset: 12;
    }
    to {
        stroke-dashoffset: 0;
    }
}
```

## Best Practices

### Router Selection Guidelines

Choose the right router for your use case:

**Use Polyline when:**

- Simplicity and clarity are paramount
- Edge crossings are minimal
- Direct connections convey the relationship
- Performance is critical (many edges)

**Use Manhattan when:**

- Creating technical diagrams (UML, ER, circuits)
- Orthogonal connections are expected
- Node alignment follows a grid
- Professional appearance is important

**Use Bezier when:**

- Aesthetic appeal matters
- Showing flow or direction
- State transitions or processes
- Reducing visual clutter with curves

**Create Custom routers when:**

- Domain-specific patterns are needed
- Standard routers don't fit your use case
- Special visual requirements exist
- Unique interaction patterns are required

### Performance Considerations

**Edge Routing Performance:**

```typescript
// ✅ Good: Minimize routing points
const efficientEdge: SEdge = {
    id: 'edge1',
    type: 'edge',
    sourceId: 'node1',
    targetId: 'node2',
    routerKind: 'polyline',
    routingPoints: []  // Let router compute or use minimal points
};

// ❌ Bad: Too many routing points
const inefficientEdge: SEdge = {
    id: 'edge2',
    type: 'edge',
    sourceId: 'node1',
    targetId: 'node2',
    routerKind: 'polyline',
    routingPoints: [/* 20+ points */]  // Excessive
};
```

**View Rendering Performance:**

```typescript
@injectable()
export class PerformantEdgeView extends PolylineEdgeView {
    override render(edge: Readonly<SEdgeImpl>, context: RenderingContext, args?: IViewArgs): VNode | undefined {
        // Early exit for invisible edges
        const route = this.edgeRouterRegistry.route(edge, args);
        if (route.length === 0) {
            return undefined;
        }
        
        // Skip rendering if outside viewport
        if (!this.isInViewport(route, context)) {
            return undefined;
        }
        
        return this.renderEdge(edge, route, context);
    }
    
    protected isInViewport(route: Point[], context: RenderingContext): boolean {
        // Check if any point is in viewport
        const viewport = context.targetKind === 'hidden' ? undefined : this.getViewport();
        if (!viewport) return true;
        
        return route.some(p => 
            p.x >= viewport.x && 
            p.x <= viewport.x + viewport.width &&
            p.y >= viewport.y && 
            p.y <= viewport.y + viewport.height
        );
    }
}
```

**Simplify Complex Paths:**

```typescript
// Reduce points for distant zoom levels
protected simplifyRoute(route: Point[], zoomLevel: number): Point[] {
    if (zoomLevel > 0.5) {
        return route;  // Full detail at close zoom
    }
    
    // Simplify for distant zoom
    const simplified: Point[] = [route[0]];
    
    for (let i = 1; i < route.length - 1; i += 2) {
        simplified.push(route[i]);
    }
    
    simplified.push(route[route.length - 1]);
    
    return simplified;
}
```

### Accessibility and Visual Clarity

**Sufficient Contrast:**

```css
/* Ensure edges are visible on all backgrounds */
.sprotty-edge .edge-path {
    stroke: #333;  /* Dark enough for light backgrounds */
    stroke-width: 1.5;  /* Thick enough to see */
}

/* Increase visibility on hover */
.sprotty-edge.mouseover .edge-path {
    stroke-width: 2.5;
}

/* High contrast for selected edges */
.sprotty-edge.selected .edge-path {
    stroke: #0066cc;
    stroke-width: 3;
}
```

**Clear Arrow Indicators:**

```typescript
// Ensure arrows are visible
protected getArrowSize(edge: SEdgeImpl): number {
    // Larger arrows for important edges
    const importance = (edge as any).importance || 'normal';
    
    switch (importance) {
        case 'high':
            return 14;
        case 'normal':
            return 10;
        case 'low':
            return 7;
        default:
            return 10;
    }
}
```

**Avoid Edge Clutter:**

```typescript
// Strategy 1: Bundle parallel edges
function bundleParallelEdges(edges: SEdge[]): SEdge[] {
    // Group edges with same source and target
    const groups = new Map<string, SEdge[]>();
    
    edges.forEach(edge => {
        const key = `${edge.sourceId}-${edge.targetId}`;
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key)!.push(edge);
    });
    
    // Offset parallel edges
    const result: SEdge[] = [];
    groups.forEach(group => {
        if (group.length === 1) {
            result.push(group[0]);
        } else {
            // Offset each edge slightly
            group.forEach((edge, index) => {
                const offset = (index - (group.length - 1) / 2) * 10;
                result.push({
                    ...edge,
                    routingPoints: [
                        { x: 0, y: offset }  // Offset perpendicular to connection
                    ]
                });
            });
        }
    });
    
    return result;
}

// Strategy 2: Hide less important edges at distance
protected shouldRenderEdge(edge: SEdgeImpl, zoomLevel: number): boolean {
    const priority = (edge as any).priority || 1;
    
    // Only show high-priority edges when zoomed out
    if (zoomLevel < 0.3 && priority < 2) {
        return false;
    }
    
    return true;
}
```

**Readable Labels:**

```css
/* Ensure edge labels are readable */
.edge-label {
    font-size: 12px;
    fill: #333;
    stroke: white;
    stroke-width: 3;
    paint-order: stroke;  /* Draw stroke behind text */
    text-anchor: middle;
}

/* Adjust size based on importance */
.edge-label.important {
    font-size: 14px;
    font-weight: bold;
}
```

### Router-Specific Tips

**Polyline Best Practices:**

- Keep routing points minimal
- Ensure points don't create sharp angles
- Use consistent spacing between segments
- Consider edge bundling for parallel connections

**Manhattan Best Practices:**

- Works best with grid-aligned nodes
- Ensure sufficient space between nodes
- Avoid crossing edges when possible
- Use consistent node spacing

**Bezier Best Practices:**

- Don't overuse control points
- Keep curves gentle and natural
- Ensure control points are visible when editing
- Test with different node positions

**Custom Router Best Practices:**

- Optimize the `route()` method for performance
- Cache expensive calculations
- Provide sensible defaults
- Document router behavior and options
- Test with various node configurations

Edge routing is crucial for diagram readability and user experience. Master the built-in routers, and don't hesitate to create custom solutions when your domain requires specialized behavior.
