import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const labelsSlice = createSlice({
  name: 'labels',
  initialState: [],
  reducers: {
    addLabel: (state, action) => {
      state.push({ id: uuidv4(), name: action.payload });
    },
  },
});

export const { addLabel } = labelsSlice.actions;
export default labelsSlice.reducer;
