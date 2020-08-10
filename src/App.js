import React from 'react';
import logo from './logo.svg';
import './App.css';
import GridAll from './GridAll.js';
import Navigation from './Navigation';
import Shortlisted from './Shortlisted'
import 'tachyons';
import { cities } from './cities';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      cityArray: [],
      shortlistedCities: [],
      page: 'All'                                                                                                                                             
    }
  }

componentDidMount = () => {
  window.addEventListener('scroll', this.infiniteScroll);
  this.fetchData(this.state.page);
}



  infiniteScroll = () => {
  // End of the document reached?
  if (
    window.innerHeight + document.documentElement.scrollTop
    === document.documentElement.offsetHeight
  ) 
  {  
    this.fetchData();
  }
}

fetchData = () => {
    const temp = []
    for (var i = this.state.cityArray.length; i < this.state.cityArray.length + 40 ; i++) {
      temp.push(cities[i])
    }

    this.setState({
      cityArray: [...this.state.cityArray,...temp]
    })
  }


  shortlistCity = (event) => {
    let temp = event.target.parentElement.parentElement.childNodes
    let tempObject =   {
      "City": temp[0].outerText,
      "State": temp[1].outerText,
      "District": temp[2].outerText
    }
    this.setState({ shortlistedCities: [...this.state.shortlistedCities, tempObject] }, function () {
  })
  }

  deleteCity = (i, event) => {
    const cityArray = Object.assign([], this.state.cityArray);
    cityArray.splice(i, 1);
    this.setState({cityArray:cityArray})
  }

  removeShorltisted = (i, event) => {
    const shortlistedCities = Object.assign([], this.state.shortlistedCities);
    shortlistedCities.splice(i, 1);
    this.setState({shortlistedCities:shortlistedCities})
  }

  onRouteChange = (route) => {
    if(route === 'All'){
      this.setState({page: 'All'})
    }
    else if (route === 'Shortlisted') {
      this.setState({page: 'Shortlisted'})
    }
  }

  render(){
      return (
          this.state.page === 'All' ?         <div className="App" >
          <Navigation onRouteChange={this.onRouteChange}/>
          <GridAll cities={this.state.cityArray} shortlistCity={this.shortlistCity} deleteCity={this.deleteCity}/>
        </div> : <Shortlisted onRouteChange={this.onRouteChange} shortlistedCities={this.state.shortlistedCities} removeShorltisted={this.removeShorltisted}/>
  );
  }

}

export default App;
