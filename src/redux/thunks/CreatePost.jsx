import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axiosInstance';

export const createPost = createAsyncThunk(
    'posts/createPost',
    async (postData, { rejectWithValue }) => {
        try {
            const response = await axios.post('/posts', { text: postData });
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);
