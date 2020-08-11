import React from 'react';
import 'tachyons';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = ({onRouteChange, searchFunction}) => { 

			
				return(
					<div>
						<Navbar bg="light" expand="lg">
              <Navbar.Brand href="">CityList.io</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="" onClick={() => onRouteChange('All')}>All</Nav.Link>
                <Nav.Link href="" onClick={() => onRouteChange('Shortlisted')}>Shortlisted</Nav.Link>
                <Nav.Link href="" onClick={() => onRouteChange('Search')}>Search</Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Navbar>
					</div>
					)
}

export default Navigation;




