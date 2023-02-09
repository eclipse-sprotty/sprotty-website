/** @jsx svg */
import { svg } from 'sprotty/lib/lib/jsx';

import { VNode } from "snabbdom";
import { Hoverable, IViewArgs, RectangularNodeView, RenderingContext, Selectable, SShapeElement } from "sprotty";

export class StateNodeView extends RectangularNodeView {
    render(node: Readonly<SShapeElement & Hoverable & Selectable>, context: RenderingContext, args?: IViewArgs): VNode {
        return <rect></rect>
    }
}