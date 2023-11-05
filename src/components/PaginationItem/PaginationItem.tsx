import classNames from 'classnames';
import styles from './PaginationItem.module.scss';

type PaginationItemProps = {
  onClick?: () => void;
  children: number;
  className?: string;
};

const PaginationItem: React.FC<PaginationItemProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <li
      onClick={onClick}
      className={classNames(styles.listItem, styles.active, className)}
    >
      {children}
    </li>
  );
};

export default PaginationItem;
