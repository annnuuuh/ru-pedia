import React from 'react';
import { NavLink } from "react-router-dom";
import './QueenCard.css';

const QueenCard = ({ id, name, winner, missCon, img, quote, firstSeason }) => {
  return (
    <NavLink
      to={`/${id}`}
      key={id}
    >
      <div className="queen-card">
        <img id={`id${id}`} src={img} className="queen-pic" alt="Queen Profile"/>
        <div className="middle">
          <div className="text">"{quote}"</div>
        </div>
        <h3>{name}</h3>
        <p>Season {firstSeason} Winner </p>
      </div>
    </NavLink>
  )
}
export default QueenCard
