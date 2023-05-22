import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Form,
  FormText,
  GoogleText,
  GoogleBtn,
  Input,
  Label,
  LabelEmail,
  LabelPassword,
  WripperBtns,
  MainBtn,
  Error,
} from './AuthForm.styled';
import Sprite from '../../images/cabagge/sprite.svg';

const shema = yup.object().shape({
  email: yup
    .string()
    .matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid name')
    .required('Please fill a valid email address'),
  password: yup
    .string()
    .min(8, 'Password should be at least 8 characters long')
    .required('Password is required'),
});

export default function AuthForm() {
  const initialsValues = {
    email: '',
    password: '',
  };
  return (
    <Formik initialValues={initialsValues} validationSchema={shema}>
      <Form>
        <FormText>You can log in with your Google Account:</FormText>
        <GoogleBtn type='button'>
          <svg width={18} height={18}>
            <use href={`${Sprite}#google-icon`}></use>
          </svg>
          <GoogleText>Google</GoogleText>
        </GoogleBtn>
        <FormText>
          Or log in using an email and password, after registering:
        </FormText>
        <Label htmlFor='email'>
          <LabelEmail>Email:</LabelEmail>
          <Input type='email' id='email' name='email' />
        </Label>
        <Error name='email' component='div' className='error' />
        <Label htmlFor='password'>
          <LabelPassword>Password:</LabelPassword>
          <Input type='password' id='password' name='password' />
        </Label>
        <Error name='password' component='div' className='error' />
        <WripperBtns>
          <MainBtn type='submit'>Log in</MainBtn>
          <MainBtn type='button'>Registration</MainBtn>
        </WripperBtns>
      </Form>
    </Formik>
  );
}
