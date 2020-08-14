import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import Carousel from 'react-bootstrap/Carousel'
import CharacterBrief from '../components/CharacterBrief';
import Header from '../components/Header';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { connect } from 'react-redux';
import {fetchPlayers, fetchPlayer} from '../service/ApiCalls'



class PlayerPage extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        this.props.fetchPlayers()
        this.props.fetchPlayer(this.props.match.params.playerId)
        // console.log(this.props)
    }
    
    render() {
        return <div>
            <Header players={this.props.players}/>
            <div style={{padding: "25px"}} >
                <Carousel>
                    <Carousel.Item>
                    {console.log(this.props)}
                        {/* <h1>{this.props.data.attributes.name}</h1> */}
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {players: state.players}
}

const mapDispatchToProps = dispatch => {
    return {
      fetchPlayers: () => dispatch(fetchPlayers()),
      fetchPlayer: (playerId) => dispatch(fetchPlayer(playerId)),
    }
}
   
export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage)
