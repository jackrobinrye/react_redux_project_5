import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import '../App.css';
import Home from './Home';
import NewPlayer from './NewPlayer';
import CharacterPage from './CharacterPage';
import PlayerPage from './PlayerPage';
import { connect } from 'react-redux';
import {fetchPlayers} from '../service/ApiCalls'


class App extends Component {

  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  componentDidMount = () => {
    this.props.fetchPlayers()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div class="bg">
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/new-player" render={() => <NewPlayer />} />
            <Route exact path='/characters/:characterId' component={CharacterPage} />
            <Route exact path={`/players/:playerId`} component={PlayerPage} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {players: state.players}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayers: () => dispatch(fetchPlayers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)