import * as React from "react";
interface Props {
    name: string,
    value: number
}
interface ClassState {
  value: number;
}
const inputStyle = {
    marginTop: '10px',
    display: 'inline-flex'
}
const divStyle = {
    width: '150px'
}
export class NumberInput extends React.Component<Props, ClassState> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            value: props.value
        };
        this.onNumberChange = this.onNumberChange.bind(this);
    }
    onNumberChange(e:any){
        this.setState({value: e.target.value});
        console.log(e.target.value);
    }
    render(){
        return (
            <div style={inputStyle}>
                <div style={divStyle}>{this.props.name}</div>
                <input
                    name={this.props.name} 
                    type="number"
                    value={this.state.value}
                    onChange={this.onNumberChange}
                />
            </div>
        );
    }
}

export default NumberInput;