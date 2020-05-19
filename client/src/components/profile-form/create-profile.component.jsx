import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form/form-input.component';
import { createProfile } from '../../redux/profile/api';
import { FormContainer, SubmitButton, Center, JumboContainer } from '../profile-form/profile-form.styles';
import { Formik, Form } from 'formik';
import { compareAsc } from 'date-fns';
import * as yup from 'yup';

const CreateMyProfile = ({ createProfile }) => {
    const schema = yup.object({
        DOB: yup.date().max(new Date()),
        bio: yup.string().required('Description is required'),
        skype: yup.string().required('Skype is required'),
        city: yup.string().required('City is required'),
        gym: yup.string().required('Gym is required'),
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
            city: '',
            website: '',
            bio: '',
            DOB: '',
            youtube: '',
            twitter: '',
            instagram: '',
            facebook: '',
            gym: '',
            skype: '',
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
            name='gym'
            type='text'
            label='Gym name and address which you work in'
            id='gym'
            error={touched.gym && errors.gym}
            value={values.gym}
            onChange={handleChange}
            onBlur={handleBlur}
        />
        <FormInput
            name='skype'
            type='text'
            label='Skype'
            id='skype'
            error={touched.skype && errors.skype}
            value={values.skype}
            onChange={handleChange}
            onBlur={handleBlur}
        />
        <FormInput
            name='city'
            type='text'
            label='City'
            id='city'
            error={touched.city && errors.city}
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
        />
        <FormInput
            name='website'
            type='text'
            label='Website'
            id='website'
            error={touched.website && errors.website}
            value={values.website}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
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
            name='bio'
            type='text'
            label='Short description about yoursel'
            id='bio'
            error={touched.bio && errors.bio}
            value={values.bio}
            onChange={handleChange}
            onBlur={handleBlur}
            /> 
        <FormInput
            name='youtube'
            type='text'
            label='Youtube channel'
            id='youtube'
            error={touched.youtube && errors.youtube}
            value={values.youtube}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <FormInput
            name='twitter'
            type='text'
            label='Twitter channel'
            id='twitter'
            error={touched.twitter && errors.twitter}
            value={values.twitter}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <FormInput
            name='instagram'
            type='text'
            label='Instagram account'
            id='instagram'
            error={touched.instagram && errors.instagram}
            value={values.instagram}
            onChange={handleChange}
            onBlur={handleBlur}
        /> 
        <FormInput
            name='facebook'
            type='text'
            label='Facebook profile'
            id='facebook'
            error={touched.facebook && errors.facebook}
            value={values.facebook}
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
  
export default connect(null, mapDispatchToProps)(CreateMyProfile);