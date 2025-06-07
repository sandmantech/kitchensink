import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Experiments from './pages/Experiments';
import './App.css'; // Assuming you have or will create this for App specific styles

function App() {
  return (
    <>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/experiments">Experiments</Link>
          </li>
        </ul>
      </nav>
      <div className="content-container">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/experiments" element={<Experiments />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
