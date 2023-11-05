import styles from './Button.module.scss';

type ButtonProps = {
  onClick?: () => void;
  children: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
