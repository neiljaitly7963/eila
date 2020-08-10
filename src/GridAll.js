import React from 'react';
import Table from 'react-bootstrap/Table'

const GridAll = ({cities, shortlistCity, deleteCity}) => {
	return(
        <div id="tableDiv">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                 <th>City</th>
                <th>State</th>
                <th>District</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{
		            	cities.map((city, index) => {
							return(
								<tr key={index} id={index}>
					                <td id={"city"}>{city.City}</td>
					                <td id={"state"}>{city.State}</td>
					                <td id={"district"}>{city.District}</td>
					                <td><button onClick={shortlistCity}>Shortlist</button><button onClick={deleteCity.bind(this, index)}>Delete</button></td>
		            			</tr>
							)
						})
					}
            </tbody>
          </Table>
        </div>
		)
}

export default GridAll;

