import React from 'react';

const NotFound = (props) => {


		//will return a message depending on whether the page has just been loaded or if its an invalid search
		//the title referenced on this element is controlled from App.js
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
