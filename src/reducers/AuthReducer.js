const INITIAL_STATE = {
    isLoggedIn: null,
    redirect: '/'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN': 
            return { ...state, isLoggedIn: true };
        case 'LOG_OUT':
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
};
