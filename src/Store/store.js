import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSlice';
import labelsReducer from './labelSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    labels: labelsReducer,
  },
});