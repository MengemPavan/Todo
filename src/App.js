import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AddNote from './components/TaskForm';
import NoteList from './components/TaskList';
import './App.css';
import AddLabel from './components/AddLabel/AddLabel';

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <div className="main-content">
        <AddNote />
        <AddLabel />
        <NoteList />
      </div>
    </div>
  );
}

export default App;



