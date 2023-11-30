import { ChangeEvent } from 'react';
import styles from './FormCheckbox.module.scss';

type FormInputProps = {
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  checked?: boolean;
  error?: string;
};

const FormCheckbox: React.FC<FormInputProps> = ({
  onChange,
  label,
  name,
  checked,
  error,
  register,
}) => {
  return (
    <div className={styles.field}>
      <div>
        <input
          type="checkbox"
          id={name}
          name={name}
          onChange={onChange}
          checked={checked}
          ref={register}
        />
        <label htmlFor={name}>{label}</label>
      </div>
      <div className={styles.error}>{error}</div>
    </div>
  );
};

export default FormCheckbox;
