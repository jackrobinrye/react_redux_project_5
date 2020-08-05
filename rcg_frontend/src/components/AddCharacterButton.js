import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'

export default class AddCharacterButton extends Component {

    handleClick = (event) => {
        event.preventDefault()
        let name = event.target.parentElement.getAttribute('player-name')
        console.log(name)
    }

    render() {
        return <Button variant="secondary" size="lg" block onClick={this.handleClick}> 
            Add Random Character
        </Button>
    }
}


