import React from 'react';

function Sidebar({ labels, setFilteredLabel }) {
  return (
    <div className="sidebar">
      <button onClick={() => setFilteredLabel(null)}>All Notes</button>
      {labels.map((label) => (
        <button key={label} onClick={() => setFilteredLabel(label)}>
          {label}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
