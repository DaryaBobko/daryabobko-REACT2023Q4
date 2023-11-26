import { ChangeEvent } from 'react';
import styles from './Input.module.scss';

type InputProps = {
  onSearchChange: (value: string) => void;
  value: string | number;
  testid?: string;
};

const Input: React.FC<InputProps> = ({ onSearchChange, value, testid }) => {
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
      data-testid={testid}
    />
  );
};

export default Input;
