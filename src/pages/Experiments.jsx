import React from 'react';
import './Experiments.css';

function Experiments() {
  return (
    <div className="experiments-container">
      <h1>My Experiments</h1>
      <p>This is where my various coding experiments will be showcased.</p>
      <div className="experiments-grid">
        {/* Placeholder for experiment tiles */}
        <div className="experiment-tile">
          <h2>Experiment 1</h2>
          <p>Description of experiment 1.</p>
        </div>
        <div className="experiment-tile">
          <h2>Experiment 2</h2>
          <p>Description of experiment 2.</p>
        </div>
        <div className="experiment-tile">
          <h2>Coming Soon</h2>
          <p>More experiments on the way!</p>
        </div>
      </div>
    </div>
  );
}

export default Experiments;
