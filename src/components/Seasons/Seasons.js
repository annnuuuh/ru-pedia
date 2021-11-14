import './Seasons.css';
import { useEffect, useState } from 'react';


const Seasons = () => {
  const [seasons, setSeasons] = useState([])

  const getSeasons = () => {
    return fetch('http://www.nokeynoshade.party/api/seasons')
    .then(response => response.json())
  }

  useEffect(() => {
    getSeasons()
    .then(data => {
      setSeasons(data)
    })
  }, [])

  return (
    <div className="season-details">
      <h3>Season {seasonDetails.seasonNumber}</h3>
      <img src={seasonDetails.image_url} alt={queenDetails.name}/>
      <p>Winning Queen</p>
    </div>

  )


  )}

export const Seasons
