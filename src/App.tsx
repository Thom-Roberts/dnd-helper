import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import spells from './files/dnd-spells.js';

export default function App(props: any) {
  useEffect(() => {
    console.log(spells);
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}