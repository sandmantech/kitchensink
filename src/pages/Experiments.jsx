import React from 'react';
import './Experiments.css';
import SimpleTiptapEditor from '../../components/SimpleTiptapEditor'; // Adjusted path

function Experiments() {
  return (
    <div className="experiments-container">
      <h1>My Experiments</h1>
      <p className="page-description">
        This section showcases various coding experiments and proof-of-concepts.
      </p>
      <div className="experiments-grid">
        <div className="experiment-tile">
          <h2>template pdf test</h2>
          <p>
            This experiment focuses on using a Tiptap-based rich text editor to compose
            a document from HTML templates. The goal is to then convert the
            editor's HTML content into a PDF document, exploring different methods
            for client-side and potentially server-side PDF generation.
          </p>
          <SimpleTiptapEditor />
        </div>
      </div>
    </div>
  );
}

export default Experiments;
