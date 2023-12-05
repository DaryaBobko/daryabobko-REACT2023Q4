import { ChangeEvent } from 'react';
import styles from './RadioGroup.module.scss';

type FormInputProps = {
  name?: string;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  name,
  error,
  checked,
  onChange,
}) => {
  return (
    <fieldset className={styles.field}>
      <legend className={styles.label}>Choose gender</legend>

      <div>
        <input
          type="radio"
          id="male"
          name={name}
          value="male"
          checked={checked === 'male'}
          onChange={onChange}
          required
        />
        <label className={styles.label} htmlFor="male">
          male
        </label>
      </div>

      <div>
        <input
          type="radio"
          id="female"
          name={name}
          value="female"
          checked={checked === 'female'}
          onChange={onChange}
          required
        />
        <label className={styles.label} htmlFor="female">
          female
        </label>
      </div>
      <div className={styles.error}>{error}</div>
    </fieldset>
  );
};

export default FormInput;
