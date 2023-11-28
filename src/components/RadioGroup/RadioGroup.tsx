import styles from './RadioGroup.module.scss';

type FormInputProps = {
  // onChange?: () => void;
  // value?: string | number;
  // label?: string;
};

const FormInput: React.FC<FormInputProps> = ({}) => {
  return (
    <fieldset className={styles.field}>
      <legend className={styles.label}>Choose gender</legend>

      <div>
        <input type="radio" id="male" name="gender" value="male" checked />
        <label className={styles.label} htmlFor="male">
          male
        </label>
      </div>

      <div>
        <input type="radio" id="female" name="gender" value="female" />
        <label className={styles.label} htmlFor="female">
          female
        </label>
      </div>
      <div className={styles.error}>error</div>
    </fieldset>
  );
};

export default FormInput;
