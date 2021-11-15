import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import './QueenCard.css';

const QueenCard = ({ id, name, img, quote }) => {
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

QueenCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  quote: PropTypes.string
};
