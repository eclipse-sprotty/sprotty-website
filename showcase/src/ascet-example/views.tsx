/********************************************************************************
 * Copyright (c) 2023 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

/** @jsx svg */
import { svg } from 'sprotty/lib/lib/jsx';

import { injectable } from 'inversify';
import { VNode } from "snabbdom";
import { isIntersectingRoutedPoint, IView, IViewArgs, PolylineEdgeView, RectangularNodeView, RenderingContext, SEdge, SGraph, ShapeView, SLabel, SNode } from "sprotty";
import { ArrowType, ComponentNode, InputNode, LabelNode, OperandNode, OperandType } from './models';
import { Point } from 'sprotty-protocol';

interface AscetViewArgs extends IViewArgs {
    trace: Trace;
}

interface Trace {
    incomingEdges: string[];
    incomingNodes: string[];
    outgoingEdges: string[];
    outgoingNodes: string[];
}

function isEdge(element: any): boolean {
    if (element.type.includes('edge')) {
        return true;
    }
    return false;
}

function isNode(element: any): boolean {
    if (element.type.includes('node')) {
        return true;
    }
    return false;
}

function traceElements(elementId: string, edges: any[], trace: Trace) {
    traceIncomingElements(elementId, edges, trace);
    traceOutgoingElements(elementId, edges, trace);
}

function traceIncomingElements(elementId: string, edges: any[], trace: Trace) {
    const incomingEdges = edges.filter(e => (e as SEdge).targetId === elementId).map(e => e.id);
    const incomingNodes = edges.filter(e => (e as SEdge).targetId === elementId).map(e => (e as SEdge).sourceId);
    trace.incomingEdges.push(...incomingEdges);
    trace.incomingNodes.push(...incomingNodes);
    incomingNodes.forEach(incomingNode => traceIncomingElements(incomingNode, edges, trace));
}

function traceOutgoingElements(elementId: string, edges: any[], trace: Trace) {
    const outgoingEdges = edges.filter(e => (e as SEdge).sourceId === elementId).map(e => e.id);
    const outgoingNodes = edges.filter(e => (e as SEdge).sourceId === elementId).map(e => (e as SEdge).targetId);
    trace.outgoingEdges.push(...outgoingEdges);
    trace.outgoingNodes.push(...outgoingNodes);
    outgoingNodes.forEach(outgoingNode => traceOutgoingElements(outgoingNode, edges, trace));
}

@injectable()
export class AscetGraphView implements IView {
    render(model: Readonly<SGraph>, context: RenderingContext): VNode {
        const trace: Trace = { incomingEdges: [], incomingNodes: [], outgoingEdges: [], outgoingNodes: [] };
        const selectedNodes = model.children.filter(e => isNode(e) && (e as SNode).selected).map(e => e.id);
        const edges = model.children.filter(e => isEdge(e));
        selectedNodes.forEach(elementId => traceElements(elementId, edges, trace));

        const transform = `scale(${model.zoom}) translate(${-model.scroll.x},${-model.scroll.y})`;
        return <svg class-sprotty-graph={true}>
            <g transform={transform}>
                {context.renderChildren(model, { trace })}
            </g>
        </svg>;
    }

}

@injectable()
export class EdgeArrow extends ShapeView {
    override render(node: Readonly<SLabel>, context: RenderingContext, args?: IViewArgs): VNode {
        return <polygon points={`-6,-4 0,0 -6,4`}></polygon>;
    }
}

@injectable()
export class InputView extends RectangularNodeView {
    override render(node: Readonly<SNode & InputNode>, context: RenderingContext, args?: AscetViewArgs): VNode {
        const incoming = args.trace.incomingNodes.includes(node.id);
        const outgoing = args.trace.outgoingNodes.includes(node.id);

        return <g class-mouseover={node.hoverFeedback} class-input-incoming={incoming} class-input-outgoing={outgoing}>
            {node.selected && (<rect x={- 5} y={- 5} width={node.size.width + 10} height={node.size.height + 10} class-outline={true}/>)}
            <rect class-sprotty-node={true}
                class-selected={node.selected}
                width={node.size.width - (node.arrow !== ArrowType.NONE ? 10 : 0)} height={node.size.height}>
            </rect>
            <rect class-input-back={true} width="10" height={node.size.height}></rect>
            {node.arrow !== ArrowType.NONE && <polygon class-input-arrow-full={node.arrow === ArrowType.FULL} class-input-arrow-stroke={node.arrow === ArrowType.STROKE}
                points={`${node.size.width - 10},0 ${node.size.width},${node.size.height / 2} ${node.size.width - 10},${node.size.height}`} />}
            <g transform={`translate(${node.size.width / 2 + (node.arrow !== ArrowType.NONE ? 0 : 5)},${node.size.height / 2})`} >{context.renderChildren(node, args)}</g>
            <text x={node.size.width / 2} y={node.size.height + 15} class-sprotty-text={true}>{node.text}</text>
        </g>;
    }
}

@injectable()
export class ComponentView extends RectangularNodeView {
    override render(node: Readonly<SNode & ComponentNode>, context: RenderingContext, args?: IViewArgs): VNode {
        const incoming = args.trace.incomingNodes.includes(node.id);
        const outgoing = args.trace.outgoingNodes.includes(node.id);

        return <g class-mouseover={node.hoverFeedback} class-component-incoming={incoming} class-component-outgoing={outgoing}>
            {node.selected && (<rect x={- 5} y={- 5} width={node.size.width + 10} height={node.size.height + 10} class-outline={true}/>)}
            <rect class-sprotty-node={true}
                class-selected={node.selected}
                width={Math.max(node.size.width, 0)} height={Math.max(node.size.height, 0)}>
            </rect>
            <image href={`images/${node.image}`} width={node.size.width - 10} height={node.size.height - 10} x="5" y="5"></image >
            <rect width="10" height={node.size.height} x="0" y="0" class-input-back={true}></rect>
            <g transform={`translate(${node.size.width / 2},0)`}>
                <polygon points="0,-4 4,0 2,2 -2,-2" style={{ stroke: "lightgrey", fill: "lightblue" }} />
                <polygon points="-2,-2 2,2 0,4 -4,0" style={{ stroke: "lightgrey", fill: "white" }} />
            </g>
            <text x={node.size.width / 2} y={node.size.height + 20} class-sprotty-text={true}>{node.text}</text>
        </g>;
    }
}

@injectable()
export class ControllerView extends RectangularNodeView {
    override render(node: Readonly<SNode & ComponentNode>, context: RenderingContext, args?: AscetViewArgs): VNode {
        const incoming = args.trace.incomingNodes.includes(node.id);
        const outgoing = args.trace.outgoingNodes.includes(node.id);
        return <g class-mouseover={node.hoverFeedback} class-controller-incoming={incoming} class-controller-outgoing={outgoing}>
            {node.selected && (<rect x={- 5} y={- 5} width={node.size.width + 10} height={node.size.height + 10} class-outline={true}/>)}
            <rect width={node.size.width} height={node.size.height} class-sprotty-node={true}></rect>
            <rect x="4" y="4" width={node.size.width - 8} height={node.size.height - 8} class-sprotty-node={true}></rect>
            <text x={node.size.width / 2} y="30" class-sprotty-text={true}>EngSpdControl</text>
        </g>;
    }
}

@injectable()
export class OperandView extends RectangularNodeView {
    override render(node: Readonly<SNode & OperandNode>, context: RenderingContext, args?: AscetViewArgs): VNode {
        const incoming = args.trace.incomingNodes.includes(node.id);
        const outgoing = args.trace.outgoingNodes.includes(node.id);

        return <g class-mouseover={node.hoverFeedback} class-operand-incoming={incoming} class-operand-outgoing={outgoing}>
            {node.selected && (<rect x={- 5} y={- 5} width={node.size.width + 10} height={node.size.height + 10} class-outline={true}/>)}
            <rect class-sprotty-node={true}
                class-selected={node.selected}
                width={node.size.width} height={node.size.height}>
            </rect>
            {
                node.operand === OperandType.ADD && <text x={2} y={node.size.height + 1} w class-operand-symbol={true} style={{ fontSize: "45px" }}>{node.operand}</text>
            }
            {
                node.operand === OperandType.DIVIDE && <text x={3} y={node.size.height} w class-operand-symbol={true} style={{ fontSize: "45px" }}>{node.operand}</text>
            }
            {
                node.operand === OperandType.SUBSTRACT && <text x={5} y={30} w class-operand-symbol={true} style={{ fontSize: "54px" }}>{node.operand}</text>
            }
            {
                node.operand === OperandType.MULTIPLY && <text x={4} y={node.size.height - 5} w class-operand-symbol={true} style={{ fontSize: "40px" }}>{node.operand}</text>
            }
        </g>;
    }
}

@injectable()
export class RelaisView extends RectangularNodeView {
    override render(node: Readonly<SNode & LabelNode>, context: RenderingContext, args?: AscetViewArgs): VNode {
        const incoming = args.trace.incomingNodes.includes(node.id);
        const outgoing = args.trace.outgoingNodes.includes(node.id);

        return <g class-mouseover={node.hoverFeedback} class-relais-incoming={incoming} class-relais-outgoing={outgoing}>
            {node.selected && (<rect x={- 5} y={- 5} width={node.size.width + 10} height={node.size.height + 10} class-outline={true}/>)}
            <rect width={node.size.width} height={node.size.height} class-sprotty-node={true}></rect>
            <image href={`images/Relais.png`} x="1" width={node.size.width - 2} height={node.size.height - 2}></image>
        </g>;
    }
}

// Edges

@injectable()
export class SplitMarkedEdgeView extends PolylineEdgeView {

    render(edge: Readonly<SEdge>, context: RenderingContext, args?: AscetViewArgs): VNode | undefined {
        const incoming = args.trace.incomingEdges.includes(edge.id);
        const outgoing = args.trace.outgoingEdges.includes(edge.id);

        const route = this.edgeRouterRegistry.route(edge, args);
        if (route.length === 0) {
            return this.renderDanglingEdge("Cannot compute route", edge, context);
        }
        if (!this.isVisible(edge, route, context)) {
            if (edge.children.length === 0) {
                return undefined;
            }
            // The children of an edge are not necessarily inside the bounding box of the route,
            // so we need to render a group to ensure the children have a chance to be rendered.
            return <g>{context.renderChildren(edge, { route })}</g>;
        }

        return <g class-sprotty-edge={true} class-mouseover={edge.hoverFeedback} class-sprotty-edge-incoming={incoming} class-sprotty-edge-outgoing={outgoing}>
            {this.renderLine(edge, route, context, args)}
            {this.renderAdditionals(edge, route, context)}
            {context.renderChildren(edge, { route })}
        </g>;
    }

    protected renderLine(edge: SEdge, segments: Point[], context: RenderingContext, args?: AscetViewArgs): VNode {

        const incoming = args.trace.incomingEdges.includes(edge.id);
        const outgoing = args.trace.outgoingEdges.includes(edge.id);

        const firstPoint = segments[0];
        let path = `M ${firstPoint.x},${firstPoint.y}`;
        for (let i = 1; i < segments.length; i++) {
            const p = segments[i];
            path += ` L ${p.x},${p.y}`;
        }
        return (
            <g>
                <path d={path} class-sprotty-edge-transparent={true} />
                <path d={path} class-sprotty-edge-incoming={incoming} class-sprotty-edge-outgoing={outgoing} />
            </g>
        );
    }

    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[] {
        const splitMarkers: VNode[] = [];
        for (const segment of segments) {
            if (isIntersectingRoutedPoint(segment)) {
                for (const intersection of segment.intersections) {
                    if (intersection.routable1.split('->')[0] === intersection.routable2.split('->')[0]) {
                        // if intersection from two routable of the same start node add a
                        splitMarkers.push(<g transform={`translate(${intersection.intersectionPoint.x},${intersection.intersectionPoint.y})`}><polygon points="0,4 4,0 0,-4 -4,0"></polygon></g>);
                        break;
                    }
                }
            }
        }
        return splitMarkers;
    }

}

// input icons

@injectable()
export class Icon1 extends ShapeView {
    override render(node: Readonly<SNode>, context: RenderingContext, args?: IViewArgs): VNode {
        const parentSize = (node.parent as SNode).size;
        return <g>
            <polygon points="0,-4 4,0 2,2 -2,-2" style={{ stroke: "lightgrey", fill: "lightblue" }} />
            <polygon points="-2,-2 2,2 0,4 -4,0" style={{ stroke: "lightgrey", fill: "white" }} />
        </g>;
    }
}

@injectable()
export class Icon2 extends ShapeView {
    override render(node: Readonly<SNode>, context: RenderingContext, args?: IViewArgs): VNode {
        const parentSize = (node.parent as SNode).size;
        return <g>
            <polygon points="-4,-4 4,-4 4,4" style={{ stroke: "lightgrey", fill: "none" }} />
            <polygon points="-4,-4 -4,4 4,4" style={{ stroke: "lightgrey", fill: "orange" }} />
        </g>;
    }
}

@injectable()
export class Icon3 extends ShapeView {
    override render(node: Readonly<SNode>, context: RenderingContext, args?: IViewArgs): VNode {
        const parentSize = (node.parent as SNode).size;
        return <g>
            <polygon points="-4,-4 4,-4 4,4" style={{ stroke: "lightgrey", fill: "orange" }} />
            <polygon points="-4,-4 -4,4 4,4" style={{ stroke: "lightgrey", fill: "none" }} />
        </g>;
    }
}