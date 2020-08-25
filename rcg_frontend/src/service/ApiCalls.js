import history from './History'

export const fetchPlayers = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/players')
      .then(response => response.json())
      .then(players => {
        dispatch({ type: 'UPDATE_PLAYERS', players: players.data })
      }
      )
  }
}

export const fetchPlayer = (playerId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/players/${playerId}`)
      .then(response => response.json())
      .then(player => {
        dispatch({ type: 'GET_PLAYER', player: player.data })
      })
  }
}

export const fetchCharacter = (characterId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/characters/${characterId}`)
      .then(response => response.json())
      .then(character => {
        dispatch({ type: 'GET_CHARACTER', character: character.data })
      }
      )
  }
}

export const createPlayer = (name, age, gender) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      name: name,
      age: age,
      gender: gender
    })
  }
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/players', requestOptions)
      .then(response => response.json())
      .then(players => {
        dispatch({ type: 'UPDATE_PLAYERS', players: players.data })
        history.push('/')
      })
  }
}

export const createCharacter = (playerName, campaign) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      player_name: playerName,
      campaign: campaign
    })
  }
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/characters', requestOptions)
      .then(response => response.json())
      .then(players => {
        dispatch({ type: 'UPDATE_PLAYERS', players: players.data })
      })
  }
}
