import React, { Component, Fragment } from 'react';
import { NavLink, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import PhotoContainer from './PhotoContainer'

class Nav extends Component{

	render(){
		
		return(
			<BrowserRouter>
	      		<nav className="main-nav">
			        <ul>
			          <li><NavLink exact to='/cats'>Cats</NavLink></li>
			          <li><NavLink exact to='/dogs'>Dogs</NavLink></li>
			          <li><NavLink exact to='/computers'>Computers</NavLink></li>
			        </ul>
      			</nav>	
      		</BrowserRouter>
		)
	}	
}

export default Nav; 