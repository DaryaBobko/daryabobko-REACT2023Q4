import styles from './Select.module.scss';

type SelectProps = {
  name: string;
  placeholder?: string;
  label?: string;
  register?: any;
  error?: string;
};

const Select: React.FC<SelectProps> = ({
  placeholder,
  label,
  name,
  register,
  error,
}) => {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>

      <input
        className={styles.input}
        name={name}
        id={name}
        type="text"
        list="countries"
        placeholder={placeholder}
        ref={register}
      />

      <datalist id="countries">
        <option value="United States" />
        <option value="Canada" />
        <option value="United Kingdom" />
        <option value="Germany" />
      </datalist>

      <div className={styles.error}>{error}</div>
    </div>
  );
};

export default Select;
