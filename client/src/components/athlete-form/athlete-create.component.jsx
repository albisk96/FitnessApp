import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form/form-input.component';
import { createProfile } from '../../redux/athlete/api';
import { FormContainer, SubmitButton, Center, JumboContainer } from '../profile-form/profile-form.styles';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const CreateAthlete = ({ createProfile }) => {
    const schema = yup.object({
        DOB: yup.string().required('Date of birth is required'),
        gender: yup.string().required('Your gender is required'),
        height: yup.string().required('Height is required'),
        weight: yup.string().required('weight is required'),
        days_per_week: yup.string().required('Days per week is required'),
        goal: yup.string().required('Your workout goal is required'),
        level: yup.string().required('Your workout level is required'),
        bodyType: yup.string().required('Your body type is required'),
        neck: yup.number().required('neck is required'),
        waist: yup.number().required('waist is required'),
        hip: yup.number().required('hip is required'),
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
            days_per_week: '1',
            goal: 'lose fat',
            level: 'beginner',
            bodyType: 'ectomorph',
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
            type='text'
            label='Height in cm'
            id='height'
            error={touched.height && errors.height}
            value={values.height}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <FormInput
            name='weight'
            type='text'
            label='Weight in kg'
            id='weight'
            error={touched.weight && errors.weight}
            value={values.weight}
            onChange={handleChange}
            onBlur={handleBlur}
            /> 
        <FormInput
            name='level'
            type='text'
            label='Workout Level'
            id='level'
            error={touched.level && errors.level}
            value={values.level}
            onChange={handleChange}
            onBlur={handleBlur}
            as='select'
        >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
        </FormInput> 
        <FormInput
            name='days_per_week'
            type='text'
            label='How many days per week you can workout?'
            id='days_per_week'
            error={touched.days_per_week && errors.days_per_week}
            value={values.days_per_week}
            onChange={handleChange}
            onBlur={handleBlur}
            as='select'
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
        </FormInput> 
        <FormInput
            name='goal'
            type='text'
            label='Workout Goal'
            id='goal'
            error={touched.goal && errors.goal}
            value={values.goal}
            onChange={handleChange}
            onBlur={handleBlur}
            as='select'
        > 
            <option value="lose fat">Lose fat</option>
            <option value="build muscle">Build muscle</option>
            <option value="get stronger">Get stronger</option>
        </FormInput> 
        <FormInput
            name='bodyType'
            type='text'
            label='Body Type'
            id='bodyType'
            error={touched.bodyType && errors.bodyType}
            value={values.bodyType}
            onChange={handleChange}
            onBlur={handleBlur}
            as='select'
        > 
            <option value="ectomorph">Ectomorph</option>
            <option value="mesomorph">Mesomorph</option>
            <option value="endomorph">Endomorph</option>
        </FormInput> 
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
  </JumboContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    createProfile: formData => dispatch(createProfile(formData))
  });
  
export default connect(null, mapDispatchToProps)(CreateAthlete);