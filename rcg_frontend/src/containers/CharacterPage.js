import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import ListGroup from 'react-bootstrap/ListGroup'
import CharacterBrief from '../components/CharacterBrief';
import Header from '../components/Header';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { connect } from 'react-redux';
import {fetchPlayers, fetchCharacter} from '../service/ApiCalls'
import { withRouter } from "react-router";


class CharacterPage extends Component {

    componentDidMount = () => {
        console.log("I'm running")
        this.props.fetchPlayers()
        this.props.fetchCharacter(this.props.match.params.characterId)
    }
    
    render() {
        const d = this.props.character
        if (this.props.players !== undefined && this.props.players !== null && this.props.players.length !== null && this.props.players.length > 0 ) {
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
                    <Tab eventKey="background" title="Background">
                        <ListGroup>
                            <ListGroup.Item><h5>Background: {d.background.background_title}</h5></ListGroup.Item>
                            <ListGroup.Item>Personality Trait: {d.background.personality_trait}</ListGroup.Item>
                            <ListGroup.Item>Ideal: {d.background.ideal}</ListGroup.Item>
                            <ListGroup.Item>Bond: {d.background.bond}</ListGroup.Item>
                            <ListGroup.Item>Flaw: {d.background.flaw}</ListGroup.Item>
                        </ListGroup>
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
   
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterPage))
