const baseURL = 'http://localhost:3000';

export const api = {
    createBlogPost: `${baseURL}/blog/create`,
    getBlogList: `${baseURL}/blog`,
    searchRestaurant: `${baseURL}/restaurant/search`,
    createRestaurant: `${baseURL}/admin/restaurants/create`,
    deleteRestaurant: `${baseURL}/admin/restaurants/delete`,
    reviewRestaurant: (id) => `${baseURL}/restaurant/review/${id}`,
    placeOrder: (id) => `${baseURL}/restaurant/order/${id}`,
    orderHistory: `${baseURL}/restaurant/order`,
    userRestaurant: `${baseURL}/restaurant/user`,
    updateRestaurant: (id) => `${baseURL}/admin/restaurants/update/${id}`,
    restaurantDetails: `${baseURL}/restaurant/details`,
    login: `${baseURL}/auth/login`,
    register: `${baseURL}/auth/register`
};
