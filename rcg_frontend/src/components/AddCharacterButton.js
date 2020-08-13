import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {createCharacter} from '../service/ApiCalls';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form'



class AddCharacterButton extends Component {

    constructor() {
        super()
        this.state = {
            showForm: false,
            campaign: ""
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        this.setState({showForm: true})
    }

    handleChange = (e) => {
        this.setState({...this.state, campaign: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const playerName = e.target.parentElement.parentElement.getAttribute('player-name')
        this.props.createCharacter(playerName, this.state.campaign)
        this.setState({...this.state, showForm: false})
    }

    render() {
        if (this.state.showForm === false) {
            return <Button variant="secondary" size="lg" block onClick={this.handleClick}> 
                Add Random Character
            </Button>
        }
        else if (this.state.showForm === true) {
            return (
                <Form>
                    <Form.Control size="lg" type="text" placeholder="Campaign Name" value={this.state.text} onChange={this.handleChange} />
                    <Button variant="dark" type="submit" onClick={this.handleSubmit}>Submit</Button>
                </Form>
            )
        }
    }
}

const mapStateToProps = state => {
    return {}
  }
   
const mapDispatchToProps = dispatch => {
    return {
        createCharacter: (playerName, campaign) => dispatch(createCharacter(playerName, campaign))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCharacterButton)

