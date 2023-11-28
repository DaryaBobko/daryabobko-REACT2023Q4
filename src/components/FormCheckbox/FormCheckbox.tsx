import styles from './FormCheckbox.module.scss';

type FormInputProps = {
  name: string;
  onChange?: () => void;
  label?: string;
};

const FormCheckbox: React.FC<FormInputProps> = ({ onChange, label, name }) => {
  return (
    <div className={styles.field}>
      <div>
        <input
          type="checkbox"
          id={name}
          name={name}
          onChange={onChange}
          checked
        />
        <label htmlFor={name}>{label}</label>
      </div>
      <div className={styles.error}>error</div>
    </div>
  );
};

export default FormCheckbox;
