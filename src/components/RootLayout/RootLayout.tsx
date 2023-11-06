import { Outlet } from 'react-router-dom';
import Main from '../../pages/Main/Main';

import styles from './RootLayout.module.scss';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const RootLayout: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className={styles.container}>
        <Main />
        <Outlet />
      </div>
    </ErrorBoundary>
  );
};

export default RootLayout;
