/** @jsx svg */
import { svg } from 'sprotty/lib/lib/jsx';

import { VNode } from "snabbdom";
import { Hoverable, IViewArgs, PolylineEdgeView, RectangularNodeView, RenderingContext, SEdge, Selectable, ShapeView, SLabel, SShapeElement } from "sprotty";
import { Point } from 'sprotty-protocol';
import {injectable} from 'inversify'

@injectable()
export class EdgeArrow extends ShapeView {
    override render(node: Readonly<SLabel>, context: RenderingContext, args?: IViewArgs): VNode {
        return <polygon points={`-6,-4 0,0 -6,4`} style={{fill: "black"}}></polygon>
    }
}