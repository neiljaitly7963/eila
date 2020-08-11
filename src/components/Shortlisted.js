import React from 'react';
import GridShortlisted from './GridShortlisted';
import Navigation from './Navigation';

const Shortlisted = ({onRouteChange, shortlistedCities, removeShorltisted}) => {
	
      
        return(
        	<div>
          		<Navigation onRouteChange={onRouteChange}/>
            	<GridShortlisted shortlistedCities={shortlistedCities} removeShorltisted={removeShorltisted} />
          	</div>
          )
      
    
}

export default Shortlisted;