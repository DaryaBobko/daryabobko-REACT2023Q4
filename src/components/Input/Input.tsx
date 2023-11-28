import styles from './Input.module.scss';

type InputProps = {
  onChange: () => void;
  value: string | number;
};

const Input: React.FC<InputProps> = ({ onChange, value }) => {
  const placeholder = 'Type here';

  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
