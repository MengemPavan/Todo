import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLabel } from '../../Store/labelSlice';

const AddLabel = () => {
  const [labelName, setLabelName] = useState('');
  const dispatch = useDispatch();

  const handleAddLabel = () => {
    if (labelName.trim()) {
      dispatch(addLabel(labelName));
      setLabelName('');
    }
  };

  return (
    <div className="add-label">
      <input 
        type="text" 
        placeholder="Add a label" 
        value={labelName} 
        onChange={(e) => setLabelName(e.target.value)} 
      />
      <button onClick={handleAddLabel}>Add Label</button>
    </div>
  );
};

export default AddLabel;
