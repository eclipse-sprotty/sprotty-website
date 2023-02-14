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

import { Container, ContainerModule } from "inversify";
import { configureModelElement, configureViewerOptions, ConsoleLogger, edgeIntersectionModule, JumpingPolylineEdgeView, loadDefaultModules, LocalModelSource, LogLevel, PolylineEdgeView, RectangularNode, RectangularNodeView, SChildElement, SEdge, SGraph, SGraphView, SLabel, SLabelView, SModelElement, SRoutingHandle, SRoutingHandleView, SShapeElement, TYPES } from "sprotty";
import { ComponentView, ControllerView, EdgeArrow, Icon1, Icon2, Icon3, InputView, OperandView, RelaisView, SplitMarkedEdgeView } from "./views";


export default (containerId: string) => {

    const ASCETExamleModule = new ContainerModule((bind, unbind, isBound, rebind) => { 
        bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();
        rebind(TYPES.ILogger).to(ConsoleLogger).inSingletonScope();
        rebind(TYPES.LogLevel).toConstantValue(LogLevel.log);
        const context = { bind, unbind, isBound, rebind };
        configureModelElement(context, 'graph', SGraph, SGraphView);
        configureModelElement(context, 'node:input', RectangularNode, InputView);
        configureModelElement(context, 'node:component', RectangularNode, ComponentView);
        configureModelElement(context, 'node:operand', RectangularNode, OperandView);
        configureModelElement(context, 'node:controller', RectangularNode, ControllerView);
        configureModelElement(context, 'node:relais', RectangularNode, RelaisView);
        configureModelElement(context, 'edge:straight', SEdge, SplitMarkedEdgeView);
        configureModelElement(context, 'label:arrow', SLabel, EdgeArrow);
        configureModelElement(context, 'label:text', SLabel, SLabelView)
        configureModelElement(context, 'routing-point', SRoutingHandle, SRoutingHandleView)
        configureModelElement(context, 'volatile-routing-point', SRoutingHandle, SRoutingHandleView);
        // icons
        configureModelElement(context, 'label:icon1', SChildElement, Icon1);
        configureModelElement(context, 'label:icon2', SChildElement, Icon2);
        configureModelElement(context, 'label:icon3', SChildElement, Icon3);


        configureViewerOptions(context, {
            needsClientLayout: false,
            baseDiv: containerId
        });

    });

    const container = new Container();
    loadDefaultModules(container);
    container.load(ASCETExamleModule);
    container.load(edgeIntersectionModule)
    return container;

}