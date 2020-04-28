import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form/form-input.component';
import { generatePlan } from '../../redux/athlete/api';
import { FormContainer, SubmitButton, Center, JumboContainer } from '../profile-form/profile-form.styles';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const CreateAthlete = ({ generatePlan }) => {
    const schema = yup.object({
        days_per_week: yup.string().required('Days per week is required'),
        goal: yup.string().required('Your workout goal is required'),
        level: yup.string().required('Your workout level is required'),
      });

      const SubmitForm = (values) => {
          console.log(values.level);
          console.log(values.goal);
        generatePlan(values);
      };

  return (
    <Formik
        validationSchema={schema}
        onSubmit={SubmitForm}
        initialValues={{
            days_per_week: '2',
            goal: 'lose fat',
            level: 'beginner',
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
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
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
        <SubmitButton type="submit" className="btn btn-primary">Submit</SubmitButton>
        </Form>
    )}
  </Formik>
    );
}

const mapDispatchToProps = dispatch => ({
    generatePlan: formData => dispatch(generatePlan(formData))
  });
  
export default connect(null, mapDispatchToProps)(CreateAthlete);