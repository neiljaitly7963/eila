import React from 'react';
import 'tachyons';
const Navigation = ({onRouteChange}) => {

			
				return(
					<div>
						<nav style={{display:'flex', justifyContent: 'flex-end'}}>
							<p onClick={() => onRouteChange('All')} className=' link dim black  pointer'> All </p>
						</nav>

						<nav style={{display:'flex', justifyContent: 'flex-end'}}>
							<p onClick={() => onRouteChange('Shortlisted')} className=' link dim black  pointer'> Shortlisted </p>
						</nav>
					</div>
					)
			
		
}

export default Navigation;




