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

export interface ComponentNode extends LabelNode {
    image: string
}

export enum OperandType {
    ADD = "+",
    SUBSTRACT = "-",
    DIVIDE = "÷",
    MULTIPLY = "x"
}

export interface OperandNode {
    operand: OperandType
}