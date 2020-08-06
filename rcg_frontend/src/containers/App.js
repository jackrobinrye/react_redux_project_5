import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// import './App.css';
import Home from './Home';
import NewPlayer from './NewPlayer';
import Character from '../components/Character';

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
          this.setState({...this.state, characters: characters}))
  }

  render() {
    return (
      <Router>
        <div>

          {/* {console.log(this.state)} */}
          
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/new-player" render={() => <NewPlayer />} />
          {this.state.characters.map(character => {
            return <Route exact path={`/characters/${character.id}`} render={() => <Character data={[character]} />} />
          })}
          {/* <Route exact path={`/characters/:characterId`} render={() => <Character />} /> */}


          {/* <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} /> }/> */}
          {/* <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} /> */}
        </div>
      </Router>
    );
  }
}


export default App;
