import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component{

	render(){
		return(
			<nav className="main-nav">
		        <ul>
		          <li><NavLink to='/cats' 
		          	   onClick={()=>{this.props.setProperties("Cats", this.props.catImages)}}>Cats</NavLink></li>
		          <li><NavLink to='/dogs' 
		          	   onClick={()=>{this.props.setProperties("Dogs", this.props.dogImages)}}>Dogs</NavLink></li>
		          <li><NavLink to='/computers' 
		               onClick={()=>{this.props.setProperties("Computers", this.props.computerImages)}}>Computers</NavLink></li>
		        </ul>
      		</nav>
		)
	}	

}

export default Nav; 