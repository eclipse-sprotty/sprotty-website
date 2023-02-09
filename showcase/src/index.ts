import "reflect-metadata";
import { LocalModelSource, TYPES } from "sprotty";
import createASCETContainer from "./sprotty-ASCET-example/di.config";
import createLangiumSprottyContainer from "./interactive-example/diagram-frontend/di.config";
import { model } from "./sprotty-ASCET-example/model-sournce";
import { createMonacoEditor } from './interactive-example/monaco-config';
import { SprottyStarter } from "./interactive-example/diagram-frontend/SprottyStarter";

export default function runExample() {
    if (location.pathname.startsWith('/showcase')) {
        const client = createMonacoEditor('monaco-editor');
        const container = createLangiumSprottyContainer('sprotty-showcase');
        new SprottyStarter(client, container, 'sprotty-showcase').start();
    } else {
        const container = createASCETContainer('sprotty-showcase');
        const modelSource = container.get<LocalModelSource>(TYPES.ModelSource);
        modelSource.setModel(model);
    }
}

//             },
//             <SEdge> {
//                 id: 'SubToDivEdge',
//                 type: 'edge:straight',
//                 sourceId: 'SubOperand',
//                 targetId: 'DivOperand',
//                 routerKind: 'manhattan',
//                 children: [generateArrow()]
//             },
//             <SEdge> {
//                 id: 'DivToPIDTEdge',
//                 type: 'edge:straight',
//                 sourceId: 'DivOperand',
//                 targetId: 'pidt',
//                 routerKind: 'manhattan',
//                 children: [
//                     generateArrow(),
//                     <SLabel> {
//                         id: 'inLabel',
//                         type: 'label:text',
//                         text: 'in',
//                         edgePlacement:  {
//                             position: 0.8,
//                             side: 'top',
//                             rotate: false
//                         }
//                     }
//                 ]
//             },
//             <SEdge> {
//                 id: 'outputEdge',
//                 type: 'edge:straight',
//                 sourceId: 'pidt',
//                 targetId: 'new_pos',
//                 routerKind: 'manhattan',
//                 children: [
//                     generateArrow(),
//                     <SLabel> {
//                         id: 'outLabel',
//                         type: 'label:text',
//                         text: 'out',
//                         edgePlacement:  {
//                             position: 0,
//                             side: 'left',
//                             rotate: false
//                         }
//                     }
//                 ]
//             },
//             <SEdge> {
//                 id: 'T_lEdge',
//                 type: 'edge:straight',
//                 sourceId: 'T_l',
//                 targetId: 'pidt',
//                 routerKind: 'manhattan',
//                 routingPoints: [{x: 660, y: 37}],
//                 children: [
//                     generateArrow(),
//                     <SLabel> {
//                         id: 'TvLabel',
//                         type: 'label:text',
//                         text: 'Tv',
//                         edgePlacement:  {
//                             position: 1,
//                             side: 'bottom',
//                             rotate: false
//                         }
//                     }
//                 ]
//             },
//             <SEdge> {
//                 id: 'T_dEdge',
//                 type: 'edge:straight',
//                 sourceId: 'T_d',
//                 targetId: 'pidt',
//                 routerKind: 'manhattan',
//                 routingPoints: [{x: 630, y: 77}],
//                 children: [
//                     generateArrow(),
//                     <SLabel> {
//                         id: 'TdLabel',
//                         type: 'label:text',
//                         text: 'Td',
//                         edgePlacement:  {
//                             position: 1,
//                             side: 'bottom',
//                             rotate: false
//                         }
//                     }
//                 ]
//             },
//             <SEdge> {
//                 id: 'T_iEdge',
//                 type: 'edge:straight',
//                 sourceId: 'T_i',
//                 targetId: 'pidt',
//                 routerKind: 'manhattan',
//                 routingPoints: [{x: 590, y: 117}],
//                 children: [
//                     generateArrow(),
//                     <SLabel> {
//                         id: 'TiLabel',
//                         type: 'label:text',
//                         text: 'Ti',
//                         edgePlacement:  {
//                             position: 1,
//                             side: 'bottom',
//                             rotate: false
//                         }
//                     }
//                 ]
//             },
//             <SEdge> {
//                 id: 'P_GainEdge',
//                 type: 'edge:straight',
//                 sourceId: 'P_Gain',
//                 targetId: 'MNOperand',
//                 routerKind: 'manhattan',
//                 children: [generateArrow()]
//             },
//             <SEdge> {
//                 id: 'P_MaxEdge',
//                 type: 'edge:straight',
//                 sourceId: 'P_max',
//                 targetId: 'MNOperand',
//                 routerKind: 'manhattan',
//                 children: [generateArrow()]
//             },
//             <SEdge> {
//                 id: 'MNOperandEdge',
//                 type: 'edge:straight',
//                 sourceId: 'MNOperand',
//                 targetId: 'pidt',
//                 routerKind: 'manhattan',
//                 routingPoints: [{x: 560, y: 190}],
//                 children: [
//                     generateArrow(),
//                     <SLabel> {
//                         id: 'KLabel',
//                         type: 'label:text',
//                         text: 'K',
//                         edgePlacement:  {
//                             position: 1,
//                             side: 'bottom',
//                             rotate: false
//                         },
//                     },
//                     <SLabel> {
//                         id: 'computeNormalLabel',
//                         type: 'label:text',
//                         text: 'compute\n________\n/1/normal',
//                         edgePlacement:  {
//                             position: 0.15,
//                             side: 'bottom',
//                             rotate: false
//                         }
//                     }]
//             },
//             <SEdge> {
//                 id: 'cf_Degree2RadEdge',
//                 type: 'edge:straight',
//                 sourceId: 'cf_Degree2Rad',
//                 targetId: 'DivOperand',
//                 routerKind: 'manhattan',
//                 routingPoints: [{x: 475, y: 357}],
//                 children: [generateArrow()]
//             },
//             // controller
//             <SNode & LabelNode>{
//                 id: 'limiter',
//                 text: 'limiter',
//                 type: 'node:controller',
//                 position: {x: 200, y: 292.5},
//                 size: {width: 65, height: 45},
//             },
//             <SNode & LabelNode>{
//                 id: 'pidt',
//                 text: 'pidt1',
//                 type: 'node:controller',
//                 position: {x: 555, y: 275},
//                 size: {width: 120, height: 80},
//             },
//             // in/outputs
//             <SNode & InputNode>{
//                 id: 'MaxPosition',
//                 type: 'node:input',
//                 text: 'MaxPosition',
//                 arrow: ArrowType.STROKE,
//                 position: {x: 100, y: 200},
//                 size: {width: 40, height: 15},
//                 children: [
//                     {
//                         id: "MaxPositionIcon",
//                         type: "label:icon3"
//                     }
//                 ]
//             },
//             <SNode>{
//                 id: 'zero_input',
//                 type: 'node:rect',
//                 text: '0.0',
//                 arrow: ArrowType.STROKE,
//                 position: {x: 100, y: 250},
//                 size: {width: 40, height: 15},
//                 children: [
//                     <SLabel>{
//                         id: '0.0Label',
//                         type: 'label:text',
//                         text: '0.0',
//                         position: {x: 10, y: 12}
//                     }
//                 ]
//             },
//             <SNode & InputNode>{
//                 id: 'target_pos',
//                 type: 'node:input',
//                 text: 'target_pos',
//                 arrow: ArrowType.FULL,
//                 position: {x: 0, y: 307.5},
//                 size: {width: 40, height: 15},
//                 children: [
//                     {
//                         id: "target_posIcon",
//                         type: "label:icon2"
//                     }
//                 ]
//             },
//             <SNode & InputNode>{
//                 id: 'offset_pos',
//                 type: 'node:input',
//                 text: 'offset_pos',
//                 arrow: ArrowType.NONE,
//                 position: {x: 50, y: 360},
//                 size: {width: 40, height: 15},
//                 children: [
//                     {
//                         id: "offset_posIcon",
//                         type: "label:icon1"
//                     }
//                 ]
//             },
//             <SNode & InputNode>{
//                 id: 'actual_pos',
//                 type: 'node:input',
//                 text: 'actual_position',
//                 arrow: ArrowType.FULL,
//                 position: {x: 0, y: 400},
//                 size: {width: 40, height: 15},
//                 children: [
//                     {
//                         id: "actual_posIcon",
//                         type: "label:icon2"
//                     }
//                 ]
//             },
//             <SNode & InputNode>{
//                 id: 'new_pos',
//                 type: 'node:input',
//                 text: 'new_position',
//                 arrow: ArrowType.FULL,
//                 position: {x: 700, y: 307.5},
//                 size: {width: 40, height: 15},
//                 children: [
//                     {
//                         id: "new_posIcon",
//                         type: "label:icon2"
//                     }
//                 ]
//             },
//             <SNode & InputNode>{
//                 id: 'T_l',
//                 type: 'node:input',
//                 text: 'T_l',
//                 arrow: ArrowType.NONE,
//                 position: {x: 350, y: 30},
//                 size: {width: 40, height: 15},
//                 children: [
//                     {
//                         id: "T_lIcon",
//                         type: "label:icon1"
//                     }
//                 ]
//             },
//             <SNode & InputNode>{
//                 id: 'T_d',
//                 type: 'node:input',
//                 text: 'T_d',
//                 arrow: ArrowType.NONE,
//                 position: {x: 350, y: 70},
//                 size: {width: 40, height: 15},
//                 children: [
//                     {
//                         id: "T_dIcon",
//                         type: "label:icon1"
//                     }
//                 ]
//             },
//             <SNode & InputNode>{
//                 id: 'T_i',
//                 type: 'node:input',
//                 text: 'T_i',
//                 arrow: ArrowType.NONE,
//                 position: {x: 350, y: 110},
//                 size: {width: 40, height: 15},
//                 children: [
//                     {
//                         id: "T_iIcon",
//                         type: "label:icon1"
//                     }
//                 ]
//             },
//             <SNode & InputNode>{
//                 id: 'P_Gain',
//                 type: 'node:input',
//                 text: 'P_Gain',
//                 arrow: ArrowType.NONE,
//                 position: {x: 350, y: 150},
//                 size: {width: 40, height: 15},
//                 children: [
//                     {
//                         id: "P_GainsIcon",
//                         type: "label:icon1"
//                     }
//                 ]
//             },
//             <SNode & InputNode>{
//                 id: 'P_max',
//                 type: 'node:input',
//                 text: 'P_max',
//                 arrow: ArrowType.STROKE,
//                 position: {x: 350, y: 190},
//                 size: {width: 40, height: 15},
//                 children: [
//                     {
//                         id: "P_maxIcon",
//                         type: "label:icon3"
//                     }
//                 ]
//             },
//             <SNode & InputNode>{
//                 id: 'cf_Degree2Rad',
//                 type: 'node:input',
//                 text: 'cf_Degree2Rad',
//                 arrow: ArrowType.STROKE,
//                 position: {x: 380, y: 350},
//                 size: {width: 40, height: 15},
//                 children: [
//                     {
//                         id: "cf_Degree2RadIcon",
//                         type: "label:icon4"
//                     }
//                 ]
//             },
//             // operands
//             <SNode & OperandNode>{
//                 id: 'AddOperand',
//                 type: 'node:operand',
//                 operand: OperandType.ADD,
//                 position: {x: 130, y: 300},
//                 size: {width: 30, height: 30}
//             },
//             <SNode & OperandNode>{
//                 id: 'SubOperand',
//                 type: 'node:operand',
//                 operand: OperandType.SUBSTRACT,
//                 position: {x: 320, y: 300},
//                 size: {width: 30, height: 30}
//             },
//             <SNode & OperandNode>{
//                 id: 'DivOperand',
//                 type: 'node:operand',
//                 operand: OperandType.DIVIDE,
//                 position: {x: 460, y: 300},
//                 size: {width: 30, height: 30}
//             },
//             <SNode & OperandNode>{
//                 id: 'MNOperand',
//                 type: 'node:operand',
//                 operand: OperandType.MN,
//                 position: {x: 440, y: 160},
//                 size: {width: 40, height: 50}
//             },
//         ]
//     })
// }

// let arrowIdCounter = 0;
// function generateArrow(): SLabel {
//     return <SLabel> {
//             id: 'arrow' + arrowIdCounter++,
//             type: 'label:arrow',
//             text: '',
//             edgePlacement:  {
//                 position: 1,
//                 side: 'on',
//                 rotate: true
//             }
//         }
} 

document.addEventListener("DOMContentLoaded", () => runExample());
