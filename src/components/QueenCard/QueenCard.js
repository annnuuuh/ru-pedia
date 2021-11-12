import React from 'react';
const QueenCard = ({ id, name, winner, missCon, img, quote}) => {
  return (
    <div className="queen-card">
      <img src={img}></img>
      <h3>{name}</h3>
      
    </div>
  )
}
export default QueenCard
