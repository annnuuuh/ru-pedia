import { useEffect, useState } from 'react';
import QueenCard from '../QueenCard/QueenCard';

const Queens = () => {
    const [queens, setQueens] = useState([])
    let regularSeasonQueens = [];

    const getQueenInfo = () => {
      return fetch('http://www.nokeynoshade.party/api/queens/winners')
      .then(response => response.json())
    }

    useEffect(() => {
      getQueenInfo()
      .then(data => {
        setQueens(data)
      })
    }, [])

    const filterRegularSeason = queens.filter(queen => {
      const regularSeasons = queen.seasons.forEach(season => {
        if (!season.seasonNumber.includes('A') && season.place === 1) {
          regularSeasonQueens.push(queen)
        }
      })
      return regularSeasonQueens
    })

    const queenCards = regularSeasonQueens.map(queen => {
          return (
            <QueenCard
            id={queen.id}
            name={queen.name}
            winner={queen.winner}
            missCon={queen.missCongeniality}
            img={queen.image_url}
            quote={queen.quote}
            firstSeason={queen.seasons[0].seasonNumber}
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
