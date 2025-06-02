import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const message = error.response.data?.message || 'An error occurred';
            toast.error(message);
            if (error.response.status === 401) {
                toast.error('Unauthorized access, please log in again');
            }
        } else if (error.request) {
            toast.error('No response from server');
        } else {
            toast.error('Request error');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;