

export const fetchPlayers = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/players')
            .then(response => response.json())
            .then(players => {
                dispatch({type: "UPDATE_PLAYERS", players: players.data})}
                )

    }
}

export const fetchCharacters = () => {
    fetch('http://localhost:3000/api/v1/characters')
        .then(response => response.json())
        .then(characters => 
            {return characters}
            )
}