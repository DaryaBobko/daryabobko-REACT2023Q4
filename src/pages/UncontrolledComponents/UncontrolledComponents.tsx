import { ChangeEvent, FormEvent, useState } from 'react';

import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import FormCheckbox from '../../components/FormCheckbox/FormCheckbox';
import FileUploader from '../../components/FileUploader/FileUploader';
import Select from '../../components/Select/Select';
import CustomNavLink from '../../components/CustomNavLink/CustomNavLink';

import styles from './UncontrolledComponents.module.scss';

const UncontrolledComponents: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    secondPassword: '',
    confirm: false,
    gender: '',
    file: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    secondPassword: '',
    confirm: '',
    gender: '',
    file: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const formHasError =
    errors.name ||
    errors.age ||
    errors.email ||
    errors.password ||
    errors.confirm ||
    errors.gender ||
    errors.file
      ? true
      : false;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.target.files[0]);

    setErrors((prevErrors) => ({
      ...prevErrors,
      file: '',
    }));

    // Convert file to base64 and save to Redux store
    // const reader = new FileReader();
    // reader.onloadend = () => {
    //   dispatch({ type: 'SAVE_FILE_TO_REDUX', payload: reader.result });
    // };
    // reader.readAsDataURL(selectedFile);

    // setSelectedFile(file);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    !containsUppercase(formData.name)
      ? setErrors((prevErrors) => ({
          ...prevErrors,
          name: 'First letter must be uppercase',
        }))
      : null;

    !validateNumber(formData.age)
      ? setErrors((prevErrors) => ({
          ...prevErrors,
          age: 'Must be only positive numbers',
        }))
      : null;

    !validateEmail(formData.email)
      ? setErrors((prevErrors) => ({ ...prevErrors, email: 'Must be email' }))
      : null;

    formData.password !== formData.secondPassword ||
    !validatePassword(formData.password)
      ? setErrors((prevErrors) => ({
          ...prevErrors,
          password:
            'Passwords should match and contain number, uppercase and lowercase letters, character',
        }))
      : null;

    !formData.gender
      ? setErrors((prevErrors) => ({
          ...prevErrors,
          gender: 'Please select gender option',
        }))
      : null;

    !formData.confirm
      ? setErrors((prevErrors) => ({
          ...prevErrors,
          confirm: 'Must check confirm',
        }))
      : null;

    if (selectedFile) {
      const maxSize = 1024 * 1024; // 1MB
      if (selectedFile.size > maxSize) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          file: 'File size exceeds the limit (1MB)',
        }));
        return;
      }

      const allowedTypes = ['image/png', 'image/jpeg'];
      if (!allowedTypes.includes(selectedFile.type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          file: 'Invalid file type. Please choose a PNG or JPEG',
        }));
        return;
      }
    }
  };

  const containsUppercase = (str: string) => /^[A-Z]/.test(str);
  const validateNumber = (str: string) => {
    return /\d/.test(str) || /^d/.test(str);
  };
  const validateEmail = (str: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  };
  const validatePassword = (str: string) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?!.*\s).{4,}$/.test(
      str
    );
  };

  return (
    <div className={styles.container}>
      <div>
        <CustomNavLink className={styles.button} to={'/daryabobko-REACT2023Q4'}>
          Home
        </CustomNavLink>{' '}
        / uncontrolled-components
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormInput
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={'enter name'}
          label="Name"
          error={errors.name}
        />
        <FormInput
          name="age"
          onChange={handleChange}
          value={formData.age}
          placeholder={'enter age'}
          label="Age"
          error={errors.age}
        />
        <FormInput
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder={'enter email'}
          label="Email"
          error={errors.email}
        />
        <FormInput
          name="password"
          onChange={handleChange}
          value={formData.password}
          placeholder={'enter password'}
          label="Password"
          error={errors.password}
        />
        <FormInput
          name="secondPassword"
          onChange={handleChange}
          value={formData.secondPassword}
          placeholder={'repeat password'}
          label="Confirm password"
        />
        <RadioGroup
          name="gender"
          error={errors.gender}
          onChange={handleChange}
          checked={formData.gender}
        />
        <FormCheckbox
          label="accept T&C"
          name="confirm"
          checked={formData.confirm}
          error={errors.confirm}
          onChange={handleChange}
        />
        <FileUploader
          label="File"
          name="file"
          placeholder={'choose file'}
          error={errors.file}
          onChange={handleFileChange}
        />
        <Select
          label="Country"
          name="Select country"
          placeholder="Select country"
        />

        <Button type="submit" disabled={formHasError}>
          Validate
        </Button>
      </form>
    </div>
  );
};

export default UncontrolledComponents;
