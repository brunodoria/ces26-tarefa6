// definir as funcoes a serem invocadas pela atualizacao dos estados pelo redux
export function operationClicked(state, action) {
    if(action.operation === '='){ // gatilho para calculo da expressao
        state.result = eval(state.numb1 + state.operation + state.numb2);
        state.displayNumber = 'result';

        if((Math.floor(state.result) != state.result) && (state.numb1 != '')){
            state.result = state.result.toFixed(2);
        }
    } else if(action.operation === 'CLS'){ // resetar para o estado inicial da calculadora
        state = { numb1 : '', numb2 : '', operation : '', result : 0, displayNumber :'result' };
    }
    else { // preparar recebimento da continnuidade das operações a partir do resultado de anteriores
        if(state.numb2){
            state.numb1 = state.result;
            state.displayNumber = 'numb1';
            state.numb2 = '';
        }
        state.operation = action.operation;
    }
    return Object.assign({}, state);
}

// quando um digito e clicado deve-se verificar se ele sera o primeiro
// ou segundo operando de uma operacao aritmetica para associa-lo a um dos campos do estado
export function digitClicked(state, action) {
    if(!state.operation){
        state.numb1 = state.numb1 + action.digit;
        state.displayNumber = 'numb1';
    } else {
        state.numb2 = state.numb2 + action.digit;
        state.displayNumber = 'numb2';
    }
    return Object.assign({}, state);
}
