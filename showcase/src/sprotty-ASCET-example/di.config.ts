import { Container, ContainerModule } from "inversify";
import { configureModelElement, configureViewerOptions, ConsoleLogger, loadDefaultModules, LocalModelSource, LogLevel, PolylineEdgeView, RectangularNode, RectangularNodeView, SEdge, SGraph, SGraphView, SLabel, SLabelView, SRoutingHandle, SRoutingHandleView, TYPES } from "sprotty";
import { ControllerView, EdgeArrow, InputView, OperandView } from "./views";


export default (containerId: string) => {

    const ASCETExamleModule = new ContainerModule((bind, unbind, isBound, rebind) => { 
        bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();
        rebind(TYPES.ILogger).to(ConsoleLogger).inSingletonScope();
        rebind(TYPES.LogLevel).toConstantValue(LogLevel.log);
        const context = { bind, unbind, isBound, rebind };
        configureModelElement(context, 'graph', SGraph, SGraphView);
        configureModelElement(context, 'node:input', RectangularNode, InputView);
        configureModelElement(context, 'node:controller', RectangularNode, ControllerView);
        configureModelElement(context, 'node:operand', RectangularNode, OperandView);
        configureModelElement(context, 'edge:straight', SEdge, PolylineEdgeView);
        configureModelElement(context, 'label:arrow', SLabel, EdgeArrow);
        configureModelElement(context, 'label:text', SLabel, SLabelView)
        configureModelElement(context, 'routing-point', SRoutingHandle, SRoutingHandleView)
        configureModelElement(context, 'volatile-routing-point', SRoutingHandle, SRoutingHandleView);

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