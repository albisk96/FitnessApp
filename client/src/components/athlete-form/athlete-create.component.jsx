import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form/form-input.component';
import { createProfile } from '../../redux/athlete/api';
import { FormContainer, SubmitButton, Center, JumboContainer } from '../profile-form/profile-form.styles';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const CreateAthlete = ({ createProfile }) => {
    const schema = yup.object({
        DOB: yup.date().max(new Date()).min(new Date('01-01-1920')),
        gender: yup.string().required('Your gender is required'),
        height: yup.number().required('Height is required').max(230).min(80),
        weight: yup.number().required('weight is required').max(230).min(25),
        neck: yup.number().required('neck is required').max(70).min(10),
        waist: yup.number().required('waist is required').max(200).min(30),
        hip: yup.number().required('hip is required').max(200).min(30),
      });

      const SubmitForm = (values) => {
        createProfile(values);
      };

  return (
    <JumboContainer>
    <FormContainer>
    <Formik
        validationSchema={schema}
        onSubmit={SubmitForm}
        initialValues={{
            DOB: '',
            gender: 'male',
            height: '',
            weight: '',
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
            name='DOB'
            type='date'
            label='Date of birth'
            id='DOB'
            error={touched.DOB && errors.DOB}
            value={values.DOB}
            onChange={handleChange}
            onBlur={handleBlur}
            /> 
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
            type='number'
            label='Height in cm'
            id='height'
            error={touched.height && errors.height}
            value={values.height}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <FormInput
            name='weight'
            type='number'
            label='Weight in kg'
            id='weight'
            error={touched.weight && errors.weight}
            value={values.weight}
            onChange={handleChange}
            onBlur={handleBlur}
            /> 
        <FormInput
            name='neck'
            type='number'
            label='Neck in cm'
            id='neck'
            error={touched.neck && errors.neck}
            value={values.neck}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <FormInput
            name='waist'
            type='number'
            label='Waist in cm'
            id='waist'
            error={touched.waist && errors.waist}
            value={values.waist}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <FormInput
            name='hip'
            type='number'
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
  </JumboContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    createProfile: formData => dispatch(createProfile(formData))
  });
  
export default connect(null, mapDispatchToProps)(CreateAthlete);