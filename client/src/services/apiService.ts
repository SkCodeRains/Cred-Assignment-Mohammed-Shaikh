import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api', // Adjust the base URL to your backend
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setAuthToken = (token: string | null) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

export default api;