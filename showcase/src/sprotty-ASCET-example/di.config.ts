import { Container, ContainerModule } from "inversify";
import { configureModelElement, configureViewerOptions, ConsoleLogger, loadDefaultModules, LocalModelSource, LogLevel, PolylineEdgeView, RectangularNode, RectangularNodeView, SChildElement, SEdge, SGraph, SGraphView, SLabel, SLabelView, SModelElement, SRoutingHandle, SRoutingHandleView, SShapeElement, TYPES } from "sprotty";
import { ComponentView, EdgeArrow, Icon1, Icon2, Icon3, Icon4, InputView, OperandView } from "./views";


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
        configureModelElement(context, 'node:rect', RectangularNode, RectangularNodeView);
        configureModelElement(context, 'edge:straight', SEdge, PolylineEdgeView);
        configureModelElement(context, 'label:arrow', SLabel, EdgeArrow);
        configureModelElement(context, 'label:text', SLabel, SLabelView)
        configureModelElement(context, 'routing-point', SRoutingHandle, SRoutingHandleView)
        configureModelElement(context, 'volatile-routing-point', SRoutingHandle, SRoutingHandleView);
        // icons
        configureModelElement(context, 'label:icon1', SChildElement, Icon1);
        configureModelElement(context, 'label:icon2', SChildElement, Icon2);
        configureModelElement(context, 'label:icon3', SChildElement, Icon3);
        configureModelElement(context, 'label:icon4', SChildElement, Icon4);


        configureViewerOptions(context, {
            needsClientLayout: false,
            baseDiv: containerId
        });

    });

    const container = new Container();
    loadDefaultModules(container);
    container.load(ASCETExamleModule);
    return container;

}