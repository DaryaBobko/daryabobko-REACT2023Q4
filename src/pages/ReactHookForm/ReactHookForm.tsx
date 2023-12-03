import { useForm } from 'react-hook-form';
import { validationSchema } from './validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';

import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import FormCheckbox from '../../components/FormCheckbox/FormCheckbox';
import FileUploader from '../../components/FileUploader/FileUploader';
import CustomNavLink from '../../components/CustomNavLink/CustomNavLink';

import styles from './ReactHookForm.module.scss';
import Select from '../../components/Select/Select';

const ReactHookForm: React.FC = () => {
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // const onSubmit = (data) => {
  // };

  return (
    <div className={styles.container}>
      <div>
        <CustomNavLink className={styles.button} to={'/'}>
          Home
        </CustomNavLink>{' '}
        / react-hook-form
      </div>

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
        <FormInput
          name="email"
          placeholder={'enter email'}
          label="Email"
          error={errors.email?.message}
          register={register}
        />
        <FormInput
          name="password"
          placeholder={'enter password'}
          label="Password"
          error={errors.password?.message}
          register={register}
        />
        <FormInput
          name="secondPassword"
          error={errors.secondPassword?.message}
          placeholder={'repeat password'}
          label="Confirm password"
          register={register}
        />
        <RadioGroup
          name="gender"
          error={errors.gender?.message}
          register={register}
        />
        <FormCheckbox
          label="accept T&C"
          name="confirm"
          error={errors.confirm?.message}
          register={register}
        />
        <FileUploader
          label="File"
          name="file"
          placeholder={'choose file'}
          error={errors.file?.message}
          register={register}
        />
        <Select
          label="Country"
          name="Select country"
          placeholder="Select country"
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
