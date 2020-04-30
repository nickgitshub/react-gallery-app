import React, { Component, Fragment } from 'react';
import { NavLink, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import NotFound from './NotFound'
import PhotoContainer from './PhotoContainer'

class Nav extends Component{

	render(){
		console.log("Nav", this.props.passedState.title, this.props.passedState.activeImages)
		
		return(
	      	<BrowserRouter>
	      		<nav className="main-nav">
			        <ul>
			          <li><NavLink exact to='/cats'>Cats</NavLink></li>
			          <li><NavLink exact to='/dogs'>Dogs</NavLink></li>
			          <li><NavLink exact to='/computers'>Computers</NavLink></li>
			        </ul>
      			</nav>	

      			<Switch>
					<Redirect exact from="/" to="/cats" />
					<Route exact path="/cats">
						<PhotoContainer
							pathPassed={"Cats Results"}
							imagesToSet={this.props.passedState.catImages}
					        passedState={this.props.passedState}
						/>
					</Route>
					<Route exact path="/dogs">
						<PhotoContainer
							pathPassed={"Dogs Results"}
							imagesToSet={this.props.passedState.dogImages}
					        passedState={this.props.passedState}
						/>
					</Route>
					<Route exact path="/computers">
						<PhotoContainer
							pathPassed={"Computers Results"}
							imagesToSet={this.props.passedState.computerImages}
					        passedState={this.props.passedState}
						/>
					</Route>
					<Route exact path="/search">
						<PhotoContainer
							pathPassed={this.props.passedState.title}
							imagesToSet={this.props.passedState.activeImages}
					        passedState={this.props.passedState}
						/>
					</Route>

					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		)
	}	

}

export default Nav; 