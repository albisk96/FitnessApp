import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form/form-input.component';
import { createWorkout } from '../../redux/workouts/workouts.actions';

const AddWorkoutForm = ({ createWorkout }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        kind: '',
        address: '',
        price: '',
        level: '',
        entries: ''
      });

      const {
        title,
        description,
        kind,
        address,
        price,
        level,
        entries
      } = formData;

      const onChange = e => 
      setFormData({ ...formData, [e.target.name]: e.target.value });

      const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
        createWorkout(formData);
        window.location.reload();
      };

  return (
    <form onSubmit={onSubmit}>
        <FormInput
            name='title'
            type='text'
            handleChange={onChange}
            value={title}
            label='Title'
            required
        />
        <FormInput
            name='description'
            type='text'
            onChange={onChange}
            value={description}
            label='Description'
            required
        /> 
        <FormInput
            name='kind'
            type='text'
            onChange={onChange}
            value={kind}
            label='Type of workout'
            required
        /> 
        <FormInput
            name='address'
            type='text'
            onChange={onChange}
            value={address}
            label='Address'
            required
        /> 
        <FormInput
            name='price'
            type='text'
            onChange={onChange}
            value={price}
            label='Price'
            required
        /> 
        <FormInput
            name='level'
            type='text'
            onChange={onChange}
            value={level}
            label='Level'
            required
        /> 
        <FormInput
            name='entries'
            type='text'
            onChange={onChange}
            value={entries}
            label='Entries'
            required
        /> 
        <button type="submit" className="btn btn-primary">Submit</button> 
  </form>
    );
}

const mapDispatchToProps = dispatch => ({
    createWorkout: formData => dispatch(createWorkout(formData))
  });
  
export default connect(null, mapDispatchToProps)(AddWorkoutForm);