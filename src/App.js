import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AddNote from './components/TaskForm';
import TaskList from './components/TaskList';
import EditLabels from './components/LabelManger/index.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content-area">
            <Routes>
              <Route path="/" element={
                <>
                  <AddNote />
                  <TaskList />
                </>
              } />
              <Route path="/edit-labels" element={<EditLabels />} />
             
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
