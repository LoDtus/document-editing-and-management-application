import { configureStore } from '@reduxjs/toolkit';
import documentSlice from '../slices/documentSlice';

const store = configureStore({
    reducer: {
        document: documentSlice.reducer,
    },
});

export default store;