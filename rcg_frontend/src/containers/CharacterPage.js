import React, { Component } from 'react';

export default class CharacterPage extends Component {
    constructor(props) {
        super(props)
        // console.log(props)
        this.state = {

        }
    }

    render() {
        return <div>
            <Character data={props} />
            {/* <Background info={props} /> */}
        </div>
    }

}