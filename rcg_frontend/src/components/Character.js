import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

const Character = (props) => {
    // console.log(props)
    const date = new Date(props.data.created_at);
    const d = props.data
    return (
        <div className={props.data.name}>
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
                        <td>Gender: {d.gender}</td>
                    </tr>
                    <tr>
                        <td>Background: {d.background}</td>
                        <td>Alignment: {d.alignment}</td>
                        <td>Age: {d.age}</td>
                    </tr>
                    <tr>
                        <td>Strength: {d.strength}</td>
                        <td>Dexterity: {d.dexterity}</td>
                        <td>Constitution: {d.constitution}</td>
                    </tr>
                    <tr>
                        <td>Intelligence: {d.intelligence}</td>
                        <td>Wisdom: {d.wisdom}</td>
                        <td>Charisma: {d.charisma}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    ) 
}

export default Character;