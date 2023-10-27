import { Component } from "react";
import "./ListItem.scss";

type ListItemProps = {
  title: string;
  description: string;
};

class ListItem extends Component<ListItemProps> {
  render() {
    const { title, description } = this.props;

    return (
      <li className="mv-6">
        <h3 className="list-item-title">{title}</h3>
        <p className="list-item-description">{description}</p>
      </li>
    );
  }
}

export default ListItem;
