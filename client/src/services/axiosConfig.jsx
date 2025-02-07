import axios from 'axios';
import { store } from '../redux/store';

axios.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const accessToken = state.auth.accessToken;

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refreshToken = store.getState().auth.refreshToken;
                if (!refreshToken) throw new Error("No refresh token available");

                const { data } = await axios.post("http://localhost:4000/api/users/refresh-token", { token: refreshToken });
                store.dispatch({ type: 'auth/loginUser', payload: data });

                originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
                return axios(originalRequest);
            } catch (err) {
                console.error("Failed to refresh token:", err);
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
);
