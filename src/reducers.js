import { operationClicked, digitClicked} from './auxiliar'

const initialState = { numb1 : '', numb2 : '', operation : '', result : 0, displayNumber :'result' };

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
