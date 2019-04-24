import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import App from './App';
import reducers from './reducers';

const persistConfig = {
    key: 'foodhub',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk, logger));
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.querySelector('#root')
);
