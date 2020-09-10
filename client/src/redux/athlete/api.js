
import axios from 'axios';
import { getAthleteSuccess, UpdateAthleteSuccess, getAthleteError } from './athlete.actions'
import { alertActions } from '../alert/alert.actions'

export function getCurrentProfile() {
  return (dispatch) => {
    return axios.get('/api/athlete')
      .then(response => {
        dispatch(getAthleteSuccess(response.data))
      })
      .catch(error => {
      dispatch(getAthleteError(error.message))
      })
  };
};
  
  // Create or update profile
  export const createProfile = (
    formData
  ) => async dispatch => {
    try {  
      const res = await axios.post('/api/athlete', formData);
      dispatch(getAthleteSuccess(res.data));
      
      window.location.reload();
      dispatch(alertActions.success('Profile created successfully!'))
    } catch (error) { 
      dispatch(alertActions.error('Cannot get profiles data'))
    }
  };

  // Update Body Fat
export const bodyFat = (formData) => async dispatch => {
    try {
      const res = await axios.put('/api/athlete/bodyFat', formData);
      dispatch(UpdateAthleteSuccess(res.data));
      window.location.reload();
      dispatch(alertActions.success('Body Fat updated successfully!'))
    } catch (error) {
      dispatch(alertActions.error('Cannot get profiles data'))
    }
  };

    // Update BMI
export const calcBMI = (formData) => async dispatch => {
    try {
      const res = await axios.put('/api/athlete/bmi', formData);
      dispatch(UpdateAthleteSuccess(res.data));
      await window.location.reload();
      await dispatch(alertActions.success('BMI updated successfully!'))
    } catch (error) {
      dispatch(alertActions.error('Cannot get profiles data'))
    }
  };

    // Update BMI
  export const generatePlan = (formData) => async dispatch => {
      try {
        const res = await axios.put('/api/athlete/plan', formData);
        dispatch(UpdateAthleteSuccess(res.data));
        dispatch(alertActions.success('Workout plan generated successful!'))
      } catch (error) {
        dispatch(alertActions.error('Cannot get profiles data'))
      }
    };