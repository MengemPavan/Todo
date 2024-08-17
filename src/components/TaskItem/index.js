import React from 'react';

function TaskItem({ note, deleteNote }) {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <small>{note.label}</small>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
