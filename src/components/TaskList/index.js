import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NoteItem from '../TaskItem';

const NoteList = () => {
  const [filterLabel, setFilterLabel] = useState(null);
  const notes = useSelector(state => state.notes);
  const labels = useSelector(state => state.labels);

  const filteredNotes = filterLabel
    ? notes.filter(note => note.labels.includes(filterLabel))
    : notes;

  return (
    <div className="note-list">
      <div className="filter-labels">
        <select onChange={(e) => setFilterLabel(e.target.value)}>
          <option value={null}>All Labels</option>
          {labels.map(label => (
            <option key={label.id} value={label.name}>
              {label.name}
            </option>
          ))}
        </select>
      </div>
      {filteredNotes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
