import React, { Component } from 'react';
import Header from './Header';
import ListGroup from 'react-bootstrap/ListGroup'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="home-page">
            <Header />
            <ListGroup variant="flush">
                







                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
        </div>
    }
}

export default Home