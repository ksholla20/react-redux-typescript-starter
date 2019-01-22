import * as React from "react";
import NumberInput from '../numberInput'
interface Props {

}
const holderStyle = {
    marginTop: '20px',
    display: 'inline-grid'
}
export class InputHolder extends React.Component<Props> {
    render(){
        const initValue = [0, 1];
        return (
            <div style = {holderStyle}>
                <NumberInput
                    name = "OPERATOR"
                    value = {initValue[0]}
                />
                <NumberInput
                    name = "OPERAND"
                    value = {initValue[1]}
                />
            </div>
        );
    }
}

export default InputHolder;