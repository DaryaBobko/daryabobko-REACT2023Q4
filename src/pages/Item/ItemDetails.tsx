import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './ItemDetails.module.scss';

import ListItem from '../../components/ListItem/ListItem';
import CustomNavLink from '../../components/CustomNavLink/CustomNavLink';
import { Animal, AnimalDetails } from '../../models/AnimalSearchResult';

const ItemDetails: React.FC = () => {
  const { uid } = useParams();
  const [loading, setLoading] = useState(true);
  const [animal, setAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    fetch(`https://stapi.co/api/v1/rest/animal?uid=${uid}`)
      .then((response) => response.json())
      .then((animal: AnimalDetails) => {
        setAnimal(animal.animal);
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => setLoading(false));
  }, [uid]);

  return (
    !loading &&
    uid !== 'daryabobko-REACT2023Q4' &&
    animal && (
      <div className={styles.itemDetails}>
        <ListItem {...animal} />
        <CustomNavLink to="/">close</CustomNavLink>
      </div>
    )
  );
};

export default ItemDetails;
