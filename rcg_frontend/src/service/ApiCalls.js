import history from "./History"

export const fetchPlayers = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/players')
            .then(response => response.json())
            .then(players => {
                dispatch({type: "UPDATE_PLAYERS", players: players.data})}
                )

    }
}

export const fetchCharacter = (characterId) => {
    return (dispatch) => {
        console.log("characterId in ApiCalls", characterId)
        fetch(`http://localhost:3000/api/v1/characters/${characterId}`)
            .then(response => response.json())
            .then(character => 
                dispatch({type: "GET_CHARACTER", character: character})
                )
    }
}


export const createPlayer = (name, age, gender) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name, 
            age: age, 
            gender: gender
        })
    }
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/players", requestOptions)
            .then(response => response.json())
            .then(players => {
                dispatch({type: "UPDATE_PLAYERS", players: players.data})
                history.push("/")
            })
        }
}

export const createCharacter = (playerName) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            player_name: playerName
        })
    }
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/characters", requestOptions)
            .then(response => response.json())
            .then(players => {
                dispatch({type: "UPDATE_PLAYERS", players: players.data})
            })
        }
}