import React from 'react'
import Table from 'react-bootstrap/Table'


const CharacterBrief = (props) => {

    const date = new Date(props.data.created_at);
    const d = props.data

    return (
        <div character-id={props.data.id} character-name={props.data.name}>
            <Table striped bordered variant="dark">
                <thead>
                    <tr>
                        <th>Name: {d.name}</th>
                        <th>Campaign: {d.campaign}</th>
                        <th>Created on: {date.getMonth()}/{date.getDay()}/{date.getFullYear()}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Race: {d.race}</td>
                        <td>Class: {d.cclass}</td>
                        <td>Alignment: {d.alignment}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    ) 
}

export default CharacterBrief