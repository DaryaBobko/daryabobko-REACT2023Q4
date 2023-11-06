import { NavLink } from 'react-router-dom';
import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './CustomNavLink.module.scss';

type CustomNavLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
};

const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  to,
  children,
  className,
}) => {
  return (
    <NavLink to={to} className={classNames(styles.link, className)}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
