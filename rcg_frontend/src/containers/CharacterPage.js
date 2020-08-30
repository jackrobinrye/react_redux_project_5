import React, { Component } from 'react';
import Background from '../components/Background'
import Stats from '../components/Stats'
import CharacterBrief from '../components/CharacterBrief';
import Header from '../components/Header';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { connect } from 'react-redux';
import {fetchCharacter} from '../service/ApiCalls'
import { withRouter } from "react-router";


class CharacterPage extends Component {

    componentDidMount = () => {
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
                        <Stats stats={d} />
                    </Tab>
                    <Tab eventKey="background" title="Background">
                        <Background backgroundInfo={d.background}/>
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
      fetchCharacter: (characterId) => dispatch(fetchCharacter(characterId))
    }
}
   
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterPage))
