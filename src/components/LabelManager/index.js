import React, { useState } from 'react';

function LabelManager({ labels, setLabels }) {
  const [label, setLabel] = useState('');

  const addLabel = () => {
    if (label && !labels.includes(label)) {
      setLabels([...labels, label]);
      setLabel('');
    }
  };

  return (
    <div className="label-manager">
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Add a new label"
      />
      <button onClick={addLabel}>Add Label</button>
      <div>
        {labels.map((lbl) => (
          <span key={lbl}>{lbl}</span>
        ))}
      </div>
    </div>
  );
}

export default LabelManager;
