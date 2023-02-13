import { SNode, SEdge, SLabel } from "sprotty-protocol";
import { ArrowType, ComponentNode, InputNode, LabelNode, OperandNode, OperandType } from "./models";

const inputSize = {width: 40, height: 15};
const operandSize = {width: 30, height: 30};

const edgeBasics = {
    type: "edge:straight",
    routerKind: 'manhattan',
    children: [generateArrow()]
}

let arrowIdCounter = 0;
function generateArrow(): SLabel {
    return <SLabel> {
            id: 'arrow' + arrowIdCounter++,
            type: 'label:arrow',
            text: '',
            edgePlacement:  {
                position: 1,
                side: 'on',
                rotate: true
            }
        }
} 

export const model = {
    type: 'graph',
    id: 'graph',
    children: [
        // inputs
        <SNode & InputNode>{
            id: 'Epm_rpmEngSpd',
            type: 'node:input',
            text: 'Epm_rpmEngSpd',
            arrow: ArrowType.FULL,
            position: {x: 40, y: 150},
            size: inputSize,
            children: [
                {
                    id: "tEpm_rpmEngSpdIcon",
                    type: "label:icon2"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Egc_facEgas',
            type: 'node:input',
            text: 'Egc_facEgas',
            arrow: ArrowType.FULL,
            position: {x: 40, y: 205},
            size: inputSize,
            children: [
                {
                    id: "Egc_fac_EgasIcon",
                    type: "label:icon2"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Amf_facRelAir',
            type: 'node:input',
            text: 'Amf_facRelAir',
            arrow: ArrowType.FULL,
            position: {x: 40, y: 405},
            size: inputSize,
            children: [
                {
                    id: "Amf_facRelAirIcon",
                    type: "label:icon2"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Ctc_atCool',
            type: 'node:input',
            text: 'Ctc_atCool',
            arrow: ArrowType.FULL,
            position: {x: 40, y: 495},
            size: inputSize,
            children: [
                {
                    id: "Ctc_atCoolIcon",
                    type: "label:icon2"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Isc_fac_IdleSpdStab',
            type: 'node:input',
            text: 'Isc_fac_IdleSpdStab',
            arrow: ArrowType.FULL,
            position: {x: 40, y: 620},
            size: inputSize,
            children: [
                {
                    id: "Isc_fac_IdleSpdStabIcon",
                    type: "label:icon2"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Tqs_facEgasFilt',
            type: 'node:input',
            text: 'Tqs_facEgasFilt',
            arrow: ArrowType.STROKE,
            position: {x: 530, y: 195},
            size: inputSize,
            children: [
                {
                    id: "Tqs_facEgasFiltIcon",
                    type: "label:icon3"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Tqs_tqMax',
            type: 'node:input',
            text: 'Tqs_tqMax',
            arrow: ArrowType.STROKE,
            position: {x: 530, y: 295},
            size: inputSize,
            children: [
                {
                    id: "Tqs_tqMaxIcon",
                    type: "label:icon3"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Tqs_tqDrag',
            type: 'node:input',
            text: 'Tqs_tqDrag',
            arrow: ArrowType.STROKE,
            position: {x: 530, y: 395},
            size: inputSize,
            children: [
                {
                    id: "Tqs_tqDragIcon",
                    type: "label:icon3"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Tqs_tqMin',
            type: 'node:input',
            text: 'Tqs_tqMin',
            arrow: ArrowType.FULL,
            position: {x: 900, y: 395},
            size: inputSize,
            children: [
                {
                    id: "Tqs_tqMinIcon",
                    type: "label:icon3"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Tqs_flgTorqueRegOverride',
            type: 'node:input',
            text: 'Tqs_flgTorqueRegOverride',
            arrow: ArrowType.NONE,
            position: {x: 950, y: 20},
            size: inputSize,
            children: [
                {
                    id: "Tqs_flgTorqueRegOverrideIcon",
                    type: "label:icon1"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Tqs_tqReqCalc',
            type: 'node:input',
            text: 'Tqs_tqReqCalc',
            arrow: ArrowType.STROKE,
            position: {x: 950, y: 107.5},
            size: inputSize,
            children: [
                {
                    id: "Tqs_tqReqCalcIcon",
                    type: "label:icon3"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Tqs_tqReqMan',
            type: 'node:input',
            text: 'Tqs_tqReqMan',
            arrow: ArrowType.NONE,
            position: {x: 950, y: 150},
            size: inputSize,
            children: [
                {
                    id: "Tqs_tqReqManIcon",
                    type: "label:icon1"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Tqs_tqReq',
            type: 'node:input',
            text: 'Tqs_tqReq',
            arrow: ArrowType.FULL,
            position: {x: 1250, y: 125},
            size: inputSize,
            children: [
                {
                    id: "Tqs_tqReqIcon",
                    type: "label:icon3"
                }
            ]
        },
        // Operands
        <SNode & OperandNode>{
            id: 'AddOpDrag',
            type: 'node:operand',
            operand: OperandType.ADD,
            position: {x: 450, y: 387.5},
            size: operandSize
        },
        <SNode & OperandNode>{
            id: 'MultOpDrag',
            type: 'node:operand',
            operand: OperandType.MULTIPLY,
            position: {x: 620, y: 387.5},
            size: operandSize
        },
        <SNode & OperandNode>{
            id: 'SubOp',
            type: 'node:operand',
            operand: OperandType.SUBSTRACT,
            position: {x: 670, y: 287.5},
            size: operandSize
        },
        <SNode & OperandNode>{
            id: 'MultOpEgas',
            type: 'node:operand',
            operand: OperandType.MULTIPLY,
            position: {x: 720, y: 187.5},
            size: operandSize
        },
        <SNode & OperandNode>{
            id: 'AddOpEgas',
            type: 'node:operand',
            operand: OperandType.ADD,
            position: {x: 800, y: 187.5},
            size: operandSize
        },
        <SNode & OperandNode>{
            id: 'AddOpCalcReq',
            type: 'node:operand',
            operand: OperandType.ADD,
            position: {x: 850, y: 100},
            size: operandSize
        },
        // components
        <SNode & ComponentNode>{
            id: 'Tqs_rpmEngSpdfacEgas2facEgasFilt_MAP',
            type: 'node:component',
            text: 'Tqs_rpmEngSpdfacEgas2facEgasFilt_MAP',
            image: 'MAP_Icon.png',
            position: {x: 300, y: 170},
            size: {width: 60, height: 65}
        },
        <SNode & ComponentNode>{
            id: 'Tqs_rpmEngSpd2tqMax_CUR',
            type: 'node:component',
            text: 'Tqs_rpmEngSpd2tqMax_CUR',
            image: 'CUR_Icon.png',
            position: {x: 300, y: 270},
            size: {width: 60, height: 65}
        },
        <SNode & ComponentNode>{
            id: 'Tqs_rpmEngSpdfacRelAir2tqDrag_MAP',
            type: 'node:component',
            text: 'Tqs_rpmEngSpdfacRelAir2tqDrag_MAP',
            image: 'MAP_Icon.png',
            position: {x: 300, y: 370},
            size: {width: 60, height: 65}
        },
        <SNode & ComponentNode>{
            id: 'Tqs_atCool2tqDrag_CUR',
            type: 'node:component',
            text: 'Tqs_atCool2tqDrag_CUR',
            image: 'CUR_Icon.png',
            position: {x: 300, y: 470},
            size: {width: 60, height: 65}
        },
        // Other nodes
        <SNode & ComponentNode>{
            id: 'subController',
            type: 'node:controller',
            size: {width: 180, height: 120},
            position: {x: 250, y: 20}
        },
        <SNode>{
            id: 'Relais',
            type: 'node:relais',
            position: {x: 1150, y: 107.5},
            size: {width: 30, height: 50},
        },
        // Labels
        <SLabel> {
            id: '/3/Tqs_calc',
            type: 'label:text',
            text: '/3/Tqs_calc',
            position: {x: 550, y: 180}
        },
        <SLabel> {
            id: '/4/Tqs_calc',
            type: 'label:text',
            text: '/4/Tqs_calc',
            position: {x: 550, y: 280}
        },
        <SLabel> {
            id: '/5/Tqs_calc',
            type: 'label:text',
            text: '/5/Tqs_calc',
            position: {x: 550, y: 380}
        },
        <SLabel> {
            id: '/7/Tqs_calc',
            type: 'label:text',
            text: '/7/Tqs_calc',
            position: {x: 920, y: 380}
        },
        <SLabel> {
            id: '/8/Tqs_calc',
            type: 'label:text',
            text: '/8/Tqs_calc',
            position: {x: 970, y: 90}
        },
        <SLabel> {
            id: '/9/Tqs_calc',
            type: 'label:text',
            text: '/9/Tqs_calc',
            position: {x: 1270, y: 110}
        },
        
        
        
        // Edges
        <SEdge> {
            id: 'Epm_rpmEngSpd->subController',
            type: 'edge:straight',
            sourceId: 'Epm_rpmEngSpd',
            targetId: 'subController',
            routerKind: 'manhattan',
            routingPoints: [{x:165.01, y: 157}, {x: 165,y: 80}],
            children: [
                generateArrow(),
                <SLabel> {
                    id: 'controllerInputLabel1',
                    text: 'Epm_rpmEngSpd',
                    type: 'label:text',
                    cssClasses: ['inputOutputLabel'],
                    edgePlacement: {
                        position: 0.8,
                        side: 'top',
                        rotate: false
                    }
                }
            ]
        },
        <SEdge> {
            id: 'Epm_rpmEngSpd->Tqs_rpmEngSpdfacEgas2facEgasFilt_MAP',
            type: 'edge:straight',
            sourceId: 'Epm_rpmEngSpd',
            targetId: 'Tqs_rpmEngSpdfacEgas2facEgasFilt_MAP',
            routerKind: 'manhattan',
            routingPoints: [{x:165, y: 157}, {x:165, y: 190}],
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Epm_rpmEngSpd->Tqs_rpmEngSpd2tqMax_CUR',
            type: 'edge:straight',
            sourceId: 'Epm_rpmEngSpd',
            targetId: 'Tqs_rpmEngSpd2tqMax_CUR',
            routerKind: 'manhattan',
            routingPoints: [{x:164.5, y: 157},{x: 164.5, y: 302.5}],
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Epm_rpmEngSpd->Tqs_rpmEngSpdfacRelAir2tqDrag_MAP',
            type: 'edge:straight',
            sourceId: 'Epm_rpmEngSpd',
            targetId: 'Tqs_rpmEngSpdfacRelAir2tqDrag_MAP',
            routerKind: 'manhattan',
            routingPoints: [{x:165, y: 157}, {x:165, y: 390}],
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Egc_facEgas->subController',
            type: 'edge:straight',
            sourceId: 'Egc_facEgas',
            targetId: 'subController',
            routerKind: 'manhattan',
            routingPoints: [{x: 180, y: 212.5}, {x: 180, y: 95}],
            children: [
                generateArrow(),
                <SLabel> {
                    id: 'controllerInputLabel2',
                    text: 'Epm_facEgas',
                    type: 'label:text',
                    cssClasses: ['inputOutputLabel'],
                    edgePlacement: {
                        position: 0.85,
                        side: 'bottom',
                        rotate: false
                    }
                }
            ]
        },
        <SEdge> {
            id: 'Egc_facEgas->Tqs_rpmEngSpdfacEgas2facEgasFilt_MAP',
            type: 'edge:straight',
            sourceId: 'Egc_facEgas',
            targetId: 'Tqs_rpmEngSpdfacEgas2facEgasFilt_MAP',
            routerKind: 'manhattan',
            routingPoints: [{x: 200, y: 212.5}],
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Amf_facRelAir->Tqs_rpmEngSpdfacRelAir2tqDrag_MAP',
            type: 'edge:straight',
            sourceId: 'Amf_facRelAir',
            targetId: 'Tqs_rpmEngSpdfacRelAir2tqDrag_MAP',
            routerKind: 'manhattan',
            routingPoints: [{x: 290, y: 412.5}],
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Ctc_atCool->Tqs_atCool2tqDrag_CUR',
            type: 'edge:straight',
            sourceId: 'Ctc_atCool',
            targetId: 'Tqs_atCool2tqDrag_CUR',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Isc_fac_IdleSpdStab->MultOpDrag',
            type: 'edge:straight',
            sourceId: 'Isc_fac_IdleSpdStab',
            targetId: 'MultOpDrag',
            routerKind: 'manhattan',
            routingPoints: [{x: 635, y: 627.5}],
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Tqs_rpmEngSpdfacRelAir2tqDrag_MAP->AddOpDrag',
            type: 'edge:straight',
            sourceId: 'Tqs_rpmEngSpdfacRelAir2tqDrag_MAP',
            targetId: 'AddOpDrag',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'AddOpDrag->AddOpDrag',
            type: 'edge:straight',
            sourceId: 'AddOpDrag',
            targetId: 'Tqs_tqDrag',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Tqs_tqDrag->MultOpDrag',
            type: 'edge:straight',
            sourceId: 'Tqs_tqDrag',
            targetId: 'MultOpDrag',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Tqs_atCool2tqDrag_CUR->AddOpDrag',
            type: 'edge:straight',
            sourceId: 'Tqs_atCool2tqDrag_CUR',
            targetId: 'AddOpDrag',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'MultOpDrag->Tqs_tqMin',
            type: 'edge:straight',
            sourceId: 'MultOpDrag',
            targetId: 'Tqs_tqMin',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'MultOpDrag->SubOp',
            type: 'edge:straight',
            sourceId: 'MultOpDrag',
            targetId: 'SubOp',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'MultOpDrag->AddOpEgas',
            type: 'edge:straight',
            sourceId: 'MultOpDrag',
            targetId: 'AddOpEgas',
            routerKind: 'manhattan',
            routingPoints: [{x: 815, y: 402.5}],
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Tqs_rpmEngSpdfacEgas2facEgasFilt_MAP->Tqs_facEgasFilt',
            type: 'edge:straight',
            sourceId: 'Tqs_rpmEngSpdfacEgas2facEgasFilt_MAP',
            targetId: 'Tqs_facEgasFilt',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Tqs_facEgasFilt->MultOpEgas',
            type: 'edge:straight',
            sourceId: 'Tqs_facEgasFilt',
            targetId: 'MultOpEgas',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Tqs_rpmEngSpd2tqMax_CUR->Tqs_tqMax',
            type: 'edge:straight',
            sourceId: 'Tqs_rpmEngSpd2tqMax_CUR',
            targetId: 'Tqs_tqMax',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Tqs_tqMax->SubOp',
            type: 'edge:straight',
            sourceId: 'Tqs_tqMax',
            targetId: 'SubOp',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'SubOp->MultOpEgas',
            type: 'edge:straight',
            sourceId: 'SubOp',
            targetId: 'MultOpEgas',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'MultOpEgas->AddOpEgas',
            type: 'edge:straight',
            sourceId: 'MultOpEgas',
            targetId: 'AddOpEgas',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'AddOpEgas->AddOpCalcReq',
            type: 'edge:straight',
            sourceId: 'AddOpEgas',
            targetId: 'AddOpCalcReq',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'subController->AddOpCalcReq',
            type: 'edge:straight',
            sourceId: 'subController',
            targetId: 'AddOpCalcReq',
            routerKind: 'manhattan',
            children: [
                generateArrow(),
                <SLabel> {
                    id: 'controllerOutputLabel',
                    text: 'Tqs_tqIdleSpdCtrlCorr',
                    type: 'label:text',
                    cssClasses: ['inputOutputLabel'],
                    edgePlacement: {
                        position: 0.15,
                        side: 'left',
                        rotate: false
                    }
                }
            ]
        },
        <SEdge> {
            id: 'AddOpCalcReq->Tqs_tqReqCalc',
            type: 'edge:straight',
            sourceId: 'AddOpCalcReq',
            targetId: 'Tqs_tqReqCalc',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Tqs_flgTorqueRegOverride->Relais',
            type: 'edge:straight',
            sourceId: 'Tqs_flgTorqueRegOverride',
            targetId: 'Relais',
            routerKind: 'manhattan',
            routingPoints: [{x: 1165, y: 27.5}],
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Tqs_tqReqCalc->Relais',
            type: 'edge:straight',
            sourceId: 'Tqs_tqReqCalc',
            targetId: 'Relais',
            routerKind: 'manhattan',
            routingPoints: [{x: 1110, y: 120}],
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Tqs_tqReqMan->Relais',
            type: 'edge:straight',
            sourceId: 'Tqs_tqReqMan',
            targetId: 'Relais',
            routerKind: 'manhattan',
            routingPoints: [{x:1110, y: 150}],
            children: [generateArrow()]
        },
        <SEdge> {
            id: 'Relais->Tqs_tqReq',
            type: 'edge:straight',
            sourceId: 'Relais',
            targetId: 'Tqs_tqReq',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
        
    ]

}

