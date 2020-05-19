import React, {useState} from 'react';
import FormInput from '../form/form-input.component';
import axios from 'axios';
import { useAuth } from '../../contexts'
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { alertActions } from '../../redux/alert/alert.actions';
import { useDispatch } from 'react-redux';

const Login = ({ modalShow }) => {
  const {createSession} = useAuth();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  
  const schema = yup.object({
    email: yup.string().required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters or more').required('Password is required'),
  });
  
  const SubmitForm = (values) => {
    
    axios.post('/api/auth', values).then(
      res => {
        if(res.status === 200){
          createSession(res.data)
          modalShow(false) 
        }
      }
    ).catch(function(err){
      setError('Invalid credentials, please try again')
      setTimeout(() => setError(''), 5000)
  })
  };

    return (
      <Formik
      validationSchema={schema}
      onSubmit={SubmitForm}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      {({
        handleChange,
        handleBlur,
        touched,
        values,
        errors,
      }) => (
    <Form>
        <FormInput
          id='email'
          type='email'
          label="Email"
          error={touched.email && errors.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
      />
      <FormInput
        id="password"
        type='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Password"
        error={touched.password && errors.password}
        />
        <center>
      {error && <p style={{ color: 'red' }}>
      {error}
      </p>}
    </center>
      <button type="submit" className="btn btn-primary">Submit</button>
  </Form>
  )}
  </Formik>
    );
}

export default Login;