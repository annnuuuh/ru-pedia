import { useEffect, useState } from 'react';
import Search from '../Search/Search';

const Nav = () => {
  return (
    <div className="nav">
      <button>Seasons</button>
      <button>Queens</button>
      <h1>Ru-Pedia</h1>
      <Search />
    </div>
  )
}

export default Nav;
