import React from 'react';

const NoRoute = (props) => {

		//change the title on the page via a prop reference to state on App.js
		props.passedState.title = "Page Doesn't Exist"

		return(
			<div>
				<h2>{props.passedState.title}</h2>
				<p>That URL does not exist. Please choose a shortcut or search for something. </p>
			</div>

		)
}

export default NoRoute;