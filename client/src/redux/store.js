import { configureStore } from '@reduxjs/toolkit';
import documentSlice from '../slices/documentSlice';
import authSlice from '../slices/authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        document: documentSlice.reducer,
    },
});

export default store;