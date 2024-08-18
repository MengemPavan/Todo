import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const labelsSlice = createSlice({
  name: 'labels',
  initialState: {
    labels: [],
    filterLabelId: null,
  },

  reducers: {
    addLabel: (state, action) => {
      state.labels.push({ id: uuidv4(), name: action.payload });
    },
    removeLabel: (state, action) => {
      state.labels = state.labels.filter(label => label.id !== action.payload);
      if (state.filterLabelId === action.payload) {
        state.filterLabelId = null;
      }
    },
    editLabel: (state, action) => {
      const { id, newName } = action.payload;
      const label = state.labels.find(label => label.id === id);
      if (label) {
        label.name = newName;
      }
    },
    setFilterLabel: (state, action) => {
      state.filterLabelId = action.payload;
    }
  },
});

export const { addLabel, removeLabel, editLabel, setFilterLabel } = labelsSlice.actions;
export default labelsSlice.reducer;
