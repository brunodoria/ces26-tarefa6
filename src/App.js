import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// importar os componentes criados e estilos basicos a serem utilizados
import Display from './components/display'
import Digit from './components/digit'
import Operation from './components/oper'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';

// construir estrutura da aplicacao
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
    // html relativo a pagina princiapl da aplicacao
    render() {
      return (
        <div>

            <div className="wrapper App">
            // organizar em uma tabela o layout da calculadora
            // iniciando com o display no topo
                <Display result={this.props.displayNumber} />
                <table style={{align: "center"}}>
                // definir uma divisao de colunas para melhor exibicao
                  <colgroup>
                    <col span="3"></col>
                    <col span="1"></col>
                  </colgroup>
                  // construir o layout com um padrao de exibicao de tres digitos
                  // seguido de um botao para operador
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
                  // por fim, indicar os botoes restantes
                  <tr>
                  <Digit number="0" />
                  // botao para limpar as operacoes (clear)
                  <Operation operation="CLS"/>
                  // botao para disparar o calculo da operacao
                  <Operation operation="=" class="btn btn-outline-success" calculate={this.calculate}/>
                  <Operation operation="*"/>
                  </tr>
                </table>



            </div>
       </div>
      );
    }
}

// controlar atualizacao do display
function mapStateToProps(state) {
    return {
        displayNumber : state.reducer1[state.reducer1.displayNumber]
    }
}

export default connect(mapStateToProps)(App);
