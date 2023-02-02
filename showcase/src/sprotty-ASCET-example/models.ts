import { SNode } from "sprotty-protocol";

export enum ArrowType {
    NONE,
    FULL,
    STROKE
}

export interface InputNode extends LabelNode {
    arrow: ArrowType;
}

export interface LabelNode extends SNode {
    text: string;
}

export enum OperandType {
    ADD = "+",
    SUBSTRACT = "-",
    DIVIDE = "÷",
    MN = "MN"
}

export interface OperandNode {
    operand: OperandType
}