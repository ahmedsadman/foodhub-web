import axios from 'axios';
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
                return true;
            } else {
                dispatch({ type: 'AUTH_ERROR', payload: 'Username/password is invalid' });
                return false;
            }
            
        } catch (e) {
            console.log(e);
            return false
        }
    }
};

export const logoutUser = () => {
    return {
        type: 'LOG_OUT'
    }
}
