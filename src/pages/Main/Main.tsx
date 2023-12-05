import styles from './Main.module.scss';
import CustomNavLink from '../../components/CustomNavLink/CustomNavLink';
import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../rootState';
import { selectFormData } from '../../formSlice';

const Main: React.FC = () => {
  const savedFormData = useSelector((state: RootState) =>
    selectFormData(state)
  );

  return (
    <div>
      <div className={styles.container}>
        <CustomNavLink to="uncontrolled-components">
          <Button>Uncontrolled components</Button>
        </CustomNavLink>
        <CustomNavLink to="react-hook-form">
          <Button>React hook form</Button>
        </CustomNavLink>
      </div>
      {savedFormData && (
        <div className={styles.data}>
          <div>
            <span>name: </span>
            {savedFormData.name}
          </div>
          <div>
            <span>age: </span>
            {savedFormData.age}
          </div>
          <div>
            {' '}
            <span>email: </span> {savedFormData.email}
          </div>
          <div>
            <span>password: </span> {savedFormData.password}
          </div>
          <div>
            <span>second password: </span> {savedFormData.secondPassword}
          </div>
          <div>
            <span>gender: </span>
            {savedFormData.gender}
          </div>
          <div>
            <span>T&C: </span>
            {savedFormData.confirm && 'Yes'}
          </div>
          <div>
            <span>file: </span>
            {savedFormData.file}
          </div>
          <div>
            <span>country: </span>
            {savedFormData.confirm}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
