import * as React from "react";
import NumberInput from '../numberInput'
import { CalculatorModel } from "../../interfaces/calculatorModels";

interface Props {
    calculatorState: CalculatorModel;
    actions: any;
}
const holderStyle = {
    marginTop: '20px',
    display: 'inline-grid'
}
export class InputHolder extends React.Component<Props> {
    render(){
        return (
            <div style = {holderStyle}>
                <NumberInput
                    name = "OPERANDA"
                    value = {this.props.calculatorState.operandA}
                    callback = {this.props.actions.setOperandA}
                />
                <NumberInput
                    name = "OPERANDB"
                    value = {this.props.calculatorState.operandB}
                    callback = {this.props.actions.setOperandB}
                />
            </div>
        );
    }
}

export default InputHolder;