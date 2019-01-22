import * as React from "react";
import InputHolder from '../../components/inputHolder'
import OutputHolder from '../../components/outputHolder'

interface Props {

}
const calculatorStyle = {
    marginLeft: '30%',
    marginTop: '20px',
    display: 'grid'
}
const divStyle = {
    color: 'indigo',
    fontSize: 'xx-large'
}
export class Calculator extends React.Component<Props> {
    render(){
        return (
            <div style={calculatorStyle}> 
                <div style = {divStyle}>This is a simple calculator</div>
                <InputHolder/>
                <OutputHolder/>
            </div>
        );
    }
}

export default Calculator;