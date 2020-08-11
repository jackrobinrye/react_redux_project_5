import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
 

// GET HEADER TO WORK OUTSIDE OF HOME PAGE
const Header = (props) => {
    return <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Random Character Generator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/new-player">New Player</Nav.Link>
            <NavDropdown title="Choose a Player" id="basic-nav-dropdown">
                {props.players.map(player => {
                    return <NavDropdown.Item href={`/${player.attributes.name}`}>{player.attributes.name}</NavDropdown.Item>
                })} 
                {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default Header