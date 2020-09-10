import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form/form-input.component';
import EducationTable from '../profile/tables/education-table.component';
import { addEducation } from '../../redux/profile/api';
import { FormContainer, SubmitButton } from './profile-form.styles';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const UpdateEducation = ({ addEducation, education }) => {
    const schema = yup.object({
        school: yup.string().required('title is required').max(30),
        degree: yup.string().required('degree is required').max(20),
        fieldofstudy: yup.string().required('Field of Study is required').max(30),
        from: yup.string().required('Date from is required'),
      });

      const [toDateDisabled, toggleDisabled] = useState(false);

      const SubmitForm = (values) => {
        addEducation(values);
      };

  return (
    <Fragment>
    <FormContainer>
        <Formik
        validationSchema={schema}
        onSubmit={SubmitForm}
        initialValues={{
            school: '',
            degree: '',
            fieldofstudy: '',
            from: '',
            to: '',
            current: false,
            description: '',
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
            name='school'
            type='text'
            label='School'
            id='school'
            error={touched.school && errors.school}
            value={values.school}
            onChange={handleChange}
            onBlur={handleBlur}
        />
        <FormInput
            name='degree'
            type='text'
            label='Degree'
            id='degree'
            error={touched.degree && errors.degree}
            value={values.degree}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <FormInput
            name='fieldofstudy'
            type='text'
            label='Field of Study'
            id='fieldofstudy'
            error={touched.fieldofstudy && errors.fieldofstudy}
            value={values.fieldofstudy}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <FormInput
            name='from'
            type='date'
            label='From'
            id='from'
            error={touched.from && errors.from}
            value={values.from}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <label>Is it current?</label> <br />
        <input
            type="checkbox"
            name='current'
            id='current'
            value={values.current}
            onChange={() => { 
                toggleDisabled(!toDateDisabled)
            ;}}
        /> 
        <FormInput
            name='to'
            type='date'
            label='To'
            id='to'
            error={touched.to && errors.to}
            value={values.to}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={toDateDisabled ? 'disabled' : ''}
        /> 
        <FormInput
            name='description'
            type='text'
            label='Description'
            id='description'
            error={touched.description && errors.description}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            as='textarea'
            rows='3'
        /> 
        <SubmitButton type="submit" className="btn btn-primary">Submit</SubmitButton>
    </Form>
    )}
  </Formik>
  </FormContainer>
  <EducationTable education={education} />
  </Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    addEducation: values => dispatch(addEducation(values))
  });
  
export default connect(null, mapDispatchToProps)(UpdateEducation);