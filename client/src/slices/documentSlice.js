import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'document',
    initialState: {
        isNew: false,
        userId: null,
        subject: 'Untitled',
        content: '',
        modifyAt: '',
    },
    reducers: {
        setNewDoc: (state, action) => {
            state.isNew = action.payload;
        },
        setDocValue: (state, action) => {
            state.userId = action.payload.userId;
            state.subject = action.payload.subject !== '' ? action.payload.subject : 'Untitled';
            state.content = action.payload.content;
            state.modifyAt = action.payload.modifyAt;
        }
    }
});