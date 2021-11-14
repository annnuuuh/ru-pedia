import React from 'react';
import './SeasonDetails.css';
import { useEffect, useState } from 'react';

const SeasonDetails = ({ id }) => {
  const [seasonDetails, setSeasonDetails] = useState({})

  const getSeasonDetails = () => {
    return fetch(`http://www.nokeynoshade.party/api/seasons/${id}`)
    .then(response => response.json())
  }

  useEffect(() => {
    getSeasonDetails(id)
    .then(data => data)
    .then(season => setSeasonDetails(season))
  }, [])

  return (
    <div className="season-details">
      <h3>{seasonDetails.seasonNumber}</h3>
      <img src={seasonDetails.image_url} alt={seasonDetails.name}/>

    </div>

  )
}

export default SeasonDetails;
