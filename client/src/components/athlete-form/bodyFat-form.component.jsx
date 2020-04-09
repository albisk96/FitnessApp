import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form/form-input.component';
import { bodyFat } from '../../redux/athlete/api';
import { FormContainer, SubmitButton, JumboContainer } from '../profile-form/profile-form.styles';
import { Formik, Form } from 'formik';

const bodyFatForm = ({ bodyFat }) => {
      const SubmitForm = (values) => {
        bodyFat(values);
      };

  return (
    <FormContainer>
    <Formik
        onSubmit={SubmitForm}
        initialValues={{
            gender: '',
            height: '',
            neck: '',
            waist: '',
            hip: '',
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
            name='gender'
            type='text'
            label='Gender'
            id='gender'
            error={touched.gender && errors.gender}
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            as='select'
        >
            <option value="male">Male</option>
            <option value="female">Female</option>
        </FormInput> 
        <FormInput
            name='height'
            type='text'
            label='Height in cm'
            id='height'
            error={touched.height && errors.height}
            value={values.height}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <FormInput
            name='neck'
            type='text'
            label='Neck in cm'
            id='neck'
            error={touched.neck && errors.neck}
            value={values.neck}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <FormInput
            name='waist'
            type='text'
            label='Waist in cm'
            id='waist'
            error={touched.waist && errors.waist}
            value={values.waist}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <FormInput
            name='hip'
            type='text'
            label='Hip in cm'
            id='hip'
            error={touched.hip && errors.hip}
            value={values.hip}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <SubmitButton type="submit" className="btn btn-primary">Submit</SubmitButton>
        </Form>
    )}
  </Formik>
  </FormContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    bodyFat: formData => dispatch(bodyFat(formData))
  });
  
export default connect(null, mapDispatchToProps)(bodyFatForm);