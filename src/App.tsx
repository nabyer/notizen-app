import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

export default function App() {

  console.log('Hallo Welt')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Das ist eine coole App von uns. Weiter Infos gibt es auf Github oder unter der Website von Techstarter.
        </p>
        <a
          className="App-link"
          href="https://www.techstarter.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Klick hier um zur Techstarter-Website zu gelangen.
        </a>
        < Card />
      </header>
    </div>
  )
}
