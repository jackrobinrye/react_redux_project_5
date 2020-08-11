import React, { Component } from 'react';
import Header from '../components/Header';
import ListGroup from 'react-bootstrap/ListGroup'
import Player from '../components/Player';
import { connect } from 'react-redux';
import {fetchPlayers} from '../service/ApiCalls'



class Home extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount = () => {
        this.props.fetchPlayers()
    }
    
    
    render() {
        if (this.props.players !== [] && this.props.players !== undefined && this.props.players !== null) {
            return <div className="home-page">
                <Header players={this.props.players}/>
                <ListGroup variant="flush">
                    {this.props.players.map(player => (<Player data={player.attributes} />))}
                </ListGroup>
            </div>
        }
        else {
            return <h3>error fetching players</h3>
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
