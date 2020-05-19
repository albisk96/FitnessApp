import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form/form-input.component';
import { createWorkout } from '../../redux/workouts/workouts.action';
import "react-datepicker/dist/react-datepicker.css"
import { Formik, Form } from 'formik';
import {DatePickerField} from '../../helpers/datepicker';
import * as yup from 'yup';

const AddWorkoutForm = ({ createWorkout }) => {
    const schema = yup.object({
        title: yup.string().required('title is required'),
        address: yup.string().required('address of Study is required'),
        price: yup.string().required('price from is required'),
        description: yup.string().required('Description is required'),
        level: yup.string().required('level is required'),
        entries: yup.string().required('entries is required'),
        when: yup.string().required('Date when it starts required'),
      });

      const SubmitForm = (values) => {
        createWorkout(values);
        window.location.reload();
      };

  return (
    <Formik
        validationSchema={schema}
        onSubmit={SubmitForm}
        initialValues={{
            title: '',
            address: '',
            price: '',
            level: 'beginner',
            entries: '',
            description: '',
            when: new Date(),
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
        <FormInput
            name='address'
            type='text'
            label='Address'
            id='address'
            error={touched.address && errors.address}
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <label>Choose Date and Time</label> <br />
        <DatePickerField 
        name="when"  
        showTimeSelect
        timeFormat="HH"
        timeIntervals={60}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        />
        <FormInput
            name='price'
            type='text'
            label='Price'
            id='price'
            error={touched.price && errors.price}
            value={values.price}
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
        <option value="all levels">All levels</option>
        </FormInput> 
        <FormInput
            name='entries'
            type='text'
            label='Entries'
            id='entries'
            error={touched.entries && errors.entries}
            value={values.entries}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <button type="submit" className="btn btn-primary">Submit</button> 
        </Form>
        )}
      </Formik>
    );
}

const mapDispatchToProps = dispatch => ({
    createWorkout: values => dispatch(createWorkout(values))
  });
  
export default connect(null, mapDispatchToProps)(AddWorkoutForm);