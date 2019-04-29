export const addProduct = data => {
    data = {
        ...data,
        quantity: 1,
        total_price: data.unit_price
    };
    return {
        type: 'ADD_PRODUCT',
        payload: data
    };
};

export const setCart = data => {
    return {
        type: 'SET_CART',
        payload: data
    };
};

export const removeProduct = data => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: data
    };
};

export const modifyQuantity = (data, type) => {
    return {
        type: 'MODIFY_PRODUCT_QUANTITY',
        payload: { data, type }
    };
};
