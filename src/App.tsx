import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SearchContainer from './containers/SearchContainer';
import ResultsContainer from './containers/ResultsContainer';

interface Meme {
  id: string,
  name: string
  url: string
}

const App: React.FC = () => {
  const [allMemes, memeSetter] = useState<Meme[]>([]);
  const [searchText, textSetter] = useState<string>("");

  const searchMemes = (event: any) => {
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
              (meme: Meme) => meme.name.toLowerCase().includes(searchText)).slice(0, 32)
            } 
          />
        </div>
      </React.Fragment>
    );
}

export default App;
