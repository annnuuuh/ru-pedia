import React from 'react';
import { NavLink } from "react-router-dom";
import './QueenCard.css';

const QueenCard = ({ id, name, winner, missCon, img, quote }) => {
  return (
    <NavLink
      to={`/queen/${id}`}
      key={id}
    >
      <div className="queen-card">
        <img id={`id${id}`} src={img} className="queen-pic" alt="Queen Profile"/>
        <div className="middle">
          <div className="text">"{quote}"</div>
        </div>
        <h3>{name}</h3>
      </div>
    </NavLink>
  )
}
export default QueenCard
