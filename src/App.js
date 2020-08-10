import React from 'react';
import logo from './logo.svg';
import './App.css';
import GridAll from './GridAll.js';
import Navigation from './Navigation';
import Shortlisted from './Shortlisted'
import 'tachyons';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      cityArray: [],
      shortlistedCities: [],
      page: 'All'                                                                                                                                             
    }
  }

  componentDidMount(){
    fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
      .then(res => res.json())
      .then(response => {
        this.setState({cityArray: response})

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
    console.log(this.state.shortlistedCities);
  })
  }

  deleteCity = (i, event) => {
    console.log(i)
    console.log(event)

    const cityArray = Object.assign([], this.state.cityArray);
    cityArray.splice(i, 1);

    const shortlistedCities = Object.assign([], this.state.shortlistedCities);
    shortlistedCities.splice(i, 1);
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
