import React, {Component, Fragment} from 'react';
import Photo from './Photo.js'
import NotFound from './NotFound.js'

class PhotoContainer extends Component{
	render(){
		let imagesToRender;

	    if(this.props.activeImages.length>0){
	      imagesToRender = this.props.activeImages.map(image=> 
	        <Photo 
	          key={image.id}
	          imageURL={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
	        />
	      )
	    }else{
	      imagesToRender = <NotFound /> 
	    }

		return(
			<div className="photo-container">
		    { (this.props.loading)
		        ?<h2>{this.props.title}</h2>
		        :
		        <Fragment>              
		          <h2>{this.props.title}</h2>
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