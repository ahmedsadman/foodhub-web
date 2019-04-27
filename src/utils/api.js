const baseURL = 'http://localhost:3000';

export const api = {
    searchRestaurant: `${baseURL}/restaurant/search`,
    createRestaurant: `${baseURL}/admin/restaurants/create`,
    deleteRestaurant: `${baseURL}/admin/restaurants/delete`,
    userRestaurant: `${baseURL}/restaurant/user`,
    updateRestaurant: (id) => `${baseURL}/admin/restaurants/update/${id}`,
    login: `${baseURL}/auth/login`
};
