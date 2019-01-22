import * as React from "react";
import NumberOutput from '../numberOutput'
interface Props {

}
const holderStyle = {
    marginTop: '20px',
    display: 'inline-grid'
}
export class OutputHolder extends React.Component<Props> {
    render(){
        const initValue = [0,1];
        const operator = initValue[0], operand = initValue[1];
        const sum = operator + operand;
        const dif = operator - operand;
        const mul = operator * operand;
        const dvs = operand ? 0:operator / operand;
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