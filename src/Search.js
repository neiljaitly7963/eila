import React from 'react';
import GridShortlisted from './GridShortlisted';
import Navigation from './Navigation';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import GridAll from './GridAll.js';

const Search = ({onRouteChange, searchFunction, filteredCities, deleteCity, shortlistCity}) => {
	
        return(
        	<div>
          		<Navigation onRouteChange={onRouteChange}/>
          		        <Form inline>
          		        	<NavDropdown title="Dropdown" id="basic-nav-dropdown">
	        					<NavDropdown.Item href="#action/3.1">City</NavDropdown.Item>
						        <NavDropdown.Item href="#action/3.2">State</NavDropdown.Item>
						        <NavDropdown.Item href="#action/3.3">District</NavDropdown.Item>
						        <NavDropdown.Divider />
						        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      						</NavDropdown>
      					<FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={searchFunction} />
      					<Button variant="outline-dark">Search</Button>
    					</Form>
    			<GridAll cities={filteredCities} shortlistCity={shortlistCity} deleteCity={deleteCity}/>
          	</div>
        )
}

export default Search;