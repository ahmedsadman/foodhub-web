import axios from 'axios';
import { history } from '../utils/history';
import { api } from '../utils/api';

export const loginUser = (username, password) => {
    return async dispatch => {
        const bodyData = {
            username,
            password
        };
        
        try {
            const response = await axios.post(api.login, bodyData);
            console.log(response.data);

            if (response.data.found) {
                dispatch({ type: 'LOG_IN', payload: response.data.data });
                history.push('/');
            } else {
                dispatch({ type: 'AUTH_ERROR', payload: 'Username/password is invalid' });
            }
            
        } catch (e) {
            console.log(e);
        }
    }
};

export const logoutUser = () => {
    return {
        type: 'LOG_OUT'
    }
}
