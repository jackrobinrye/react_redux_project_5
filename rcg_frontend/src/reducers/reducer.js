export default function reducer (state = { players: [], character: { background: {} }, player: { characters: [] } }, action) {
  switch (action.type) {
    case 'GET_CHARACTER':
      return {
        ...state, character: action.character.attributes
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
      return state
  }
};
