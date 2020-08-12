export default function reducer(state = {players: [], character: {}}, action) {
    switch (action.type) {
  
      case 'GET_CHARACTER':
        console.log("action", action)
        return {
          ...state, character: action.character
        }
  
      case 'UPDATE_PLAYERS':
        return {
          ...state, players: action.players
        }
  
      default:
        return state;
  
    }
  };