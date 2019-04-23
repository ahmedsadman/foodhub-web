import axios from 'axios';
import { api } from '../utils/api';
import { history } from '../utils/history';

export const loginUser = (username, password) => {
    return async dispatch => {
        const bodyData = {
            username,
            password
        };
        
        try {
            dispatch({ type: 'AUTH_LOADER_INIT'}); // start the spinner

            const response = await axios.post(api.login, bodyData);
            console.log(response.data);

            if (response.data.found) {
                dispatch({ type: 'LOG_IN', payload: response.data.data });
                history.push({
                    pathname: '/',
                    state: {
                        isLogin: true
                    }
                });
            } else {
                dispatch({ type: 'AUTH_ERROR', payload: 'Username/password is invalid' });
            }
            
        } catch (e) {
            console.log(e);
            dispatch({ type: 'AUTH_ERROR', payload: 'Unexpected error occured' });
        }
    }
};

export const logoutUser = () => {
    return {
        type: 'LOG_OUT'
    }
}
