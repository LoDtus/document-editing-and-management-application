import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'auth',
    initialState: {
        username: '',
        password: '',
        rememberMe: false,
        signinAt: ''
    },
    reducers: {
        setAuth: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.rememberMe = action.payload.rememberMe;
            state.signinAt = action.payload.signinAt;
        }
    }
});