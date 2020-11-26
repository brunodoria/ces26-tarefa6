import React, { Component } from 'react';

// componente para exibicao do resultado da operacao
// sera aplicado um estilo diferente para destacar o display
export default class Display extends Component {

    render() {
        return (
            <div className="display"><span id="display">{this.props.result}</span></div>
        )
    }
}
