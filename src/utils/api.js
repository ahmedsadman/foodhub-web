const baseURL = 'http://localhost:3000';

export const api = {
    searchRestaurant: `${baseURL}/restaurant/search`,
    createRestaurant: `${baseURL}/admin/restaurants/create`,
    login: `${baseURL}/auth/login`
};
