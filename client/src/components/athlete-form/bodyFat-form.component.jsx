import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form/form-input.component';
import { bodyFat } from '../../redux/athlete/api';
import { FormContainer, SubmitButton } from '../profile-form/profile-form.styles';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const bodyFatForm = ({ bodyFat, athlete }) => {

    function calculateData(data){

        if(data.length > 0){
            return data[data.length - 1];
        } else if (data){
            return data;
        } else {
            return 'There is no data'
        }
    };

    const schema = yup.object({
        height: yup.number().required('Height is required').max(230).min(80),
        neck: yup.number().required('neck is required').max(70).min(10),
        waist: yup.number().required('waist is required').max(200).min(30),
        hip: yup.number().required('hip is required').max(200).min(30),
      });

      const SubmitForm = (values) => {
        bodyFat(values);
      };

  return (
    <Formik
        validationSchema={schema}
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
            value={athlete.gender}
            disabled
        >
        </FormInput> 
        <FormInput
            name='height'
            type='number'
            label='Height in cm'
            id='height'
            placeholder={calculateData(athlete.height)}
            error={touched.height && errors.height}
            value={values.height}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <FormInput
            name='neck'
            type='number'
            label='Neck in cm'
            id='neck'
            placeholder={calculateData(athlete.neck)}
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
            placeholder={calculateData(athlete.waist)}
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
            placeholder={calculateData(athlete.hip)}
            error={touched.hip && errors.hip}
            value={values.hip}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <SubmitButton type="submit" className="btn btn-primary">Submit</SubmitButton>
        </Form>
    )}
  </Formik>
    );
}

const mapDispatchToProps = dispatch => ({
    bodyFat: formData => dispatch(bodyFat(formData))
  });
  
export default connect(null, mapDispatchToProps)(bodyFatForm);