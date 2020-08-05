import React, { Component } from 'react';
import Header from '../components/Header';
import ListGroup from 'react-bootstrap/ListGroup'
import Player from '../components/Player';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: []
        }
    }
    
    componentDidMount = () => {
        fetch('http://localhost:3000/api/v1/players')
            .then(response => response.json())
            .then(players => 
              this.setState({...this.state, players: players.data}))
    }
    
    
    render() {
        if (this.state.players != null) {
            return <div className="home-page">
                <Header players={this.state.players}/>
                <ListGroup variant="flush">
                    {this.state.players.map(player => (<Player data={player.attributes} />))}
                </ListGroup>
            </div>
        }
        else {
            return <h3>error fetching players</h3>
        }
    }
}

export default Home