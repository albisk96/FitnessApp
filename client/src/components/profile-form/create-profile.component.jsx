import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form/form-input.component';
import { createProfile } from '../../redux/profile/profile.actions';

const CreateMyProfile = ({ createProfile }) => {
    const [formData, setFormData] = useState({
        location: '',
        website: '',
        bio: '',
        youtube: '',
        twitter: '',
        instagram: '',
        facebook: ''
      });

      const {
        location,
        website,
        bio,
        youtube,
        twitter,
        instagram,
        facebook
      } = formData;

      const onChange = e => 
      setFormData({ ...formData, [e.target.name]: e.target.value });

      const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
        createProfile(formData);
        window.location.reload();
      };

  return (
    <form onSubmit={onSubmit}>
        <FormInput
            name='location'
            type='text'
            handleChange={onChange}
            value={location}
            label='Location'
            required
        />
        <FormInput
            name='website'
            type='text'
            onChange={onChange}
            value={website}
            label='Website'
            required
        /> 
        <FormInput
            name='bio'
            type='text'
            onChange={onChange}
            value={bio}
            label='Bio'
            required
        /> 
        <FormInput
            name='youtube'
            type='text'
            onChange={onChange}
            value={youtube}
            label='Youtube channel'
            required
        /> 
        <FormInput
            name='twitter'
            type='text'
            onChange={onChange}
            value={twitter}
            label='Twitter'
            required
        /> 
        <FormInput
            name='instagram'
            type='text'
            onChange={onChange}
            value={instagram}
            label='Instagram'
            required
        /> 
        <FormInput
            name='facebook'
            type='text'
            onChange={onChange}
            value={facebook}
            label='Facebook'
            required
        /> 
        <button type="submit" className="btn btn-primary">Submit</button> 
  </form>
    );
}

const mapDispatchToProps = dispatch => ({
    createProfile: formData => dispatch(createProfile(formData))
  });
  
export default connect(null, mapDispatchToProps)(CreateMyProfile);