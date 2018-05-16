import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
    constructor(props){
        super(props);
        this.onTextChange = this.onTextChange.bind(this);
        this.state = {
            val: 0
        };
    }

    onTextChange(val) {
        var newVal = val + this.state.val;
        this.setState({val: newVal});
    }
    render() {
        return (
            <container-wrapper>
                <ChildComponent onTextChange={this.onTextChange} val={this.state.val} />
                <h1>Parent Component Input Value {this.state.val}</h1>
            </container-wrapper>
        );
    }
}

export default ParentComponent