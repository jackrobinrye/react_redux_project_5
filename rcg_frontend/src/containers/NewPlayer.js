import React, { Component } from 'react';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class NewPlayer extends Component {
    constuctor() {

    }

    render() {
        return (
            <div>
                <Header />
                    <Form style={{padding: "25px"}}>
                        <Form.Group>
                            <Form.Row>
                                <Form.Label column="lg" lg={2}>
                                    Name:
                                </Form.Label>
                                <Col>
                                    <Form.Control size="lg" type="text" placeholder="Your Name" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Label column lg={2}>
                                    Age: 
                                </Form.Label>
                                <Col>
                                    <Form.Control type="number" placeholder="Age" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Label>Gender: </Form.Label>
                            {/* GET DEFAULT VALUE TO WORK */}
                            <Form.Control as="select" defaultValue="Choose...">
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
