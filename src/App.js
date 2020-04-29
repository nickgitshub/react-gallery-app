import React, {Component, Fragment} from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import apiKey from './config.js'
import axios from 'axios'
import PhotoContainer from './components/PhotoContainer.js'
import Search from './components/Search.js'
import Nav from './components/Nav.js'




class App extends Component{

  state = {
    catImages:[],
    dogImages:[],
    computerImages:[],
    activeImages:[],
    title: "Loading...",
    loading: true
  }

  performFetch = (query) => {
    return axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response=>{
        return response.data.photos.photo;
      })
      .catch(error=>{
        console.log('Error fetching and parsing data: ', error);
    })
  }

  setProperties(query, dataset){
    this.setState({
      title: `${query} Results`,
      loading: false,
      activeImages: dataset
    })
  }


  performSearch(query){
    this.setState({
      title: "Loading...",
      loading: true
    })

    this.performFetch(query)
      .then(data=> {
        this.setState({
          activeImages: data,
          title: `${query} Results`,
          loading: false
        })
      })
  }

    componentDidMount(){
    //creating data of all the images to set up 
    const catsData = this.performFetch("cats")
      .then(data=> {
        this.setState({catImages: this.state.catImages.concat(data)})
        this.setProperties("cats", this.state.catImages)
    });
    const dogsData = this.performFetch("dogs")
      .then(data=> {
        this.setState({dogImages: this.state.dogImages.concat(data)})
    });
    const computersData = this.performFetch("computers")
      .then(data=> {
        this.setState({computerImages: this.state.computerImages.concat(data)})
    });
  }

  
  render(){

    return(

      <div className="container">
        <Search
              onSearch={this.performSearch.bind(this)}
        /> 
        
        <BrowserRouter>
          <Redirect to="/cats" />
          <Nav 
            setProperties={this.setProperties.bind(this)}
            catImages={this.state.catImages}
            dogImages={this.state.dogImages}
            computerImages={this.state.computerImages}
          /> 
        </BrowserRouter>

        <PhotoContainer 
          activeImages={this.state.activeImages}
          title={this.state.title}
          loading={this.state.loading}
        />
        
      </div>
    )
  }
}

export default App;
