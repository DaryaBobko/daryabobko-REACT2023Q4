import React from 'react';

import styles from '../styles/404.module.scss';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.bigTitle}>404</div>
      <h1 className={styles.title}>Page Not Found</h1>
      <Link className={styles.button} href={'/'}>
        Home
      </Link>
    </div>
  );
};

export default NotFound;
