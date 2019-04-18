import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

const reducers = combineReducers({
    auth: AuthReducer
});

export default (state, action) => {
    if (action.type === 'LOG_OUT') {
        state = undefined; // resets the redux store
    }
    return reducers(state, action);
};
