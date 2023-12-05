import { SubmitHandler, useForm } from 'react-hook-form';
import { validationSchema } from './validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';

import { useNavigate } from 'react-router';
import Button from '../../components/Button/Button';

import FileUploader from '../../components/FileUploader/FileUploader';
import CustomNavLink from '../../components/CustomNavLink/CustomNavLink';

import styles from './ReactHookForm.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { submitFormData } from '../../formSlice';
import { UserForm } from '../../models/Form';

function ReactHookForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    if (isSubmitted) {
      navigate('/');
    }
  }, [isSubmitted, navigate]);

  const onSubmit: SubmitHandler<UserForm> = (data) => {
    dispatch(submitFormData(data));
    setIsSubmitted(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({ resolver: yupResolver(validationSchema) });

  return (
    <div className={styles.container}>
      <div>
        <CustomNavLink className={styles.button} to={'/'}>
          Home
        </CustomNavLink>{' '}
        / react-hook-form
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            placeholder="name"
            {...register('name')}
          />
          <label className={styles.error}>{errors.name?.message}</label>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Age</label>
          <input
            className={styles.input}
            placeholder="age"
            type="text"
            {...register('age')}
          />
          <label className={styles.error}>{errors.age?.message}</label>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            {...register('email')}
            placeholder="email"
            type="email"
          />
          <label className={styles.error}>{errors.email?.message}</label>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Password</label>
          <input
            {...register('password')}
            placeholder="password"
            type="password"
            className={styles.input}
          />
          <label className={styles.error}>{errors.password?.message}</label>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Confirm Password</label>
          <input
            {...register('secondPassword')}
            placeholder="confirm password"
            type="password"
            className={styles.input}
          />
          <label className={styles.error}>
            {errors.secondPassword?.message}
          </label>
        </div>

        <fieldset className={styles.field}>
          <legend className={styles.label}>Choose gender</legend>
          <div>
            <input
              type="radio"
              id="male"
              value="male"
              {...register('gender')}
            />
            <label className={styles.label} htmlFor="male">
              male
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="female"
              value="female"
              {...register('gender')}
            />
            <label className={styles.label} htmlFor="female">
              female
            </label>
          </div>
          <div className={styles.error}>{errors.gender?.message}</div>
        </fieldset>

        <div className={styles.field}>
          <label className={styles.label}>File</label>
          <FileUploader />
          <label className={styles.error}>{errors.file?.message}</label>
        </div>

        <div className={styles.checkboxfield}>
          <input type="checkbox" {...register('confirm')} id="acceptTerms" />
          <label className={styles.label} htmlFor="acceptTerms">
            Accept Terms and Conditions
          </label>
          <label className={styles.error}>{errors.confirm?.message}</label>
        </div>

        <Button type="submit">Validate</Button>
      </form>
    </div>
  );
}

export default ReactHookForm;
