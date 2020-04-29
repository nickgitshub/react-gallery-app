import React, { Component } from 'react';

class Photo extends Component{


	render(){
		return(
			<li>
				<img 
					src={this.props.imageURL}
					alt=""
				/> 
			</li>

		)
	}
}

export default Photo; 