import CustomError from '../../components/CustomError/CustomError';
import styles from './Main.module.scss';
import CustomNavLink from '../../components/CustomNavLink/CustomNavLink';
import Button from '../../components/Button/Button';

const Main: React.FC = () => {
  return (
    <div className={styles.container}>
      <CustomNavLink to="uncontrolled-components">
        <Button>Uncontrolled components</Button>
      </CustomNavLink>
      <CustomNavLink to="react-hook-form">
        <Button>React hook form</Button>
      </CustomNavLink>

      {/* <Button onClick={() => {}}>Throw error</Button> */}

      {false && <CustomError />}
    </div>
  );
};

export default Main;
