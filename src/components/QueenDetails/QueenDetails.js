import React from 'react';
import { Link } from 'react-router-dom';
import './QueenDetails.css';
import { useEffect, useState } from 'react';

const QueenDetails = ({ id }) => {
  const [queenDetails, setQueenDetails] = useState({})
  const [queenFirstSeason, setQueenFirstSeason] = useState({})
  const [queenSecondSeason, setQueenSecondSeason] = useState({})

  const getQueenDetails = () => {
    return fetch(`http://www.nokeynoshade.party/api/queens/${id}`)
    .then(response => response.json())
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
        <button className="back-button">Back to All Queens</button>
      </Link>
      </div>

    </div>

  )
}

export default QueenDetails;
