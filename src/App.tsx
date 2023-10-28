import { Component } from 'react';

import ListItem from './components/ListItem/ListItem';
import SearchPanel from './components/SearchPanel/SearchPanel';
import SearchButton from './components/SearchButton/SearchButton';

import './App.scss';
import './styles/space.scss';
import { Animal, AnimalSearchResult } from './models/AnimalSearchResult';

type AppState = {
  animalsSearchResult: AnimalSearchResult | null;
};

class App extends Component<unknown, AppState> {
  public state: AppState = {
    animalsSearchResult: null,
  };

  componentDidMount() {
    fetch('https://stapi.co/api/v1/rest/animal/search')
      .then((response) => response.json())
      .then((animalsSearchResult: AnimalSearchResult) => {
        this.setState({ animalsSearchResult });
      });
  }

  render() {
    return (
      <>
        <div className="container header">
          <SearchPanel />
          <div className="mh-4">
            <SearchButton />
          </div>
        </div>
        <div className="content pv-4">
          <div className="container">
            <div className="source-header">Results: </div>
            {/* <div className="source-no-results">Nothing found </div> */}
            <ul className="list-wrapper">
              {this.state.animalsSearchResult?.animals.map((animal: Animal) => (
                <ListItem
                  key={animal.uid}
                  uid={animal.uid}
                  name={animal.name}
                  earthAnimal={animal.earthAnimal}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default App;
