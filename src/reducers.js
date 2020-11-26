import { operationClicked, digitClicked} from './auxiliar'
// definir estado inicial 
const initialState = { numb1 : '', numb2 : '', operation : '', result : 0, displayNumber :'result' };

// utilizar os comportamentos adicionais definidos em action.js para
// efetivemtne atualizar os estados do redux
export function reducer1(state = initialState, action) {
    var updatedState = {};
    switch (action.type){

        case 'OPERATION_PRESSED' :
            return operationClicked(state, action);
            break;

        case 'DIGIT_PRESSED' :
            return digitClicked(state, action);
            break;

        default :
            return Object.assign({}, state);
    }
    return {};
}
