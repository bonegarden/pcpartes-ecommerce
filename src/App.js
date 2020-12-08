import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'; //el componente que trato de incorporar no aparece en pantalla, excepto que borre "App". cómo lo resuelvo?

NavBar();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Hola mundo!
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

export default App
