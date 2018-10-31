import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';

import App from './App';
import reducers from './reducers';

const rducers = combineReducers({
    field: () => ({value: 'Opa'})
})


ReactDOM.render(
       <App />,
        document.getElementById('root')
    );

registerServiceWorker();
