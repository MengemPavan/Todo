import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterLabel } from "../../Store/labelSlice";
import { FaStickyNote } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import { MdLabel } from "react-icons/md";


import './index.css';

const Sidebar = () => {
  const labels = useSelector((state) => state.labels.labels);
  const activeLabel = useSelector((state) => state.labels.filterLabel);
  const dispatch = useDispatch();

  const handleLabelClick = (label) => {
    dispatch(setFilterLabel(label));
  };

  const handleShowAll = () => {
    dispatch(setFilterLabel(null));
  };

  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul className="label-list">
        <Link to="/" className="sidebar-link">Todos 
            <FaStickyNote className="sidebar-icon" />
        </Link>
        <Link to="/edit-labels" className="sidebar-link">Edit Labels <FaPencil/> </Link>
          {labels.map((label) => (
            <li key={label.id} className="label-item">
              <button
                className={`label-button ${activeLabel === label.name ? 'active' : ''}`}
                onClick={() => handleLabelClick(label.name)}
                style={{
                  backgroundColor: label.color || '#ccc',
                }}
              >
                <MdLabel/>  
                {label.name}
              </button>
            </li>
          ))}
        </ul>
        <button 
          className={`show-all-button ${activeLabel === null ? 'active' : ''}`} 
          onClick={handleShowAll}
        >
          Show All Todos
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
