import React from 'react';

const Photo = (props) => {
	return(
			<li>
				<img 
					src={props.imageURL}
					alt=""
				/> 
			</li>

		)
}

export default Photo; 