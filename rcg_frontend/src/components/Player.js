import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Character from './Character'


const Player = (props) => {
    return (
        <ListGroup.Item className={props.data.name}>
            <h4>{props.data.name} ({props.data.age}, {props.data.gender})</h4>
            {props.data.characters.map(character => <Character data={character} />)}
        </ListGroup.Item>
    )
}

export default Player