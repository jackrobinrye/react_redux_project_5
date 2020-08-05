import React, { Component } from 'react';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class NewPlayer extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            age: "",
            gender: ""
        }
    }

    nameChange = (e) => {
        this.setState({...this.state, name: e.target.value})
        // console.log(this.state)
    }
    
    ageChange = (e) => {
        this.setState({...this.state, age: e.target.value})
        // console.log(this.state)
    }

    genderChange = (e) => {
        this.setState({...this.state, gender: e.target.value})
        // console.log(this.state)
    }

    notHandleLogin = (event) => {
        event.preventDefault()
        if(this.state.name !== "" && this.state.age !== "" && this.state.gender !== "Choose...") {
            console.log(this.state)
        //   this.props.handleLogin({username: this.state.username, password: this.state.password})
        }
      }

    render() {
        return (
            <div>
                <Header />
                    <Form style={{padding: "25px"}} onSubmit={this.notHandleLogin}>
                        <Form.Group>
                            <Form.Row>
                                <Form.Label column="lg" lg={2}>
                                    Name:
                                </Form.Label>
                                <Col>
                                    <Form.Control size="lg" type="text" placeholder="Your Name" value={this.state.name} onChange={this.nameChange} />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Label column lg={2}>
                                    Age: 
                                </Form.Label>
                                <Col>
                                    <Form.Control type="number" placeholder="Age" value={this.state.age} onChange={this.ageChange} />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Label>Gender: </Form.Label>
                            {/* GET DEFAULT VALUE TO WORK */}
                            <Form.Control as="select" defaultValue="Choose..." onChange={this.genderChange} >
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
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
            </div>
        )
    }
}
