import React from 'react';
import { Link } from 'react-router-dom';
import './QueenDetails.css';
import { useEffect, useState } from 'react';

const QueenDetails = ({ id }) => {
  const [queenDetails, setQueenDetails] = useState({})
  const [queenFirstSeason, setQueenFirstSeason] = useState({})
  const [queenSecondSeason, setQueenSecondSeason] = useState({})
  const [error, setError] = useState(false)

  const getQueenDetails = () => {
    return fetch(`https://www.nokeynoshade.party/api/queens/${id}`)
    .then(response => response.json())
    .catch(error => setError(true))
  }

  useEffect(() => {
    getQueenDetails(id)
    .then(data => data)
    .then(queen => setQueenDetails(queen))
  }, [])

  useEffect(() => {
    getQueenDetails(id)
    .then(data => data.seasons[0])
    .then(seasons => setQueenFirstSeason(seasons))
  }, [])

  useEffect(() => {
    getQueenDetails(id)
    .then(data => data.seasons[1])
    .then(seasons => setQueenSecondSeason(seasons))
  }, [])

  return (
    <div>
    { error ? <h1>Well, this is embarassing. Seems like we've experiencing technical difficulties. Try again later.</h1> :
      <div className="queen-details">
      <h3 className="name">{queenDetails.name}</h3>
      <img
      src={queenDetails.image_url} alt={queenDetails.name}
      className="image"/>
      <div className="details">
        <p className="detail-one">Notable Quote: {queenDetails.quote}</p>
        <p className="detail-two">Season {queenFirstSeason.seasonNumber}, Place {queenFirstSeason.place}</p>
      {queenSecondSeason &&
        <p className="detail-three">Season {queenSecondSeason.seasonNumber}, Place {queenSecondSeason.place}</p>}
        <Link to="/">
        <button className="back-button">Back</button>
        </Link>
      </div>
    </div>
    }
    </div>
  )
}

export default QueenDetails;
