import { Component } from "react";
import "./SearchPanel.scss";

class SearchPanel extends Component {
  render() {
    const placeholder = "Type here";

    return <input className="input-search" placeholder={placeholder} />;
  }
}

export default SearchPanel;
