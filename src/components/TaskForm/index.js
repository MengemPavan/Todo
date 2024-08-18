import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../Store/notesSlice";
import "./index.css";
import AddLabel from "../AddLabel/AddLabel.js";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLabels, setSelectedLabels] = useState([]);
  const dispatch = useDispatch();
  const labels = useSelector((state) => state.labels.labels || []);
  const [showAddLabel, setShowAddLabel] = useState(false);

  const handleLabelChange = (labelId) => {
    setSelectedLabels((prevLabels) =>
      prevLabels.includes(labelId)
        ? prevLabels.filter((id) => id !== labelId)
        : [...prevLabels, labelId]
    );
  };

  const toggleAddLabel = () => {
    setShowAddLabel(!showAddLabel);
  };

  const isFormValid = title.trim() !== "" && description.trim() !== "";
  const handleSubmit = () => {
    dispatch(addNote({ title, description, labels: selectedLabels }));
    setTitle("");
    setDescription("");
    setSelectedLabels([]);
  };

  return (
    <div className="TaskForm-container">
      <div>
        <p>ADD A TODO</p>
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
      <div className="add-todo-labels">
        {labels.map((label) => (
          <button
            key={label.id}
            className={`label-button ${selectedLabels.includes(label.name) ? 'selected' : ''}`}
            onClick={() => handleLabelChange(label.name)}
          >
            {label.name}
          </button>
        ))}
        <button className="add-more-labels-button" onClick={toggleAddLabel}>
          {showAddLabel ? "Cancel" : "Add More Labels"}
        </button>
      </div>
      {showAddLabel && (
        <div className="add-label-section">
          <AddLabel />
        </div>
      )}
      <button className="btn" disabled={!isFormValid} onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
