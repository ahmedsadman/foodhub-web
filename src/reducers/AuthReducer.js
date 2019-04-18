const INITIAL_STATE = {
    isLoggedIn: null,
    redirect: '/',
    userData: {},
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN': 
            return { ...state, isLoggedIn: true, error: '', userData: action.payload };
        case 'LOG_OUT':
            return { ...state, ...INITIAL_STATE, isLoggedIn: false };
        case 'AUTH_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
