import React from 'react';
import './QueenDetails.css';
import { useEffect, useState } from 'react';

const QueenDetails = ({ id }) => {
  const [queenDetails, setQueenDetails] = useState({})

  const getQueenDetails = () => {
    return fetch(`http://www.nokeynoshade.party/api/queens/${id}`)
    .then(response => response.json())
  }

  useEffect(() => {
    getQueenDetails(id)
    .then(data => data)
    .then(queen => setQueenDetails(queen))
  }, [])

  return (
    <div className="queen-details">
      <h3>{queenDetails.name}</h3>
    </div>

  )
}

export default QueenDetails;
