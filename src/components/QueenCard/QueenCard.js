import React from 'react';
const QueenCard = ({ id, name, winner, missCon, img, quote, firstSeason }) => {
  return (
    <div className="queen-card">
      <img src={img}/>
      <h3>{name}</h3>
      <p>Season {firstSeason}</p>
    </div>
  )
}
export default QueenCard
