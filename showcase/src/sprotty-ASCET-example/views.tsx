/** @jsx svg */
import { svg } from 'sprotty/lib/lib/jsx';

import { injectable } from 'inversify';
import { VNode } from "snabbdom";
import { IViewArgs, RectangularNodeView, RenderingContext, SNode } from "sprotty";
import { ArrowType, InputNode, LabelNode, OperandNode } from './models';


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
                points={(node.size.width - 10) + ',0 ' + (node.size.width) + ',' + (node.size.height / 2) + ' ' + (node.size.width - 10) + ',' + node.size.height} /> }
            <text x="0" y={node.size.height + 15} class-sprotty-text={true}>{node.text}</text>
        </g>
    }
}

@injectable()
export class ControllerView extends RectangularNodeView {
    override render(node: Readonly<SNode & LabelNode>, context: RenderingContext, args?: IViewArgs): VNode {
        return <g>
            <rect class-sprotty-node={true}
                class-mouseover={node.hoverFeedback} class-selected={node.selected}
                width={Math.max(node.size.width, 0)} height={Math.max(node.size.height, 0)}>
            </rect>
            <rect class-controller-marker={true} width="10" height="10" x={node.size.width / 2 - 5} y="-5"></rect>
            <text x="0" y={node.size.height + 20} class-sprotty-text={true}>{node.text}</text>
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
            <text x={2} y={node.size.height} w class-operand-symbol={true}>{node.operand}</text>
            </g>
    }
}