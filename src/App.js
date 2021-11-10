import logo from './logo.svg';
import './App.css';
import {  useEffect, useState } from 'react';

function App() {

const [queen, getQueen] = useState({})

const getQueenInfo = () => {
  return fetch('http://www.nokeynoshade.party/api/queens/89')
  .then(response => response.json())
  .then(data => console.log(data))
}

useEffect(() => {
  getQueenInfo()
})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;
