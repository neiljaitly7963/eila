import React from 'react';
import GridShortlisted from './GridShortlisted';
import Navigation from './Navigation';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import GridSearch from './GridSearch.js';

const Search = ({onRouteChange, searchFunction, filteredCities, deleteCity, shortlistCity}) => {
	
        return(
        	<div>
          		<Navigation onRouteChange={onRouteChange}/>
              <div className='navClass'>
          		  <Form inline>
      					 <FormControl type="text" placeholder="Search City" className="mr-sm-2" onChange={searchFunction} />
      					 <Button variant="outline-dark">Search</Button>
    					  </Form>
              </div>
         
    			    <GridSearch cities={filteredCities} shortlistCity={shortlistCity} deleteCity={deleteCity}/>
          </div>
        )
}

export default Search;