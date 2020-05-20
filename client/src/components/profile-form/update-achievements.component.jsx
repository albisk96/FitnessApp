import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form/form-input.component';
import AchievementsTable from '../profile/tables/achievement-table.component'
import { addAchievments } from '../../redux/profile/api';
import { FormContainer, SubmitButton } from './profile-form.styles';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const UpdateAchievements = ({ addAchievments, achievements }) => {

      const schema = yup.object({
        title: yup.string().required('title is required').max(30),
        date: yup.string().required('date is required'),
      });

     const SubmitForm = (values) => {
      addAchievments(values);
       }

  return (
    <div>
    <FormContainer>
    <Formik
    validationSchema={schema}
    onSubmit={SubmitForm}
    initialValues={{
      title: '',
      date: '',
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
          name='title'
          type='text'
          label='Title'
          id='title'
          error={touched.title && errors.title}
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
      />
        <FormInput
          name='date'
          type='date'
          label='Date'
          id='date'
          error={touched.date && errors.date}
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        
        <SubmitButton type="submit" className="btn btn-primary">Submit</SubmitButton>
        </Form>
  )}
  </Formik>
  </FormContainer>
        <AchievementsTable achievements={achievements} />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addAchievments: values => dispatch(addAchievments(values))
  });
  
export default connect(null, mapDispatchToProps)(UpdateAchievements);