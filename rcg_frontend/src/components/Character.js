import React from 'react';
import Table from 'react-bootstrap/Table'
import Carousel from 'react-bootstrap/Carousel'
import CharacterBrief from './CharacterBrief';
import Header from '../components/Header';


const Character = (props) => {

    const d = props.data[0]
    console.log(props)

    return (
        <div>
            {/* <Header /> */}
            {console.log(props)}
            <Carousel hover={true} interval={null}>
                <Carousel.Item >
                    <CharacterBrief data={d}/>
                    {/* <Carousel.Caption> */}
                    {/* <h3>Character Gist</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    {/* </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
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
        </div>
    )









        //             <tr>
        //                 <td>Background: {d.background}</td>
        //                 <td>Gender: {d.gender}</td>
        //                 <td>Age: {d.age}</td>
        //             </tr>

        // <div className={props.data.name}>
            
        // </div>
    // ) 
}

export default Character;