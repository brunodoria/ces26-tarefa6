export function operationClicked(state, action) {
    if(action.operation === '='){
        state.result = eval(state.numb1 + state.operation + state.numb2);
        state.displayNumber = 'result';

        if((Math.floor(state.result) != state.result) && (state.numb1 != '')){
            state.result = state.result.toFixed(2);
        }
    } else if(action.operation === 'CLS'){
        state = { numb1 : '', numb2 : '', operation : '', result : 0, displayNumber :'result' };
    }
    else {
        if(state.numb2){
            state.numb1 = state.result;
            state.displayNumber = 'numb1';
            state.numb2 = '';
        }
        state.operation = action.operation;
    }
    return Object.assign({}, state);
}

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
