import React from 'react';
import { useSelector } from 'react-redux';
import NoteItem from '../TaskItem'; // Assuming you meant TaskItem
import './index.css';

const TaskList = () => {
  const notes = useSelector(state => state.notes);
  const filterLabelId = useSelector(state => state.labels.filterLabelId); // Accessing filterLabelId correctly

  // Filter notes based on the selected label
  const filteredNotes = filterLabelId
    ? notes.filter(note => note.labels.includes(filterLabelId))
    : notes;

  return (
    <div className="note-list">
      {filteredNotes.map(note => (
        <NoteItem key={note.id} note={note} /> // Assuming you meant NoteItem here
      ))}
    </div>
  );
};

export default TaskList;
