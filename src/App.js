import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Display from './components/display'
import Digit from './components/digit'
import Operation from './components/oper'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            result: 'test'
        }
    }
    calculate=()=>{
        let result = 'result';
        this.setState({result:result});
    }
    render() {
      return (
        <div>

            <div className="wrapper App">
                <Display result={this.props.displayNumber} />
                <table style={{align: "center"}}>
                  <colgroup>
                    <col span="3"></col>
                    <col span="1"></col>
                  </colgroup>
                  <tr>
                  <Digit number="1" />
                  <Digit number="2" />
                  <Digit number="3" />
                  <Operation operation="+"/>
                  </tr>
                  <tr>
                  <Digit number="4" />
                  <Digit number="5" />
                  <Digit number="6" />
                  <Operation operation="-"/>
                  </tr>
                  <tr>
                  <Digit number="7" />
                  <Digit number="8" />
                  <Digit number="9" />
                  <Operation operation="/"/>
                  </tr>
                  <tr>
                  <Digit number="0" />
                  <Operation operation="CLS"/>
                  <Operation operation="=" class="btn btn-outline-success" calculate={this.calculate}/>
                  <Operation operation="*" />
                  </tr>
                </table>



            </div>
       </div>
      );
    }
}

function mapStateToProps(state) {
    return {
        displayNumber : state.reducer1[state.reducer1.displayNumber]
    }
}

export default connect(mapStateToProps)(App);
