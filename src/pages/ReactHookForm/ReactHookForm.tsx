import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';

import styles from './ReactHookForm.module.scss';

import * as Yup from 'yup';

const validationSchema1 = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name should be at least 3 characters')
    .max(20, 'Name should not exceed 20 characters'),
  age: Yup.number()
    .required('Age is required')
    .positive('Age should be a positive number')
    .integer('Age should be an integer'),
});

const ReactHookForm: React.FC = () => {
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(validationSchema1),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="name"
          placeholder={'enter name'}
          label="Name"
          error={errors.name?.message}
          register={register}
        />
        <FormInput
          name="age"
          placeholder={'enter age'}
          label="Age"
          error={errors.age?.message}
          register={register}
        />

        <Button type="submit" disabled={errors}>
          Validate
        </Button>
      </form>
    </div>
  );
};

export default ReactHookForm;
