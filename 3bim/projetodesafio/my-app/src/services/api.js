import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

api.interceptors.request.use(
    async (config) => {

        var token = localStorage.getItem("usr_token");

        api.defaults.headers.authorization = `Bearer ${token}`;
        config.headers = {
            Authorization: `Bearer ${token}`,
        };

        if (!token) {
            window.location.href = '/login';
        }

        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

api.interceptors.response.use(async (response) => {

    return response
}, async (error) => {

    if (error.response.status == 401)
        window.location.href = '/login';

    if (error.response.status == 403)
        window.location.href = '/login';
})

export default api;