import React from 'react';
import './SeasonDetails.css';
import { useEffect, useState } from 'react';
import { getSeasonDetails, getSeasonQueens, getSeasonEpisodes } from '../../apiCalls';
import { NavLink } from "react-router-dom";

const SeasonDetails = ({ id }) => {
  const [seasonDetails, setSeasonDetails] = useState({})
  const [seasonQueens, setSeasonQueens] = useState([])
  const [seasonEpisodes, setSeasonEpisodes] = useState([])
  const [error, setError] = useState(false)

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

  useEffect(() => {
    getSeasonEpisodes(id)
    .then(data => data)
    .then(episodes => setSeasonEpisodes(episodes))
  }, [id])

  const seasonQueenCards = seasonQueens.map(queen => {
    return (
      <NavLink to={`/queen/${queen.id}`}>
        <div className="season-queen-card">
          <p>{queen.name}</p>
          <p>Place: {queen.place}</p>
        </div>
      </NavLink>
    )
  })

  const filteredEpisodes = seasonEpisodes.map(episode => {
    if (episode.seasonId === seasonDetails.id) {
      return (
        <div className="season-episodes-card">
        <p>Season Episode #{episode.episodeInSeason}</p>
        <p>Title: {episode.title}</p>
        <p>Date Originally Aired: {episode.airDate}</p>
        </div>
      )
    }
  })

  return (
    <div>
      { error ? <h1>Well, this is embarassing. Seems like we've experiencing technical difficulties. Try again later.</h1> :
        <div className="season-details">
        <h3 className="season-title">SEASON {seasonDetails.seasonNumber}</h3>
        <img
        src={seasonDetails.image_url}
        alt={seasonDetails.name}
        className="season-banner"
        />
        <div className="season-card-container">
          <div className="contestents-container">
            <p className="row-title">Contestants</p>
            <div className="season-queens-container">
              {seasonQueenCards}
            </div>
          </div>
          <div className="episodes-container">
            <p className="row-title">Episodes</p>
            <div className="season-episodes-container">
              {filteredEpisodes}
            </div>
          </div>
        </div>
      </div>}
    </div>

  )
}

export default SeasonDetails;
