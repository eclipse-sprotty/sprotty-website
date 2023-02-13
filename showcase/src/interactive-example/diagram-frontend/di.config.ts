import { Container, ContainerModule } from "inversify";
import { MonacoLanguageClient } from "monaco-languageclient";
import { configureModelElement, configureViewerOptions, ConsoleLogger, 
    loadDefaultModules, LocalModelSource, LogLevel, TYPES, PolylineEdgeView, RectangularNode, 
    RectangularNodeView, SEdge, SGraph, SGraphView, SLabel, SLabelView, SRoutingHandle, SRoutingHandleView, RectangularPort, popupFeature, creatingOnDragFeature } from "sprotty";
import { LSWorkerDiagramServerProxy } from "./ls-worker-proxy";
import { EdgeArrow } from "./views";


export default (containerId: string, client: MonacoLanguageClient) => {

    const StatemachineLangiumModule = new ContainerModule((bind, unbind, isBound, rebind) => { 
        rebind(TYPES.ILogger).to(ConsoleLogger).inSingletonScope();
        rebind(TYPES.LogLevel).toConstantValue(LogLevel.log);
        bind(MonacoLanguageClient).toConstantValue(client);
        bind(TYPES.ModelSource).to(LSWorkerDiagramServerProxy).inSingletonScope();
        
        const context = { bind, unbind, isBound, rebind };
        configureModelElement(context, 'graph', SGraph, SGraphView);
        configureModelElement(context, 'node', RectangularNode, RectangularNodeView);
        configureModelElement(context, 'edge', SEdge, PolylineEdgeView);
        configureModelElement(context, 'label', SLabel, SLabelView);
        configureModelElement(context, 'label:xref', SLabel, SLabelView);
        configureModelElement(context, 'label:arrow', SLabel, EdgeArrow);
        configureModelElement(context, 'routing-point', SRoutingHandle, SRoutingHandleView);
        configureModelElement(context, 'volatile-routing-point', SRoutingHandle, SRoutingHandleView);
        configureModelElement(context, 'port', RectangularPort, RectangularNodeView);

        configureViewerOptions(context, {
            needsClientLayout: false,
            needsServerLayout: true,
            baseDiv: containerId
        });

    });

    const container = new Container();
    loadDefaultModules(container);
    container.load(StatemachineLangiumModule);
    return container;
}