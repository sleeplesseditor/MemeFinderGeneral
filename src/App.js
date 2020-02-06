import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SearchContainer from './containers/SearchContainer';
import ResultsContainer from './containers/ResultsContainer';

function App () {
  const [allMemes, memeSetter] = useState([]);
  const [searchText, textSetter] = useState("");

  const searchMemes = (event) => {
    textSetter(event.target.value)
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => {
      memeSetter(data.data.memes)
    })
  }, []);

    return (
      <React.Fragment>
        <Header />
        <div className="App">
          <SearchContainer 
            searchMemes={searchMemes}
          />
          <ResultsContainer 
            memesArray={allMemes.filter(
              meme => meme.name.toLowerCase().includes(searchText)).slice(0, 32)
            } 
          />
        </div>
      </React.Fragment>
    );
}

export default App;
