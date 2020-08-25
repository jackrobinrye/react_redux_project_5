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

class App extends Component {

  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/characters')
        .then(response => response.json())
        .then(characters => 
          this.setState({...this.state, characters: characters.data})
          )
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


export default App;
