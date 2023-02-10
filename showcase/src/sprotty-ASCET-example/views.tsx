/** @jsx svg */
import { svg } from 'sprotty/lib/lib/jsx';

import { injectable } from 'inversify';
import { VNode } from "snabbdom";
import { IntersectionFinder, isIntersectingRoutedPoint, IViewArgs, PolylineEdgeView, RectangularNodeView, RenderingContext, SEdge, ShapeView, SLabel, SNode } from "sprotty";
import { ArrowType, ComponentNode, InputNode, LabelNode, OperandNode, OperandType } from './models';
import { Point } from 'sprotty-protocol';


@injectable()
export class EdgeArrow extends ShapeView {
    override render(node: Readonly<SLabel>, context: RenderingContext, args?: IViewArgs): VNode {
        return <polygon points={`-6,-4 0,0 -6,4`} style={{fill: "black"}}></polygon>
    }
}

@injectable()
export class InputView extends RectangularNodeView {
    override render(node: Readonly<SNode & InputNode>, context: RenderingContext, args?: IViewArgs): VNode {
        return <g>
            <rect class-sprotty-node={true}
                class-mouseover={node.hoverFeedback} class-selected={node.selected}
                width={node.size.width - (node.arrow !== ArrowType.NONE ? 10 : 0)} height={node.size.height}>
            </rect>
            <rect class-input-back={true} width="10" height={node.size.height}></rect>
            {node.arrow !== ArrowType.NONE && <polygon class-input-arrow-full={node.arrow === ArrowType.FULL} class-input-arrow-stroke={node.arrow === ArrowType.STROKE}
                points={`${node.size.width - 10},0 ${node.size.width},${node.size.height / 2} ${node.size.width - 10},${node.size.height}`}/> }
            <g transform={`translate(${node.size.width / 2 + (node.arrow !== ArrowType.NONE ? 0 : 5)},${node.size.height / 2})`} >{context.renderChildren(node, args)}</g>
            <text x={node.size.width / 2} y={node.size.height + 15} class-sprotty-text={true}>{node.text}</text>
        </g>
    }
}

@injectable()
export class ComponentView extends RectangularNodeView {
    override render(node: Readonly<SNode & ComponentNode>, context: RenderingContext, args?: IViewArgs): VNode {
        return <g>
            <rect class-sprotty-node={true}
                class-mouseover={node.hoverFeedback} class-selected={node.selected}
                width={Math.max(node.size.width, 0)} height={Math.max(node.size.height, 0)}>
            </rect>
            <image href={`images/${node.image}`} width={node.size.width - 10} height={node.size.height - 10} x="5" y="5"></image >
            <rect width="10" height={node.size.height} x="0" y="0" class-input-back={true}></rect>
            <rect class-component-marker={true} width="10" height="10" x={node.size.width / 2 - 5} y="-5"></rect>
            <text x={node.size.width / 2} y={node.size.height + 20} class-sprotty-text={true}>{node.text}</text>
            </g>
    }
}

@injectable()
export class ControllerView extends RectangularNodeView {
    override render(node: Readonly<SNode & ComponentNode>, context: RenderingContext, args?: IViewArgs): VNode {
        return <g>
            <rect width={node.size.width} height={node.size.height} class-sprotty-node={true}></rect>
            <rect x="4" y="4" width={node.size.width - 8} height={node.size.height - 8} class-sprotty-node={true}></rect>
            <text x={node.size.width / 2} y="30" class-sprotty-text={true}>EngSpdControl</text>
            </g>
    }
}

@injectable()
export class OperandView extends RectangularNodeView {
    override render(node: Readonly<SNode & OperandNode>, context: RenderingContext, args?: IViewArgs): VNode {
        return <g>
            <rect class-sprotty-node={true}
                class-mouseover={node.hoverFeedback} class-selected={node.selected}
                width={node.size.width} height={node.size.height}>
            </rect>
            {
                node.operand === OperandType.ADD && <text x={2} y={node.size.height + 1} w class-operand-symbol={true} style={{fontSize: "45"}}>{node.operand}</text>
            }
            {
                node.operand === OperandType.DIVIDE && <text x={3} y={node.size.height} w class-operand-symbol={true} style={{fontSize: "45"}}>{node.operand}</text>
            }
            {
                node.operand === OperandType.SUBSTRACT && <text x={5} y={30} w class-operand-symbol={true} style={{fontSize: "54"}}>{node.operand}</text>
            }
            {
                node.operand === OperandType.MULTIPLY && <text x={4} y={node.size.height - 5} w class-operand-symbol={true} style={{fontSize: "40"}}>{node.operand}</text>
            }
            </g>
    }
}

@injectable()
export class RelaisView extends RectangularNodeView {
    override render(node: Readonly<SNode & LabelNode>, context: RenderingContext, args?: IViewArgs): VNode {
        return <g>
            <rect width={node.size.width} height={node.size.height} class-sprotty-node={true}></rect>
            <image href={`images/Relais.png`} x="1" width={node.size.width - 2} height={node.size.height - 2}></image>
        </g>
    }
}

// Edges

@injectable()
export class SplitMarkedEdgeView extends PolylineEdgeView {

    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[] {
        const splitMarkers: VNode[] = [];
        for (const segment of segments) {
            if(isIntersectingRoutedPoint(segment)) {
                for(const intersection of segment.intersections) {
                    if(intersection.routable1.split('->')[0] === intersection.routable2.split('->')[0]) {
                        // if intersection from two routable of the same start node add a
                        splitMarkers.push(<g transform={`translate(${intersection.intersectionPoint.x},${intersection.intersectionPoint.y})`}><polygon points="0,4 4,0 0,-4 -4,0"  style={{fill: "black"}}></polygon></g>)
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
        const parentSize = (node.parent as SNode).size
        return <polygon points="0,4 4,0 0,-4 -4,0" style={{stroke: "lightgrey", fill: "lightblue"}}/>
    }
}

@injectable()
export class Icon2 extends ShapeView {
    override render(node: Readonly<SNode>, context: RenderingContext, args?: IViewArgs): VNode {
        const parentSize = (node.parent as SNode).size
        return <g>
            <polygon points="-4,-4 4,-4 4,4" style={{stroke: "lightgrey", fill: "none"}}/>
            <polygon points="-4,-4 -4,4 4,4" style={{stroke: "lightgrey", fill: "orange"}}/>
        </g>
    }
}