import {  useEffect, useState } from 'react';
import QueenCard from './QueenCard/QueenCard';

const Queens = () => {
    const [queens, setQueens] = useState({})

    const getQueenInfo = () => {
      return fetch('http://www.nokeynoshade.party/api/queens/all')
      .then(response => response.json())
    }

    useEffect(() => {
      getQueenInfo()
      .then(data => console.log(data))
    }, []);

    const queenCards = queens.map(queen => {
      return (
        <QueenCard
        id={queen.id}
        name={queen.name}
        winner={queen.winner}
        misCon={queen.missCongeniality}
        img={queen.img_url}
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
