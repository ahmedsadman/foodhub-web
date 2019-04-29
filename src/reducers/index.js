import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CartReducer from './CartReducer';

const reducers = combineReducers({
    auth: AuthReducer,
    cart: CartReducer
});

export default (state, action) => {
    if (action.type === 'LOG_OUT') {
        state = undefined; // resets the redux store
    }
    return reducers(state, action);
};
