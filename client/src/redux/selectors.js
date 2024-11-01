import { createSelector } from '@reduxjs/toolkit';

export const getAuth = (state) => state.auth;
export const getDocId = (state) => state.document.documentId;
export const getDocValue = (state) => state.document.value;
export const getNewDoc = (state) => state.document.isNew;
export const getPreview = (state) => state.document.isPreview;
export const getSaveLocal = (state) => state.document.saveLocal;
export const getSaveDb = (state) => state.document.saveDb;