import { Component } from 'react';
import './ListItem.scss';
import { Animal } from '../../models/AnimalSearchResult';
import animalsImg from '../../assets/animals.jpg';

type ListItemProps = Pick<Animal, 'uid' | 'name' | 'earthAnimal'>;

class ListItem extends Component<ListItemProps> {
  render() {
    const { uid, name, earthAnimal } = this.props;

    return (
      <li className="list-item" key={uid}>
        <img src={animalsImg} className="list-item-img" alt="animals" />
        <div>
          <h3 className="list-item-title">{name}</h3>
          <p className="list-item-subtitle">
            {earthAnimal ? '' : 'extinct specie'}
          </p>
          <p className="list-item-description">
            No additional information available. More detailed information about
            a specific animal can be obtained from the relevant sources
          </p>
        </div>
      </li>
    );
  }
}

export default ListItem;
