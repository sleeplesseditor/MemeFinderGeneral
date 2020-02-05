import React, { Component } from 'react';
import './App.scss';

import SearchContainer from './containers/SearchContainer';
import ResultsContainer from './containers/ResultsContainer';

class App extends Component {
  constructor(){
    super();

    this.state = {
      allMemes: [],
      searchText: ""
    }
  }

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => {
      this.setState({
        allMemes: data.data.memes
      })
    })
  }

  render(){
    return (
      <div className="App">
        <SearchContainer />
        <ResultsContainer memesArray={this.state.allMemes} />
      </div>
    );
  }
}

export default App;
