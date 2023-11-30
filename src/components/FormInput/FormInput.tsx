import { ChangeEvent } from 'react';
import styles from './FormInput.module.scss';

type FormInputProps = {
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  placeholder?: string;
  label?: string;
  error?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  onChange,
  value,
  placeholder,
  label,
  name,
  error,
  register,
}) => {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        id={name}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={register}
      />
      <div className={styles.error}>{error}</div>
    </div>
  );
};

export default FormInput;
