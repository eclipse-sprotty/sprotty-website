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
            id: 'Egc_fac_Egas',
            type: 'node:input',
            text: 'Egc_fac_Egas',
            arrow: ArrowType.FULL,
            position: {x: 40, y: 200},
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
            position: {x: 40, y: 400},
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
            position: {x: 40, y: 500},
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
            position: {x: 530, y: 200},
            size: inputSize,
            children: [
                {
                    id: "Tqs_facEgasFiltIcon",
                    type: "label:icon2"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Tqs_tqMax',
            type: 'node:input',
            text: 'Tqs_tqMax',
            arrow: ArrowType.STROKE,
            position: {x: 530, y: 300},
            size: inputSize,
            children: [
                {
                    id: "Tqs_tqMaxIcon",
                    type: "label:icon2"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Tqs_tqDrag',
            type: 'node:input',
            text: 'Tqs_tqDrag',
            arrow: ArrowType.STROKE,
            position: {x: 530, y: 400},
            size: inputSize,
            children: [
                {
                    id: "Tqs_tqDragIcon",
                    type: "label:icon2"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Tqs_tqMin',
            type: 'node:input',
            text: 'Tqs_tqMin',
            arrow: ArrowType.FULL,
            position: {x: 900, y: 400},
            size: inputSize,
            children: [
                {
                    id: "Tqs_tqMinIcon",
                    type: "label:icon2"
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
            position: {x: 950, y: 100},
            size: inputSize,
            children: [
                {
                    id: "Tqs_tqReqCalcIcon",
                    type: "label:icon2"
                }
            ]
        },
        <SNode & InputNode>{
            id: 'Tqs_tqReqMan',
            type: 'node:input',
            text: 'Tqs_tqReqMan',
            arrow: ArrowType.NONE,
            position: {x: 950, y: 180},
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
                    type: "label:icon2"
                }
            ]
        },
        // Operands
        <SNode & OperandNode>{
            id: 'AddOpDrag',
            type: 'node:operand',
            operand: OperandType.ADD,
            position: {x: 450, y: 400},
            size: operandSize
        },
        <SNode & OperandNode>{
            id: 'MultOpDrag',
            type: 'node:operand',
            operand: OperandType.MULTIPLY,
            position: {x: 620, y: 400},
            size: operandSize
        },
        <SNode & OperandNode>{
            id: 'SubOp',
            type: 'node:operand',
            operand: OperandType.SUBSTRACT,
            position: {x: 670, y: 300},
            size: operandSize
        },
        <SNode & OperandNode>{
            id: 'MultOpEgas',
            type: 'node:operand',
            operand: OperandType.MULTIPLY,
            position: {x: 720, y: 200},
            size: operandSize
        },
        <SNode & OperandNode>{
            id: 'AddOpEgas',
            type: 'node:operand',
            operand: OperandType.ADD,
            position: {x: 800, y: 200},
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
            id: 'bigController',
            type: 'node:rect',
            size: {width: 180, height: 120},
            position: {x: 250, y: 20}
        },
        
        
        
        // Edges
        <SEdge> {
            id: 'P_MaxEdge',
            type: 'edge:straight',
            sourceId: 'Amf_facRelAir',
            targetId: 'Tqs_rpmEngSpdfacRelAir2tqDrag_MAP',
            routerKind: 'manhattan',
            children: [generateArrow()]
        },
    ]

}

