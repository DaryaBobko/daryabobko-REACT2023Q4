import styles from './ListItem.module.scss';
import { Animal } from '../../models/AnimalSearchResult';
import animalsImg from '../../assets/animals.jpg';

type ListItemProps = Pick<
  Animal,
  'name' | 'earthAnimal' | 'avian' | 'canine' | 'feline'
>;

const ListItem: React.FC<ListItemProps> = ({
  name,
  earthAnimal,
  avian,
  canine,
  feline,
}) => {
  return (
    <li className={styles.listItem}>
      <img src={animalsImg} className={styles.img} alt="animals" />
      <div>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.subtitle}>{earthAnimal ? '' : 'extinct specie'}</p>
        <p className={styles.description}>
          <b>avian : </b>
          {avian ? 'Yes' : 'No'}
        </p>
        <p className={styles.description}>
          <b>canine : </b>
          {canine ? 'Yes' : 'No'}
        </p>
        <p className={styles.description}>
          <b>feline : </b>
          {feline ? 'Yes' : 'No'}
        </p>

        <p className={styles.description}>
          No additional information available. More detailed information about a
          specific animal can be obtained from the relevant sources
        </p>
      </div>
    </li>
  );
};

export default ListItem;
