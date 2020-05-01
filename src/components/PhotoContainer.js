import React, {Component, Fragment} from 'react';
import Photo from './Photo.js'
import NotFound from './NotFound.js'

class PhotoContainer extends Component{

	setProperties(stateToChange, title, dataset){
	    stateToChange.setState({
	      title: `${title} Results`,
	      loading: false,
	      activeImages: dataset
    	})
  	}

	render(){
		console.log("Photo", this.props)
		this.props.passedState.title = this.props.titlePassed;
		this.props.passedState.loading= false;
		this.props.passedState.activeImages = this.props.imagesToSet;

		let imagesToRender;

	    if(this.props.passedState.activeImages.length>0){
	      imagesToRender = this.props.passedState.activeImages.map(image=> 
	        <Photo 
	          key={image.id}
	          imageURL={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
	        />
	      )
	    }else{
	      imagesToRender = <NotFound 
	      	passedState={this.props.passedState}
	      /> 
	    }

		return(
			<div className="photo-container">
		    { (this.props.loading)
		        ?<h2>{this.props.passedState.title}</h2>
		        :
		        <Fragment>              
		          <h2>{this.props.passedState.title}</h2>
		          <ul>
		            { imagesToRender }
		          </ul>
		        </Fragment>
		    }
		   </div>

		)
	}
}

export default PhotoContainer;