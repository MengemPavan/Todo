import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLabel, removeLabel, editLabel } from '../../Store/labelSlice';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import './index.css';

function LabelManager() {
  const [newLabelName, setNewLabelName] = useState('');
  const [editingLabel, setEditingLabel] = useState(null);
  const labels = useSelector(state => state.labels.labels);
  const dispatch = useDispatch();

  const handleAddLabel = () => {
    if (newLabelName.trim()) {
      dispatch(addLabel(newLabelName.trim()));
      setNewLabelName('');
    }
  };

  const handleEditLabel = (id, newName) => {
    dispatch(editLabel({ id, newName }));
    setEditingLabel(null);
  };

  const handleRemoveLabel = (id) => {
    dispatch(removeLabel(id));
  };

  return (
    <div className="label-manager">
      <h2>Manage Labels</h2>
      <div className="add-label">
        <input
          type="text"
          value={newLabelName}
          onChange={(e) => setNewLabelName(e.target.value)}
          placeholder="New label name"
        />
        <button onClick={handleAddLabel}><FaPlus /> Add Label</button>
      </div>
      <ul className="label-list">
        {labels.map((label) => (
          <li key={label.id} className="label-item">
            {editingLabel === label.id ? (
              <input
                type="text"
                defaultValue={label.name}
                onBlur={(e) => handleEditLabel(label.id, e.target.value)}
                autoFocus
              />
            ) : (
              <>
                <span>{label.name}</span>
                <div className="label-actions">
                  <button onClick={() => setEditingLabel(label.id)}><FaEdit /></button>
                  <button onClick={() => handleRemoveLabel(label.id)}><FaTrash /></button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LabelManager;
