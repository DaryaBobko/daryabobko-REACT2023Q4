import * as Yup from 'yup';

const characterErrorMessage = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().matches(
    /^[A-Z]/,
    'First name must start with an uppercase letter'
  ),
  age: Yup.number()
    .integer('Enter an integer')
    .positive('Must be a positive value')
    .typeError('Field must be a number'),
  email: Yup.string().email(),
  password: Yup.string()
    .min(4)
    .max(32)
    .required()
    .matches(/[0-9]/, characterErrorMessage('digit'))
    .matches(/[a-z]/, characterErrorMessage('lowercase'))
    .matches(/[A-Z]/, characterErrorMessage('uppercase'))
    .matches(/[^\w ]/g, characterErrorMessage('simbol')),
  secondPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  file: Yup.mixed()
    .test(
      'fileSize',
      'File is too large',
      (value) => !value || value[0].size <= 5000000
    ) // 5MB
    .test(
      'fileType',
      'Unsupported file format',
      (value) => !value || ['image/jpeg', 'image/png'].includes(value[0].type)
    ),

  confirm: Yup.boolean().oneOf([true], 'Accept Terms & Conditions is required'),
  gender: Yup.string().required('Choose gender'),
});
