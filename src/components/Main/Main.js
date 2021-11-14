import React from 'react';
import Queens from '../Queens/Queens';
import Search from '../Search/Search';
import QueenDetails from '../QueenDetails/QueenDetails';
import SeasonDetails from '../SeasonDetails/SeasonDetails';
import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Main.css';

const Main = () => {

  const [searchValue, setSearchValue] = useState('')
  const [allQueens, setAllQueens] = useState([])
  const [filteredQueens, setFilteredQueens] = useState([])


  const getAllQueens = () => {
  return fetch('http://www.nokeynoshade.party/api/queens/all')
  .then(response => response.json())
}

  useEffect(() => {
    getAllQueens()
    .then(data => {
      setAllQueens(data)
    });
  }, []);

  const handleChange = (event) => {
    setSearchValue(event.target.value)
    findQueen(searchValue)
    }

  const findQueen = (searchValue) => {
    setFilteredQueens(allQueens.filter(queen => queen.name.includes(searchValue)))
  }

  const  displayQueens= () => {
      if (searchValue.length > 0) {
        return (
          <div>
            <Search handleChange={handleChange}/>
            <Queens queens={filteredQueens}/>
          </div>
        )
      } else {
        return (
          <div>
            <Search handleChange={handleChange}/>
            <Queens />
          </div>
        )
      }
    }


  return (
    <div className="main-container">
    <Route
      exact path="/"
      render= {() => <Search handleChange={handleChange}/> }
    />
    <Route
      exact path="/"
      render= {() => <Queens /> }
    />
    <Route
      exact path="/queen/:id"
      render={({match}) => {
        return <QueenDetails id={match.params.id} />
      }}
    />
    <Route
      exact path="/season/:id"
      render={({match}) => {
        return <SeasonDetails id={match.params.id} />
      }}
    />
    </div>
  )
}

export default Main;
