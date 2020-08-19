import React from 'react';
import Table from 'react-bootstrap/Table'
import Carousel from 'react-bootstrap/Carousel'
import CharacterBrief from './CharacterBrief';
import Header from '../components/Header';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


const Character = (props) => {

    const d = props.data[0]

    return (
        <div>
            <Tabs defaultActiveKey="summary" id="uncontrolled-tab-example">
                <Tab eventKey="summary" title="Summary">
                    <CharacterBrief data={d}/>
                </Tab>
                <Tab eventKey="stats" title="Stats">
                    <Table striped bordered variant="dark">
                        <tbody>
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
                </Tab>
            </Tabs>
        </div>
    )
}

export default Character;