import { combineReducers } from '@reduxjs/toolkit';
import notesReducer from './notesSlice';
import labelsReducer from './labelSlice';

const rootReducer = combineReducers({
  notes: notesReducer,
  labels: labelsReducer,

});

export default rootReducer;
