import React from 'react';
import Queens from '../Queens/Queens';
import Search from '../Search/Search';
import QueenDetails from '../QueenDetails/QueenDetails';
import SeasonDetails from '../SeasonDetails/SeasonDetails';
import { Route } from 'react-router-dom';
import './main.css';
import { useEffect, useState } from 'react';
import { getAllQueens } from '../../apiCalls';

const Main = () => {

  const [searchValue, setSearchValue] = useState('')
  const [allQueens, setAllQueens] = useState([])
  const [filteredQueens, setFilteredQueens] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    getAllQueens()
    .catch(error => setError(true))
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
            <div>
              <Search findQueen={findQueen}/>
              <div className="welcome-message">
              <h4>
                Welcome to the main stage of Ru-Pedia! Your one stop shop for catching up on ALL the tea, henny! Browse each season or search for your favorite queen. Shantay you stay!
              </h4>
              </div>
              { error ? <h4>Well, this is embarassing. Seems like we've experiencing technical difficulties. Sashay away!</h4> : <Queens queens={filteredQueens}/> }
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <div>
              <Search findQueen={findQueen} />
              <div className="welcome-message">
              <h4>
                Welcome to the main stage of Ru-Pedia! Your one stop shop for catching up on ALL the tea, henny! Browse each season or search for your favorite queen. Shantay you stay!
              </h4>
              </div>
              { error ? <h4>Well, this is embarassing. Seems like we've experiencing technical difficulties. Try again later.</h4> :
              <Queens queens={allQueens} /> }
            </div>
          </div>
        )
      }
    }

    const mainParagraph = () => {
      return (
        <p className="welcome-message">
          Welcome to the main stage of Ru-Pedia -- your one stop shop for catching up on ALL the tea, henny! Browse each season or search for your favorite queen. Shantay you stay!
        </p>
      )
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
