import {createStore} from 'redux';
import * as allReducers from './reducers';
import {combineReducers} from 'redux'

var rootReducer = combineReducers(allReducers);

// armazenamento do redux
export default function configureStore() {
    return createStore(
        rootReducer
    );
}
