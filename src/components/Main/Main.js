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

  const findQueen = (searchTerm) => {
    if (searchTerm === '') {
      return;
    } else {
      setFilteredQueens(allQueens.filter(queen => queen.name.includes(searchTerm)))
    }
  }

  const  displayQueens= () => {
      if (filteredQueens.length > 0) {
        return (
          <div>
            <Search findQueen={findQueen}/>
            <Queens queens={filteredQueens}/>
          </div>
        )
      } else {
        return (
          <div>
            <Search findQueen={findQueen}/>
            <Queens queens={allQueens}/>
          </div>
        )
      }
    }


  return (
    <div>
    <Route
      exact path="/"
      render={displayQueens}
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
