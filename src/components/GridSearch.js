import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
const GridSearch = ({cities, shortlistCity, deleteCity, page}) => {



	return(
        <div id="tableDiv">
          <Table striped bordered hover  size="sm">
            <thead>
              <tr>
                 <th>City</th>
                <th>State</th>
                <th>District</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
  

            {
		          cities.map((city, index) => {
							  return(
								    <tr key={index} id={index}>
					              <td id={"city"}>{city.City}</td>
					              <td id={"state"}>{city.State}</td>
					              <td id={"district"}>{city.District}</td>
					              <td>
                          <Button variant="outline-success" onClick={shortlistCity}> Shortlist </Button>    
                          <Button variant="outline-danger" onClick={deleteCity.bind(this, index)}> Delete </Button>
                        </td>
		                </tr>
							  )  
						  })
					  }
            </tbody>
          </Table>
        </div>
		)
}

export default GridSearch;

