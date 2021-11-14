import React from 'react';
import './SeasonDetails.css';
import { useEffect, useState } from 'react';

const SeasonDetails = ({ id }) => {
  const [seasonDetails, setSeasonDetails] = useState({})
  const [seasonQueens, setSeasonQueens] = useState([])

  const getSeasonDetails = () => {
    return fetch(`http://www.nokeynoshade.party/api/seasons/${id}`)
    .then(response => response.json())
  }

  const getSeasonQueens = () => {
    return fetch(`http://www.nokeynoshade.party/api/seasons/${id}`)
    .then(response => response.json())
  }

  useEffect(() => {
    getSeasonDetails(id)
    .then(data => data)
    .then(season => setSeasonDetails(season))
  }, [id])

  useEffect(() => {
    getSeasonQueens(id)
    .then(data => data)
    .then(queen => setSeasonQueens(queen.queens))
  }, [id])

  const seasonQueenCards = seasonQueens.map(queen => {
    return (
      <div className="season-queen-card">
        <p>{queen.name}</p>
        <p>Place: {queen.place}</p>
      </div>
    )
  })

  return (
    <div className="season-details">
      <h3>{seasonDetails.seasonNumber}</h3>
      <img src={seasonDetails.image_url} alt={seasonDetails.name}/>
      <p>Contestants:</p>
      <div>{seasonQueenCards}</div>
    </div>

  )
}

export default SeasonDetails;
