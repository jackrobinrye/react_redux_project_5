import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import {createCharacter} from '../service/ApiCalls'
import { connect } from 'react-redux';



class AddCharacterButton extends Component {

    handleClick = (event) => {
        event.preventDefault()
        this.props.createCharacter(event.target.parentElement.getAttribute('player-name'))
        // console.log(event.target.parentElement)
        // this.props.createCharacter(event.target.parentElement.getAttribute('player-id'))
        // let name = event.target.parentElement.getAttribute('player-name')
    }

    render() {
        return <Button variant="secondary" size="lg" block onClick={this.handleClick}> 
            Add Random Character
        </Button>
    }
}

const mapStateToProps = state => {
    return {}
  }
   
const mapDispatchToProps = dispatch => {
    return {
        createCharacter: (playerName) => dispatch(createCharacter(playerName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCharacterButton)

