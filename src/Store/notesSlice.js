import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push({ id: uuidv4(), ...action.payload });
    },
    deleteNote: (state, action) => {
      return state.filter(note => note.id !== action.payload);
    },
    editNote: (state, action) => {
      const index = state.findIndex(note => note.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeLabelFromTasks: (state, action) => {
      state.tasks.forEach(task => {
        task.labels = task.labels.filter(label => label !== action.payload);
      });}
     }
})


export const { addNote, deleteNote, editNote,setFilterLabel,removeLabelFromTasks } = notesSlice.actions;
export default notesSlice.reducer;
