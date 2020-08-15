export default function reducer(state = {players: [], character: {}, player: {characters: []}}, action) {
    switch (action.type) {
  
      case 'GET_CHARACTER':
        return {
          ...state, character: action.character
        }
  
      case 'GET_PLAYER':
        return {
          ...state, player: action.player.attributes 
        }
  
      case 'UPDATE_PLAYERS':
        return {
          ...state, players: action.players
        }
  
      default:
        return state;
  
    }
  };