import React from 'react';

const NoRoute = (props) => {
		console.log(props)

		props.passedState.title = "Page Doesn't Exist"
		console.log(props.passedState.title==="Welcome")

		return(
			<div>
				<h2>{props.passedState.title}</h2>
				<p>That URL does not exist. Please choose a shortcut or search for something. </p>
			</div>

		)
}

export default NoRoute;