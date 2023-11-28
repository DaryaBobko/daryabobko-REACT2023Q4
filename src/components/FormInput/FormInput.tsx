import styles from './FormInput.module.scss';

type FormInputProps = {
  onChange: () => void;
  value: string | number;
  name: string;
  placeholder?: string;
  label?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  onChange,
  value,
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
        name={name}
        id={name}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {/* <div className={styles.error}>error</div> */}
    </div>
  );
};

export default FormInput;
