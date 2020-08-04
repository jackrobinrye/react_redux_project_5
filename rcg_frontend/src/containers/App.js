import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// import './App.css';
import Home from '../components/Home';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Home />} 
              
            />
          {/* <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} /> */}
        </div>
      </Router>
    );
  }
}


export default App;
