import React from 'react';
import FormInput from '../../form/form-input.component';
import { Button } from 'react-bootstrap'
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { addComment } from '../../../redux/profile/api';
import * as yup from 'yup';

const Login = ({ id, addComment }) => {

  const schema = yup.object({
    text: yup.string().required('text is required').max(100),
    stars: yup.string().required('Rating is required'),
  });

  const SubmitForm = (values) => {
    addComment(id, values);
  }
    return (
      <Formik
      validationSchema={schema}
      onSubmit={SubmitForm}
      initialValues={{
        text: '',
        stars: '',
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
          id='text'
          type='text'
          as="textarea"
          label="Comment"
          plaintext
          error={touched.text && errors.text}
          value={values.text}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{borderBottom: '1px solid #afafaf'}}
      />
      <FormInput
        id="stars"
        as="select"
        value={values.stars}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Rating"
        error={touched.stars && errors.stars}
        >
        <option value={null}>Choose ...</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        </FormInput>
      <Button type="submit" variant="outline-dark">Submit</Button>
  </Form>
  )}
  </Formik>
    );
}

export default connect(null, { addComment })(Login);