import styles from './Button.module.scss';

export type ButtonProps = {
  children: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
