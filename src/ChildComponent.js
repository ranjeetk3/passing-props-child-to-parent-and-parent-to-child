import React from 'react';

class ChildComponent extends React.Component {
    constructor(props){
        super(props);
        this.onTextChange = this.onTextChange.bind(this);
    }

    onTextChange() {
        var val = 5; // You can pass value as per your requirement 
        this.props.onTextChange(val); // onTextChange(val) is ParentComponent class function
    }
    render() {
        return (
            <container>
                <input type="text" value={this.props.val} onChange={this.onTextChange} />
                <h2>Child Component Input Will Be Value {this.props.val} + 5</h2>
            </container>
        );
    }
}
    
export default ChildComponent