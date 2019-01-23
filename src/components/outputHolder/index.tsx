import * as React from "react";
import NumberOutput from '../numberOutput'
import { CalculatorModel } from "../../interfaces/calculatorModels";
interface Props {
    calculatorState: CalculatorModel;
}
const holderStyle = {
    marginTop: '20px',
    display: 'inline-grid'
}
export class OutputHolder extends React.Component<Props> {
    render(){
        const operandA:number = this.props.calculatorState.operandA;
        const operandB:number = this.props.calculatorState.operandB;
        const sum = Number(operandA) + Number(operandB);
        const dif = operandA - operandB;
        const mul = operandA * operandB;
        const dvs = operandB ? operandA / operandB:0;
        return (
            <div style = {holderStyle}>
                <NumberOutput
                    name = "ADDITION"
                    value = {sum}
                />
                <NumberOutput
                    name = "SUBTRACTION"
                    value = {dif}
                />
                <NumberOutput
                    name = "MULTIPLICATION"
                    value = {mul}
                />
                <NumberOutput
                    name = "DIVISION"
                    value = {dvs}
                />
            </div>
        );
    }
}

export default OutputHolder;