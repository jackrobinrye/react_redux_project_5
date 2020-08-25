import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'



export default class AddCharacterButton extends Component {

    constructor(props) {
        super(props)
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
        const playerName = e.target.parentElement.parentElement.firstChild.getAttribute('player-name')
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
