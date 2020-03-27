import React, { useState } from 'react';
import FormInput from '../form/form-input.component';
// import { InputFeedback, Label, TextInput } from '../form/formik';
import axios from 'axios';
import { useAuth } from '../../contexts'
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const Login = () => {
  const {createSession} = useAuth();

  const schema = yup.object({
    email: yup.string().required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters or more').required('Password is required'),
  });
  
  const SubmitForm = (values) => {
    axios.post('/api/auth', values).then(
      res => {
        if(res.status === 200){
          createSession(res.data)
        }
      }
    )
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
        // values,
        // touched,
        // errors,
        // dirty,
        // handleChange,
        // handleBlur,
        // handleSubmit,
        // handleReset,
        // isSubmitting,
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
          //isInvalid={!!errors.email}
          //isValid={touched.email && !errors.email}
          // name='email'
          // controlId="valid01"
      />
      <FormInput
        id="password"
        type='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Password"
        error={touched.password && errors.password}
        //isValid={touched.password && !errors.password}
        //isInvalid={!!errors.password}
        // name='password'
        // controlId="validationCustom02"
        />
      <button type="submit" className="btn btn-primary">Submit</button>
  </Form>
  )}
  </Formik>
    );
}

export default Login;