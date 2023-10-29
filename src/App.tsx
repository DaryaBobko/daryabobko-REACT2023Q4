import { Component } from 'react';

import ListItem from './components/ListItem/ListItem';
import Input from './components/Input/Input';
import Button from './components/Button/Button';

import './App.scss';
import './styles/space.scss';
import { Animal, AnimalSearchResult } from './models/AnimalSearchResult';
import { ANIMAL_SEARCH_VALUE } from './constants';

type AppState = {
  animalsSearchResult: AnimalSearchResult | null;
  value: string;
  filteredAnimals: Animal[];
};

class App extends Component<unknown, AppState> {
  public state: AppState = {
    animalsSearchResult: null,
    value: localStorage.getItem(ANIMAL_SEARCH_VALUE) || '',
    filteredAnimals: [],
  };

  onSearchChange = (value: string) => {
    this.setState({ value: value });
  };

  showFilteredItem = () => {
    localStorage.setItem(ANIMAL_SEARCH_VALUE, this.state.value);

    this.setState({
      filteredAnimals: this.search(
        this.state.animalsSearchResult?.animals ?? [],
        this.state.value
      ),
    });
  };

  componentDidMount = () => {
    fetch('https://stapi.co/api/v1/rest/animal/search')
      .then((response) => response.json())
      .then((animalsSearchResult: AnimalSearchResult) => {
        this.setState({
          animalsSearchResult,
          filteredAnimals: this.search(
            animalsSearchResult.animals,
            this.state.value
          ),
        });
      });
  };

  search = (animals: Animal[], value: string): Animal[] => {
    if (value.length === 0) {
      return animals;
    }
    if (animals) {
      return animals.filter((animal) => {
        return animal.name.toLowerCase().includes(value.toLowerCase());
      });
    }

    return [];
  };

  render() {
    return (
      <>
        <div className="container header">
          <Input
            onSearchChange={this.onSearchChange}
            value={this.state.value}
          />
          <div className="mh-4">
            <Button onClick={this.showFilteredItem} />
          </div>
        </div>
        <div className="content pv-4">
          <div className="container">
            <ul className="list-wrapper">
              {this.state.filteredAnimals.map((animal: Animal) => (
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
