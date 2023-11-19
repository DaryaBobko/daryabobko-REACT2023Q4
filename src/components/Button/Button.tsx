import styles from './Button.module.scss';

export type ButtonProps = {
  children: string;
  onClick?: () => void;
  testid?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, testid }) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      data-testid={testid}
    >
      {children}
    </button>
  );
};

export default Button;
