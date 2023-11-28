import styles from './Select.module.scss';

type SelectProps = {
  // onChange: () => void;
  // value: string | number;
  name: string;
  placeholder?: string;
  label?: string;
};

const Select: React.FC<SelectProps> = ({
  // onChange,
  // value,
  placeholder,
  label,
  name,
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
      />

      <datalist id="countries">
        <option value="United States" />
        <option value="Canada" />
        <option value="United Kingdom" />
        <option value="Germany" />
      </datalist>

      {/* <div className={styles.error}>error</div> */}
    </div>
  );
};

export default Select;
