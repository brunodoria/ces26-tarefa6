import React, { Component } from 'react';
import {connect} from 'react-redux';
import { operationPressed } from '../actions';

class Operation extends Component {
    clickHandler(){
        this.props.operationChoosed(this.props.operation);
    }
    render() {
        return (
            <button onClick={this.clickHandler.bind(this)} class="btn btn-outline-primary" style={{float: "right", margin: "10px 10px 10px 10px"}}
                    value="{this.props.operation}">{this.props.operation}</button>
        )
    }
}


function mapDispathToProps(dispatch) {
    return {
        operationChoosed : function (operation) {
            dispatch(operationPressed(operation))
        }
    }
}

export default connect(null, mapDispathToProps)(Operation);
