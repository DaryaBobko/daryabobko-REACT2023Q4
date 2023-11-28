import classNames from 'classnames';
import CustomError from '../../components/CustomError/CustomError';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={classNames(styles.container, styles.header)}>
        <div className={styles.searchPanel}>
          <Input onChange={() => {}} value={''} />
          <Button onClick={() => {}}>Search</Button>
        </div>
        <Button onClick={() => {}}>Throw error</Button>
      </div>

      {false && <CustomError />}
    </div>
  );
};

export default Main;
