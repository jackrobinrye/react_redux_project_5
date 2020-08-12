import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import Carousel from 'react-bootstrap/Carousel'
import CharacterBrief from '../components/CharacterBrief';
import Header from '../components/Header';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { connect } from 'react-redux';
import {fetchPlayers, fetchCharacter} from '../service/ApiCalls'



class CharacterPage extends Component {

    componentDidMount = () => {
        this.props.fetchPlayers()
        console.log("characterId in CharacterPage", this.props.characterId)
        this.props.fetchCharacter(this.props.characterId)
    }
    
    render() {
        if (this.props.players !== undefined && this.props.players !== null && this.props.players.length !== null && this.props.players.length > 0 ) {
            console.log(this.props)
            const d = this.props.character
            return <div>    
                <Header players={this.props.players}/>
                <Tabs defaultActiveKey="summary" id="uncontrolled-tab-example">
                    <Tab eventKey="summary" title="Summary">
                        <CharacterBrief data={d}/>
                    </Tab>
                    <Tab eventKey="stats" title="Stats">
                        <Table striped bordered variant="dark">
                            <tbody>
                                <tr>
                                    <td>Strength: {d.strength}</td>
                                    <td>Dexterity: {d.dexterity}</td>
                                    <td>Constitution: {d.constitution}</td>
                                </tr>
                                <tr>
                                    <td>Intelligence: {d.intelligence}</td>
                                    <td>Wisdom: {d.wisdom}</td>
                                    <td>Charisma: {d.charisma}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="info" title="Info">
                        <CharacterBrief data={d}/>
                    </Tab>
                </Tabs>
            </div>
        }
        else {
            return <div>Oof</div>
        }
    }
}

const mapStateToProps = state => {
    return {players: state.players, character: state.character}
}

const mapDispatchToProps = dispatch => {
    return {
      fetchPlayers: () => dispatch(fetchPlayers()),
      fetchCharacter: (characterId) => dispatch(fetchCharacter(characterId))
    }
}
   
export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage)
