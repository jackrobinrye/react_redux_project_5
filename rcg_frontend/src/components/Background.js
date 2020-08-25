import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Background = (props) => {
    return (
        <ListGroup>
            <ListGroup.Item><h5>Background: {props.backgroundInfo.background_title}</h5></ListGroup.Item>
            <ListGroup.Item>Personality Trait: {props.backgroundInfo.personality_trait}</ListGroup.Item>
            <ListGroup.Item>Ideal: {props.backgroundInfo.ideal}</ListGroup.Item>
            <ListGroup.Item>Bond: {props.backgroundInfo.bond}</ListGroup.Item>
            <ListGroup.Item>Flaw: {props.backgroundInfo.flaw}</ListGroup.Item>
        </ListGroup>
    )
}

export default Background