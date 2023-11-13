import { ChangeEvent } from 'react';
import styles from './Input.module.scss';

type InputProps = {
  onSearchChange: (value: string) => void;
  value: string | number;
};

const Input: React.FC<InputProps> = ({ onSearchChange, value }) => {
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  const placeholder = 'Type here';

  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChangeInput}
    />
  );
};

export default Input;
