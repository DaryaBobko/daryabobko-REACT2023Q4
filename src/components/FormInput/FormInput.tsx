import { InputHTMLAttributes } from 'react';
import styles from './FormInput.module.scss';

type FormInputProps = {
  label?: string;
  error?: string;
};

const FormInput: React.FC<FormInputProps & InputHTMLAttributes<unknown>> = ({
  label,
  error,
  name,
  ...inputProps
}) => {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input required className={styles.input} name={name} {...inputProps} />
      <div className={styles.error}>{error}</div>
    </div>
  );
};

export default FormInput;
