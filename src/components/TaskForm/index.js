import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../../Store/notesSlice';
import "./index.css"

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedLabels, setSelectedLabels] = useState([]);
  const dispatch = useDispatch();
  const labels = useSelector((state) => state.labels || []);

  const handleLabelChange = (labelId) => {
    setSelectedLabels((prevLabels) =>
      prevLabels.includes(labelId)
        ? prevLabels.filter((id) => id !== labelId)
        : [...prevLabels, labelId]
    );
  };
  const isFormValid = title.trim() !== '' && description.trim() !== '';
  const handleSubmit = () => {
    dispatch(addNote({ title, description, labels: selectedLabels }));
    setTitle('');
    setDescription('');
    setSelectedLabels([]);
  };

  return (
    <div className="TaskForm-container">
     <div>
     <p >ADD A TODO</p>
     </div>
      <div className="input-container">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        
        placeholder="Task description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      </div>
      <div className="labels-selection">
        {labels.map((label) => (
          <button
            key={label.id}
            onClick={() => handleLabelChange(label.name)}
            style={{
              backgroundColor: selectedLabels.includes(label.name)
                ? '#00f' // Selected label color
                : '#ccc', // Default color
              color: selectedLabels.includes(label.id)
                ? '#fff' // Text color when selected
                : '#000', // Default text color
              border: 'none',
              padding: '5px 10px',
              margin: '5px',
              cursor: 'pointer',
            }}
          >
            {label.name}
          </button>
        ))}
      </div>
      <button className='btn' disabled={!isFormValid}  onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddNote;
