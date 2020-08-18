import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './Reducers/Index';
import Middleware from './Middleware/index';

const store = createStore(Reducer, Middleware)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
