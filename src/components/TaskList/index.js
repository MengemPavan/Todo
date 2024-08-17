import React from 'react';
import TaskItem from '../TaskItem';


function TaskList({ notes, setNotes, filteredLabel }) {
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = filteredLabel
    ? notes.filter((note) => note.label === filteredLabel)
    : notes;

  return (
    <div className="note-list">
      {filteredNotes.map((note) => (
        <TaskItem key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}

export default TaskList;
