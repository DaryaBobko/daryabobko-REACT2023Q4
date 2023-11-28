import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';
import styles from './UncontrolledComponents.module.scss';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import FormCheckbox from '../../components/FormCheckbox/FormCheckbox';
import FileUploader from '../../components/FileUploader/FileUploader';
import Select from '../../components/Select/Select';

const UncontrolledComponents: React.FC = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <FormInput
          name="name"
          onChange={() => {}}
          value={''}
          placeholder={'enter name'}
          label="Name"
        />
        <FormInput
          name="age"
          onChange={() => {}}
          value={''}
          placeholder={'enter age'}
          label="Age"
        />
        <FormInput
          name="email"
          onChange={() => {}}
          value={''}
          placeholder={'enter email'}
          label="Email"
        />
        <div className={styles.row}>
          <FormInput
            name="password"
            onChange={() => {}}
            value={''}
            placeholder={'enter password'}
            label="Password"
          />
          <FormInput
            name="password2"
            onChange={() => {}}
            value={''}
            placeholder={'repeat password'}
            label="Confirm password"
          />
        </div>
        <RadioGroup />
        <FormCheckbox label="accept T&C" name="accepting" />
        <FileUploader
          label="File"
          name="filename"
          placeholder={'choose file'}
        />
        <Select
          label="Country"
          name="Select country"
          placeholder="Select country"
        />

        <Button onClick={() => {}}>Validate</Button>
      </form>
    </div>
  );
};

export default UncontrolledComponents;
