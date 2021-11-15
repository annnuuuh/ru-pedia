export const getAllQueens = () => {
  return fetch('https://www.nokeynoshade.party/api/queens/all')
  .then(response => response.json())
  }

  export const getQueenDetails = (id) => {
      return fetch(`https://www.nokeynoshade.party/api/queens/${id}`)
      .then(response => response.json())
    }

  export const getSeasonDetails = (id) => {
      return fetch(`https://www.nokeynoshade.party/api/seasons/${id}`)
      .then(response => response.json())
    }

  export const getSeasonQueens = (id) => {
      return fetch(`https://www.nokeynoshade.party/api/seasons/${id}`)
      .then(response => response.json())
    }

  export const getSeasonEpisodes = (id) => {
      return fetch(`https://www.nokeynoshade.party/api/seasons/${id}/episodes`)
      .then(response => response.json())
    }
