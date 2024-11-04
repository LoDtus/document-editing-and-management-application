import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'document',
    initialState: {
        documentId: -1,
        value: '',
        isNew: true,
        isPreview: false,
        saveLocal: 0,
        saveDb: false,
    },
    reducers: {
        setDocId: (state, action) => {
            state.documentId = action.payload;
        },
        setDocValue: (state, action) => {
            state.value = action.payload;
        },
        setNewDoc: (state, action) => {
            state.isNew = action.payload;
        },
        setPreviewDoc: (state, action) => {
            state.isPreview = action.payload;
        },
        setSaveLocal: (state, action) => {
            state.saveLocal += action.payload;
        },
        setSaveDb: (state, action) => {
            state.saveDb = action.payload;
        }
    }
});