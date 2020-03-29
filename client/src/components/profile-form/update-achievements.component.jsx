import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form/form-input.component';
import AchievementsTable from '../profile/tables/achievement-table.component'
import { addAchievments } from '../../redux/profile/api';
import { FormContainer, SubmitButton } from './profile-form.styles';

const UpdateAchievements = ({ addAchievments, achievements }) => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
      });

      const {
        title,
        date
      } = formData;

      const onChange = e => 
      setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
    <FormContainer onSubmit={e => {
        e.preventDefault();
        addAchievments(formData);
      }}>
        <FormInput
            name='title'
            type='text'
            handleChange={onChange}
            value={title}
            label='Title'
            required
        />
        <FormInput
            name='date'
            type='text'
            onChange={onChange}
            value={date}
            label='Date'
            required
        />
        
        <center>
        <SubmitButton type="submit">Update</SubmitButton>
        </center>
        <AchievementsTable achievements={achievements} />
  </FormContainer>
  </Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    addAchievments: formData => dispatch(addAchievments(formData))
  });
  
export default connect(null, mapDispatchToProps)(UpdateAchievements);