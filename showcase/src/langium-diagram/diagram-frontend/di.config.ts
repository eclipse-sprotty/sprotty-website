import { Container, ContainerModule } from "inversify";
import { MonacoLanguageClient } from "monaco-languageclient";
import { configureModelElement, configureViewerOptions, ConsoleLogger, 
    loadDefaultModules, LocalModelSource, LogLevel, TYPES, PolylineEdgeView, RectangularNode, 
    RectangularNodeView, SEdge, SGraph, SGraphView, SLabel, SLabelView, SRoutingHandle, SRoutingHandleView, RectangularPort, popupFeature, creatingOnDragFeature, editFeature, moveFeature, selectFeature } from "sprotty";
import { LSWorkerDiagramServerProxy } from "./ls-worker-proxy";
import { EdgeArrow } from "./views";


export default (containerId: string, client: MonacoLanguageClient) => {

    const StatemachineLangiumModule = new ContainerModule((bind, unbind, isBound, rebind) => { 
        bind(MonacoLanguageClient).toConstantValue(client);
        bind(TYPES.ModelSource).to(LSWorkerDiagramServerProxy).inSingletonScope();
        
        const context = { bind, unbind, isBound, rebind };
        configureModelElement(context, 'graph', SGraph, SGraphView);
        configureModelElement(context, 'node', RectangularNode, RectangularNodeView, {
            disable: [moveFeature]
        });
        configureModelElement(context, 'edge', SEdge, PolylineEdgeView, {
            disable: [editFeature]
        });
        configureModelElement(context, 'label', SLabel, SLabelView);
        configureModelElement(context, 'label:xref', SLabel, SLabelView);
        configureModelElement(context, 'label:arrow', SLabel, EdgeArrow);
        configureModelElement(context, 'routing-point', SRoutingHandle, SRoutingHandleView);
        configureModelElement(context, 'volatile-routing-point', SRoutingHandle, SRoutingHandleView);
        configureModelElement(context, 'port', RectangularPort, RectangularNodeView);

        configureViewerOptions(context, {
            needsClientLayout: false,
            needsServerLayout: true,
            baseDiv: containerId,
            zoomLimits: {min: 0.4, max: 1.5},
            horizontalScrollLimits: {min: -1950, max: 2150},
            verticalScrollLimits: {min: -950, max: 1500},
        });

    });

    const container = new Container();
    loadDefaultModules(container);
    container.load(StatemachineLangiumModule);
    return container;
}