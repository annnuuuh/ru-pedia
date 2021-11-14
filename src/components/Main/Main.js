import React from 'react';
import Queens from '../Queens/Queens';
import Search from '../Search/Search';
import QueenDetails from '../QueenDetails/QueenDetails';
import SeasonDetails from '../SeasonDetails/SeasonDetails';
import { Route } from 'react-router-dom';
import './Main.css';

const Main = () => {

  return (
    <div className="main-container">
    <Route
      exact path="/"
      render= {() => <Search /> }
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
