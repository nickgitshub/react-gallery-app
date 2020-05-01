import React from 'react';

const NotFound = (props) => {
		console.log(props)

		return(
			<li className="not-found">
		        {(props.passedState.title==="Welcome")
					?<p>Please choose a shortcut or search for something.</p>
					:
					<p>You search did not return any results. Please try again.</p>
				}
	        </li>
	        
		)
}

export default NotFound;
