import React from 'react';
import Link from 'next/link';
import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './CustomNavLink.module.scss';

type CustomNavLinkProps = {
  to?: string;
  children: ReactNode;
  className?: string;
};

const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  to = '/',
  children,
  className,
}) => {
  return (
    <Link href={to} className={classNames(styles.link, className)}>
      {children}
    </Link>
  );
};

export default CustomNavLink;
