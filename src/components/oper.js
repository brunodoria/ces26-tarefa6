import React, { Component } from 'react';
import {connect} from 'react-redux';
import { operationPressed } from '../actions';

// componente para botoes nao numericos da calculadora
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

// obter a qual operacao o botao se refere
function mapDispathToProps(dispatch) {
    return {
        operationChoosed : function (operation) {
            dispatch(operationPressed(operation))
        }
    }
}

export default connect(null, mapDispathToProps)(Operation);
