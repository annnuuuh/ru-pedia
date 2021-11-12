import './App.css';
import Nav from '../Nav/Nav'
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
    <Nav />
    </div>
  );
}

export default App;
