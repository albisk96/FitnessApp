import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form/form-input.component';
import { calcBMI } from '../../redux/athlete/api';
import { FormContainer, SubmitButton } from '../profile-form/profile-form.styles';
import { Formik, Form } from 'formik';

const CreateAthlete = ({ calcBMI }) => {

      const SubmitForm = (values) => {
        calcBMI(values);
      };

  return (
    <Formik
        onSubmit={SubmitForm}
        initialValues={{
            weight: '',
            height: '',
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
            name='height'
            type='text'
            label='Height in cm'
            id='height'
            error={touched.height && errors.height}
            value={values.height}
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
    calcBMI: formData => dispatch(calcBMI(formData))
  });
  
export default connect(null, mapDispatchToProps)(CreateAthlete);