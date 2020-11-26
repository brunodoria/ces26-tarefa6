import React, { Component } from 'react';
import { digitPressed } from '../actions';
import {connect} from 'react-redux';

// componente para os digitos numericos da calculadora com aplicacao de um estilo particular
class Digit extends Component {
    render() {
        return (
            <button class="btn btn-secondary" style={{float: "left", margin: "10px 10px 10px 10px"}} onClick={()=> { this.props.digitClicked(this.props.number) }}  value="{this.props.number}">{this.props.number}</button>
        )
    }
}

// registro do botao selecionado (valor numerico)
function mapDispatchToProps(dispatch) {
    return {
        digitClicked : function (digit) {
            dispatch(digitPressed(digit));
        }
    }
}

export default connect(null, mapDispatchToProps)(Digit);
