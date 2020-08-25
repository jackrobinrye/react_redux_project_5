import React from 'react';
import CharacterBrief from './CharacterBrief'
import { Link } from 'react-router-dom';

const Player = (props) => {
    const attributes = props.data.attributes
    return (
        <div player-name={attributes.name}>
            <h4><Link to={`/players/${props.data.id}`} style={{color: "#000000"}}>{attributes.name} ({attributes.age}, {attributes.gender})</Link></h4>
            {attributes.characters.map(character => <CharacterBrief data={character} />)}
        </div>
    )
}

export default Player