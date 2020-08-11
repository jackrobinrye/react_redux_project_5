import {fetchPlayers} from '../service/ApiCalls'


export default function reducer(state = {players: []}, action) {
    switch (action.type) {
  
    //   case 'ADD_PLAYER':
    //     return {
    //       ...state, players: fetchPlayers()
    //     }
  
      case 'UPDATE_PLAYERS':
        return {
          ...state, players: action.players
        }
  
      default:
        return state;
  
    }
  };