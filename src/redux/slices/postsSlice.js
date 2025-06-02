import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: [
        {
            id: 1,
            username: 'Ahmed Amin',
            time: '2 hours ago',
            text: `Just finished my latest project! Here's a sneak peek of the UI design I've been working on. What do you think? 🎨 #WebDesign #UI`,
            image: '../public/Images/post1.png',
            avatar: '../public/Images/user.jpg',
            likes: 247,
            comments: 23
        }
    ],
    reducers: {
        addPost: (state, action) => {
            const newPost = {
                id: Date.now(),
                username: 'Ahmed Amin',
                time: 'Just now',
                avatar: '../public/Images/user.jpg',
                likes: 0,
                comments: 0,
                ...action.payload
            };
            state.unshift(newPost); // Add at beginning
        }
    }
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;