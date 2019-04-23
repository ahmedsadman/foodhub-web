const INITIAL_STATE = {
    isLoggedIn: null,
    redirect: '/',
    userData: {},
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'AUTH_LOADER_INIT':
            return { ...state, loading: true, error: '' }
        case 'LOG_IN': 
            return { ...state, isLoggedIn: true, error: '', userData: action.payload, loading: false };
        case 'LOG_OUT':
            return { ...state, ...INITIAL_STATE, isLoggedIn: false, loading: false };
        case 'AUTH_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};
