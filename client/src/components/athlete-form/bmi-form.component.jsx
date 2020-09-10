import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form/form-input.component';
import { calcBMI } from '../../redux/athlete/api';
import { FormContainer, SubmitButton } from '../profile-form/profile-form.styles';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const CreateAthlete = ({ calcBMI, athlete }) => {

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
  weight: yup.number().required('weight is required').max(230).min(25),
});

      const SubmitForm = (values) => {
        calcBMI(values);
      };

  return (
    <Formik
        validationSchema={schema}
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
            name='weight'
            type='number'
            label='Weight in Kg'
            id='weight'
            placeholder={calculateData(athlete.weight)}
            error={touched.weight && errors.weight}
            value={values.weight}
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