import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LabelManager from './components/LabelManager';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


function App() {
  const [notes, setNotes] = useState([]);
  const [labels, setLabels] = useState([]);
  const [filteredLabel, setFilteredLabel] = useState(null);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar labels={labels} setFilteredLabel={setFilteredLabel} />
        <div className="note-section">
          <LabelManager labels={labels} setLabels={setLabels} />
          <TaskForm addNote={addNote} labels={labels} />
          <TaskList notes={notes} setNotes={setNotes} filteredLabel={filteredLabel} />
        </div>
      </div>
    </div>
  );
}

export default App;
