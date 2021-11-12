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
      <h1>Ru-Pedia</h1>
      </header>
    </div>
  );
}

export default App;
