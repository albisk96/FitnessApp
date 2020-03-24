import axios from 'axios';
import { getProfileSuccess, getProfilesSuccess, UpdateProfileSuccess, ClearProfileSuccess, getProfileError } from './profile.actions'

export function getCurrentProfile() {
    return (dispatch) => {
      return axios.get('/api/coach/me')
        .then(response => {
          dispatch(getProfileSuccess(response.data))
        })
        .catch(error => {
        dispatch(getProfileError(error.message))
        })
    };
  };

// Get all profiles
export const getProfiles = () => async dispatch => {
  dispatch(ClearProfileSuccess());
  try {
    const res = await axios.get('/api/coach');
    dispatch(getProfilesSuccess(res.data));
  } catch (error) {
    dispatch(getProfileError(error.message));
  }
};

// Get profile by ID
export const getProfileById = (userId) => async dispatch => {
  console.log(userId)
  try {
    const res = await axios.get(`/api/coach/user/${userId}`);
    dispatch(getProfileSuccess(res.data));
  } catch (error) {
    dispatch(getProfileError(error.message));
  }
};
  

  // Create or update profile
  export const createProfile = (
    formData,
    history,
    edit = false
  ) => async dispatch => {
    try {  
      const res = await axios.post('/api/coach', formData);
      dispatch(getProfileSuccess(res.data));
      if (!edit) {
        history.push('/dashboard');
      }
    } catch (error) { 
      dispatch(getProfileError(error.message));
    }
  };

// Add achievements
export const addAchievments = (formData) => async dispatch => {
  try {
    const res = await axios.put('/api/coach/achievements', formData);
    dispatch(UpdateProfileSuccess(res.data));
    window.location.reload();
  } catch (error) {
    dispatch(getProfileError(error.message));
  }
};

// Add Education
export const addEducation = (formData) => async dispatch => {
  try {
    const res = await axios.put('/api/coach/education', formData);
    dispatch(UpdateProfileSuccess(res.data));
    window.location.reload();
  } catch (error) {
    dispatch(getProfileError(error.message));
  }
};

// Delete ahievements
export const deleteAchievements = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/coach/achievements/${id}`);
    dispatch(UpdateProfileSuccess(res.data));
    window.location.reload();
  } catch (error) {
    dispatch(getProfileError(error.message));
  }
};

// Delete education
export const deleteEducation = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/coach/education/${id}`);
    dispatch(UpdateProfileSuccess(res.data));
    window.location.reload();
  } catch (error) {
    dispatch(getProfileError(error.message));
  }
};