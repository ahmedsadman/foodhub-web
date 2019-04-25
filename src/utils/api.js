const baseURL = 'http://localhost:3000';

export const api = {
    searchRestaurant: `${baseURL}/restaurant/search`,
    createRestaurant: `${baseURL}/admin/restaurants/create`,
    deleteRestaurant: `${baseURL}/admin/restaurants/delete`,
    userRestaurant: `${baseURL}/restaurant/user`,
    login: `${baseURL}/auth/login`
};
