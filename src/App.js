import React, {Component, Fragment} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import apiKey from './config.js'
import axios from 'axios'
import PhotoContainer from './components/PhotoContainer.js'
import Search from './components/Search.js'
import Nav from './components/Nav.js'
import NotFound from './/components/NotFound'




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
    
     console.log("Search", this.state.title, this.state.activeImages)
  }

    //creating the image arrays in state when the page loads
    componentDidMount(){
    
    const catsData = this.performFetch("cats")
      .then(data=> {
        this.setState({catImages: this.state.catImages.concat(data)})
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

         <Nav 
            catImages={this.state.catImages}
            dogImages={this.state.dogImages}
            computerImages={this.state.computerImages}
            passedState={this.state}
         /> 
               
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/cats" />
            <Route exact path="/cats">
              <PhotoContainer
                titlePassed={"Cats Results"}
                imagesToSet={this.state.catImages}
                passedState={this.state}
              />
            </Route>
            <Route exact path="/dogs">
              <PhotoContainer
                titlePassed={"Dogs Results"}
                imagesToSet={this.state.dogImages}
                passedState={this.state}
              />
            </Route>
            <Route exact path="/computers">
              <PhotoContainer
                titlePassed={"Computers Results"}
                imagesToSet={this.state.computerImages}
                passedState={this.state}
              />
            </Route>
            <Route exact path="/search">
              <PhotoContainer
                titlePassed={this.state.title}
                imagesToSet={this.state.activeImages}
                passedState={this.state}
              />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
        
      </div>
    )
  }
}

export default App;
