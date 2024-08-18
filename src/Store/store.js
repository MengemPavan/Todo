import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./rootReduser.js" ;// Import the root reducer
import { loadState, saveState } from './localStorage'; // Your localStorage utilities

// Load persisted state from localStorage
const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState, // Use the persisted state as the initial state
});

// Subscribe to store updates to save state to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
