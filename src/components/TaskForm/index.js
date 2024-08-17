import React, { useState } from 'react';

function TaskForm({ addNote, labels }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title || content) {
      addNote({ id: Date.now(), title, content, label: selectedLabel });
      setTitle('');
      setContent('');
      setSelectedLabel('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Take a note..."
      />
      <select value={selectedLabel} onChange={(e) => setSelectedLabel(e.target.value)}>
        <option value="">Select label</option>
        {labels.map((label) => (
          <option key={label} value={label}>
            {label}
          </option>
        ))}
      </select>
      <button type="submit">Add Note</button>
    </form>
  );
}

export default TaskForm;
