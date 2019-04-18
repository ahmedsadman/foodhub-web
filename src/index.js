import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
