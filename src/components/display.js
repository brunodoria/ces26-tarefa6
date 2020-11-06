import React, { Component } from 'react';

export default class Display extends Component {

    render() {
        return (
            <div className="display"><span id="display">{this.props.result}</span></div>
        )
    }
}
