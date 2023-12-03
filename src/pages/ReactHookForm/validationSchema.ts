import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name should be at least 3 characters')
    .max(20, 'Name should not exceed 20 characters'),
  age: Yup.number()
    .required('Age is required')
    .positive('Age should be a positive number')
    .integer('Age should be an integer'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password should be at least 8 characters'),
  secondPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
  gender: Yup.string().required('Gender is required'),
  confirm: Yup.boolean().oneOf([true], 'You must confirm'),
  file: Yup.mixed().required('File is required'),
  country: Yup.string().required('Country is required'),
});
