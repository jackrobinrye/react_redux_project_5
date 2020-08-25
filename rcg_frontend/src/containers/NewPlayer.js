import React, { Component } from 'react';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import {fetchPlayers, createPlayer} from '../service/ApiCalls'



class NewPlayer extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            age: "",
            gender: ""
        }
    }

    componentDidMount = () => {
        this.props.fetchPlayers()
    }

    nameChange = (e) => {
        this.setState({...this.state, name: e.target.value})
    }
    
    ageChange = (e) => {
        this.setState({...this.state, age: e.target.value})
    }

    genderChange = (e) => {
        this.setState({...this.state, gender: e.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.name !== "" && this.state.age !== "" && this.state.gender !== "Choose...") {
            this.props.createPlayer(this.state.name, this.state.age, this.state.gender)
        }
      }

    render() {
        return (
            <div>
                <Header players={this.props.players}/>
                <Form style={{padding: "25px"}} onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="lg" lg={1}>
                                Name:
                            </Form.Label>
                            <Col>
                                <Form.Control size="lg" type="text" placeholder="Your Name" value={this.state.name} onChange={this.nameChange} />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column size="md" lg={1}>
                                Age: 
                            </Form.Label>
                            <Col>
                                <Form.Control type="number" placeholder="Age" value={this.state.age} onChange={this.ageChange} />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Form.Label column="md" lg={1}>Gender: </Form.Label>
                            <Col>
                                <Form.Control as="select" onChange={this.genderChange} >
                                    <option>Choose...</option>
                                    <option>Female</option>
                                    <option>Male</option>
                                    <option>Non-binary</option>
                                    <option>Agender</option>
                                    <option>Genderfluid</option>
                                    <option>Genderqueer</option>
                                    <option>Bigender</option>
                                    <option>Polygender</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {players: state.players}
  }
   
const mapDispatchToProps = dispatch => {
    return {
        fetchPlayers: () => dispatch(fetchPlayers()),
        createPlayer: (name, age, gender) => dispatch(createPlayer(name, age, gender))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlayer)
