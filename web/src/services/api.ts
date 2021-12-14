import axios from 'axios';
import { getUserLocalStorage } from '../context/AuthProvider/util';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(
    (config: any) => {
        const user = getUserLocalStorage();

        config.headers.Authorization = user?.token;

        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)


export default api;
