import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import FormInput from '../form/form-input.component';
import EducationTable from '../profile/tables/education-table.component';
import { addEducation } from '../../redux/profile/api';
import { FormContainer, SubmitButton } from './profile-form.styles';

const UpdateEducation = ({ addEducation, education }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: '',
        description: ''
      });

      const [toDateDisabled, toggleDisabled] = useState(false);

      const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
      } = formData;

      const onChange = e => 
      setFormData({ ...formData, [e.target.name]: e.target.value });

      const onSubmit = e => {
        e.preventDefault();
        addEducation(formData);
      };

  return (
    <Fragment>
    <FormContainer onSubmit={onSubmit}>
        <FormInput
            name='school'
            type='text'
            placeholder='* School or Bootcamp'
            handleChange={onChange}
            value={school}
            label='School'
            required
        />
        <FormInput
            name='degree'
            type='text'
            placeholder='* Degree or Certificate'
            onChange={onChange}
            value={degree}
            label='Degree'
            required
        /> 
        <FormInput
            name='fieldofstudy'
            type='text'
            onChange={onChange}
            value={fieldofstudy}
            label='Field of Study'
            required
        /> 
        <FormInput
            name='from'
            type='date'
            onChange={onChange}
            value={from}
            label='From'
            required
        /> 
        <Form.Check 
            type='checkbox'
            name='current'
            label="Current"
            style={{ marginTop: '7%', marginBottom: '5%'}}
            checked={current}
            value={current}
            onChange={() => {
            setFormData({ ...formData, current: !current });
            toggleDisabled(!toDateDisabled);
            }}
        /> 
        <FormInput
            label='To'
            type='date'
            name='to'
            value={to}
            onChange={e => onChange(e)}
            disabled={toDateDisabled ? 'disabled' : ''}
        /> 
        <FormInput
            name='description'
            type='text'
            as="textarea" rows="3"
            onChange={onChange}
            value={description}
            label='Description'
            required
        /> 
        <center>
        <SubmitButton type="submit">Update</SubmitButton>
        </center>
        <EducationTable education={education} />
  </FormContainer>
  </Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    addEducation: formData => dispatch(addEducation(formData))
  });
  
export default connect(null, mapDispatchToProps)(UpdateEducation);