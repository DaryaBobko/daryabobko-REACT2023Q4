import { Component } from 'react';

import ListItem from './components/ListItem/ListItem';
import SearchPanel from './components/SearchPanel/SearchPanel';
import SearchButton from './components/SearchButton/SearchButton';

import './App.scss';
import './styles/space.scss';

class App extends Component {
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
            <ul>
              <ListItem
                title="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
              <ListItem
                title="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
              <ListItem
                title="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default App;
