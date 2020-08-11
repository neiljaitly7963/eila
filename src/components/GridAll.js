import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
const GridAll = ({cities, shortlistCity, deleteCity, addCity, page}) => {

  const [cityId, setCityId] = React.useState('')
  const [stateId, setStateId] = React.useState('')
  const [districtId, setDistrictId] = React.useState('')

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
            <tr>
              <td><input onChange={event => setCityId(event.target.value)} /></td>
              <td><input onChange={event => setStateId(event.target.value)}></input></td>
              <td><input onChange={event => setDistrictId(event.target.value)}></input></td>
              <td><Button variant="outline-success" onClick={addCity.bind(this, cityId, stateId, districtId)}>Add</Button></td>
            </tr>
            {
		          cities.map((city, index) => {
							  return(
								  <tr key={index} id={index}>
  					        <td id={"city"}>{city.City}</td>
  					        <td id={"state"}>{city.State}</td>
  				          <td id={"district"}>{city.District}</td>
                    <td><Button variant="outline-success" onClick={shortlistCity}>Shortlist</Button>    <Button variant="outline-danger" onClick={deleteCity.bind(this, index)}>Delete</Button></td>
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

