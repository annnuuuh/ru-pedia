import { useEffect, useState, createRef } from 'react';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {

  const toggleDropdown = () => {
    return (document.getElementById("myDropdown").classList.toggle("show"))
  }

  return (
    <div className="nav">
      <div className="dropdown-container">
        <button className="szns-btn"  onClick={toggleDropdown}>SEASONS</button>
        <div class="dropdown" id="myDropdown">
            <Link to="/season1"><p>Season 1</p></Link>
            <Link to="/season1"><p>Season 2</p></Link>
            <Link to="/season1"><p>Season 3</p></Link>
            <Link to="/season1"><p>Season 4</p></Link>
            <Link to="/season1"><p>Season 5</p></Link>
            <Link to="/season1"><p>Season 6</p></Link>
            <Link to="/season1"><p>Season 7</p></Link>
            <Link to="/season1"><p>Season 8</p></Link>
            <Link to="/season1"><p>Season 9</p></Link>
            <Link to="/season1"><p>Season 10</p></Link>
            <Link to="/season1"><p>Season 11</p></Link>
            <Link to="/season1"><p>Season 12</p></Link>
        </div>
      </div>
      <h1>Ru-Pedia</h1>
      <Search />
    </div>
  )
}

export default Nav;
