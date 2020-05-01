import React, {Component, Fragment} from 'react';
import { BrowserRouter, Redirect, Route, Switch, NavLink } from 'react-router-dom'
import apiKey from './config.js'
import axios from 'axios'
import PhotoContainer from './components/PhotoContainer.js'
import Search from './components/Search.js'
import Nav from './components/Nav.js'
import NoRoute from './components/NoRoute.js'




class App extends Component{

  //creates arrays for shortcuts (cats, dogs, computers) that will be populated at load
  //activeImages and Title will be altered by shortcut selections and searches
  //load tracks whether data is currently being fetched so appropriate messages can be displayed to users
  state = {
    catImages:[],
    dogImages:[],
    computerImages:[],
    activeImages:[],
    title: "Welcome",
    loading: true,
  }

  //fetches data from the Flickr API using Axios
  performFetch = (query) => {
    return axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response=>{
        return response.data.photos.photo;
      })
      .catch(error=>{
        console.log('Error fetching and parsing data: ', error);
    })
  }

  //callback function for the search
  performSearch(query){
    this.setState({
      title: "Loading...",
      loading: true,
    })

    //sets the page title and activeImages according to whether the array returned was empty or populated
    this.performFetch(query)
      .then(data=> {
        if(data.length === 0){
          this.setState({
            activeImages: [],
            title: `No Results Found`,
            loading: false
          })
        }else{
          this.setState({
            activeImages: data,
            title: `${query} Results`,
            loading: false,
          })
        }
        
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

    //if the App is loading, it will redirect back to search
    //the && statements prevent redirection of someone types in a non-existent url 
    //or if the page is loading for the first time and its fetching arrays at mount (when the 'title' will be 'Welcome')
    let searchRedirect; 
    if(this.state.loading && this.state.title !== "Page Doesn't Exist" && this.state.title !== "Welcome"){
      searchRedirect = <Redirect to="/search" />
    }


    return(
      <BrowserRouter>
        <div className="container">
            <Search
                  onSearch={this.performSearch.bind(this)}
            /> 
          
            <Nav />

            { searchRedirect }
            <Switch>
              <Redirect exact from="/" to="/search" />
              <Route exact path="/cats" render={()=>
                <PhotoContainer
                  titlePassed={"Cats Results"}
                  imagesToSet={this.state.catImages}
                  passedState={this.state}
                />
                } 
              />         
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
              <Route>
                <NoRoute
                  passedState={this.state}
                />
              </Route>
            </Switch>
         </div>
      </BrowserRouter>
    )
  }
}

export default App;
