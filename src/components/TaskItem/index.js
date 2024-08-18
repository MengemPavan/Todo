import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../Store/notesSlice';
import './index.css';

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();

  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      {note.labels && (
        <div className="labels">
          {note.labels.map((label, index) => (
            <span key={index} className="label">{label}</span>
          ))}
        </div>
      )}
      <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
    </div>
  );
};

export default NoteItem;
