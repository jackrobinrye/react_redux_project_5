import React from 'react';
import Table from 'react-bootstrap/Table'
import Carousel from 'react-bootstrap/Carousel'
import CharacterBrief from './CharacterBrief';

const Character = (props) => {

    const d = props.data
    console.log(props)

    return (
        <Carousel>
            <Carousel.Item>
                <CharacterBrief data={props}/>
                <Carousel.Caption>
                <h3>Character Gist</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )










    //     <div className={props.data.name}>
    //         <Table striped bordered variant="dark">
    //             <thead>
    //                 <tr>
    //                     <th>Name: {d.name}</th>
    //                     <th>Campaign: {d.campaign}</th>
    //                     <th>Created on: {date.getMonth()}/{date.getDay()}/{date.getFullYear()}</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>Race: {d.race}</td>
    //                     <td>Class: {d.cclass}</td>
    //                     <td>Alignment: {d.alignment}</td>
    //                 </tr>
    //                 <tr>
    //                     <td>Background: {d.background}</td>
    //                     <td>Gender: {d.gender}</td>
    //                     <td>Age: {d.age}</td>
    //                 </tr>
    //                 <tr>
    //                     <td>Strength: {d.strength}</td>
    //                     <td>Dexterity: {d.dexterity}</td>
    //                     <td>Constitution: {d.constitution}</td>
    //                 </tr>
    //                 <tr>
    //                     <td>Intelligence: {d.intelligence}</td>
    //                     <td>Wisdom: {d.wisdom}</td>
    //                     <td>Charisma: {d.charisma}</td>
    //                 </tr>
    //             </tbody>
    //         </Table>
    //     </div>
    // ) 
}

export default Character;