import { Formik } from 'formik';
import * as yup from 'yup';
import {
  MainForm,
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
import { useDispatch } from 'react-redux';
import { register, login } from 'redux/auth/auth-operations';

export default function AuthForm() {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
        'Invalid name'
      )
      .required('Please fill a valid email address'),
    password: yup
      .string()
      .min(8, 'Password should be at least 8 characters long')
      .required('Password is required'),
  });

  const dispatch = useDispatch();

  let submitAction = null;

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    if (submitAction === 'register') {
      dispatch(register(values));
      setSubmitting(false);
      resetForm();
      return;
    }
    if (submitAction === 'login') {
      dispatch(login(values));
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <MainForm>
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
        </Label>
        <Input type='email' id='email' name='email' />
        <Error name='email' component='div' />

        <Label htmlFor='password'>
          <LabelPassword>Password:</LabelPassword>
        </Label>
        <Input type='password' id='password' name='password' />
        <Error name='password' component='div' />

        <WripperBtns>
          <MainBtn type='submit' onClick={() => (submitAction = 'login')}>
            Log in
          </MainBtn>
          <MainBtn type='submit' onClick={() => (submitAction = 'register')}>
            Registration
          </MainBtn>
        </WripperBtns>
      </MainForm>
    </Formik>
  );
}
