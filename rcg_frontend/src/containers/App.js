import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// import './App.css';
import Home from './Home';
import NewPlayer from './NewPlayer';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {/* {console.log(this.state)} */}
          
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/new-player" render={() => <NewPlayer />} />
          {/* <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} /> */}
        </div>
      </Router>
    );
  }
}


export default App;
