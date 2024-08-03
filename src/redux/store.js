import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const store = configureStore({
    reducer : {// REPLACE  THIS '=' WITH THIS ':' 
        user: userReducer,
    }
});

export default store;