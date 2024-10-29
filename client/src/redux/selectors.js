import { createSelector } from '@reduxjs/toolkit';

export const getIsNew = (state) => state.document.isNew;
export const getDocValue = (state) => state.document;