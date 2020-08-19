import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import Carousel from 'react-bootstrap/Carousel'
import CharacterBrief from '../components/CharacterBrief';
import AddCharacterButton from '../components/AddCharacterButton';
import Header from '../components/Header';
import { connect } from 'react-redux';
import {fetchPlayers, fetchPlayer, createCharacter} from '../service/ApiCalls'



class PlayerPage extends Component {

    constructor(props) {
        super(props)
    }
    
    componentDidMount = () => {
        this.props.fetchPlayers()
        this.props.fetchPlayer(this.props.match.params.playerId)
    }
    
    render() {
        // console.log(this.props)
        const date = new Date(this.props.player.created_at)
        return <div style={{color: "#ffffff", backgroundColor: "#061226"}}>
            <Header players={this.props.players}/>
            <div style={{padding: "25px"}} >
                <h1>{this.props.player.name}</h1>
                <Carousel interval={null}>
                    <Carousel.Item>
                        <Table striped bordered variant="dark">
                            <thead>
                                <tr>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Joined on</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.props.player.age}</td>
                                    <td>{this.props.player.gender}</td>
                                    <td>{date.getMonth()}/{date.getDay()}/{date.getFullYear()}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Carousel.Item>
                    {this.props.player.characters.map(character => 
                        <Carousel.Item>
                        <CharacterBrief data={character} />
                        </Carousel.Item>
                    
                    )}
                    </Carousel>
                    < AddCharacterButton createCharacter={this.props.createCharacter} />
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        players: state.players,
        player: state.player
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchPlayers: () => dispatch(fetchPlayers()),
      fetchPlayer: (playerId) => dispatch(fetchPlayer(playerId)),
      createCharacter: (playerName, campaign) => dispatch(createCharacter(playerName, campaign))
    }
}
   
export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage)
