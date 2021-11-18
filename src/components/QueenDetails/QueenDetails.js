import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './QueenDetails.css';
import { useEffect, useState } from 'react';
import { getQueenDetails } from '../../apiCalls';

const QueenDetails = ({ id }) => {
  const [queenDetails, setQueenDetails] = useState({})
  const [queenFirstSeason, setQueenFirstSeason] = useState({})
  const [queenSecondSeason, setQueenSecondSeason] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    getQueenDetails(id)
    .catch(error => setError(true))
    .then(data => {
      setQueenDetails(data)
      setQueenFirstSeason(data.seasons[0])
      setQueenSecondSeason(data.seasons[1])
    })
  }, [])

  return (
    <div>
      <div className="queen-details">
        <h3 className="name">{queenDetails.name}</h3>
        { error ? <p>Oh no, looks like this queen has sashayed away.</p> :
        <img
        src={queenDetails.image_url}
        alt={queenDetails.name}
        className="image"/> }
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
    </div>
  )
}

export default QueenDetails;

QueenDetails.propTypes = {
  id: PropTypes.string
};
