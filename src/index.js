import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './store';
import { Provider } from 'react-redux';

var store = configureStore();
console.log(store)
ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>, document.getElementById('root'));

reportWebVitals();
