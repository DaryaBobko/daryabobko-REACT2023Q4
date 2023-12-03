import { NavLink } from 'react-router-dom';
import styles from './404.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.bigTitle}>404</div>
      <h1 className={styles.title}>Page Not Found</h1>
      <NavLink className={styles.button} to={'/'}>
        Home
      </NavLink>
    </div>
  );
};

export default NotFound;
