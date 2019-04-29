const INITIAL_STATE = {
    items: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CART':
            return {
                ...state,
                items: action.payload
            };
        case 'ADD_PRODUCT':
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                items: state.items.filter(i => i._id !== action.payload._id)
            };
        case 'MODIFY_PRODUCT_QUANTITY':
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item._id === action.payload.data._id) {
                        const newQuantity = action.payload.type === 'inc' ? item.quantity + 1 : item.quantity - 1;
                        if (newQuantity > 0) {
                            item.quantity = newQuantity;
                            item.total_price = item.unit_price * newQuantity;
                        }
                    }
                    return item;
                })
            };
        default:
            return state;
    }
};
