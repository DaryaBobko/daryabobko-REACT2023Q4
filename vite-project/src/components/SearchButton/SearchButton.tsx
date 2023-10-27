import { Component } from "react";
import "./SearchButton.scss";

class SearchButton extends Component {
  render() {
    const label = "Search";

    return (
      <button type="button" className="search-button">
        {label}
      </button>
    );
  }
}

export default SearchButton;
