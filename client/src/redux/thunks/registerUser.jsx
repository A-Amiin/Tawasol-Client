import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:4000/api/users/register', userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export default registerUser