import React from 'react';
import './Queens.css';
import QueenCard from '../QueenCard/QueenCard';

const Queens = ({ queens }) => {

  const queenCards = queens.map(queen => {
    return (
      <QueenCard
      id={queen.id}
      name={queen.name}
      winner={queen.winner}
      missCon={queen.missCongeniality}
      img={queen.image_url}
      quote={queen.quote}
      />
    )
  })

  return (
    <div className="queen-card-container">

    {queenCards}
    </div>
  )
}

export default Queens
