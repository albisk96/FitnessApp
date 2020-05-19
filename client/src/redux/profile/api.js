import axios from 'axios';
import { getProfileSuccess, getProfilesSuccess, UpdateProfileSuccess, getProfileError, AddCommentSuccess,  RemoveCommentSuccess} from './profile.actions'
import { alertActions } from '../alert/alert.actions'

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
  try {
    const res = await axios.get('/api/coach');
    dispatch(getProfilesSuccess(res.data));
  } catch (error) {
    dispatch(alertActions.error('Cannot get profiles data'))
  }
};

// Get profile by ID
export const getProfileById = (userId) => async dispatch => {
  try {
    const res = await axios.get(`/api/coach/user/${userId}`);
    dispatch(getProfileSuccess(res.data));
  } catch (error) {
    dispatch(alertActions.error('Cannot get profiles data'))
  }
};
  

  // Create or update profile
  export const createProfile = (formData) => async dispatch => {
    try {  
      const res = await axios.post('/api/coach', formData);
      dispatch(getProfileSuccess(res.data));
      dispatch(alertActions.success('Profile created!'))
      window.location.reload();
    } catch (error) { 
      dispatch(alertActions.error('Cannot get profile data'))
    }
  };

// Add achievements
export const addAchievments = (formData) => async dispatch => {
  try {
    const res = await axios.put('/api/coach/achievements', formData);
    dispatch(UpdateProfileSuccess(res.data));
    dispatch(alertActions.success('Achievement added!'))
    window.location.reload();
  } catch (error) {
    dispatch(alertActions.error('Something went wrong, please try again'))
  }
};

// Add Education
export const addEducation = (formData) => async dispatch => {
  try {

    const res = await axios.put('/api/coach/education', formData);
    dispatch(UpdateProfileSuccess(res.data));
    dispatch(alertActions.success('Education added!'))
    window.location.reload();
  } catch (error) {
    dispatch(alertActions.error('Something went wrong, please try again'))
  }
};

// Delete ahievements
export const deleteAchievements = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/coach/achievements/${id}`);
    dispatch(UpdateProfileSuccess(res.data));
    dispatch(alertActions.success('Achievement deleted!'))
    window.location.reload();
  } catch (error) {
    dispatch(alertActions.error('Something went wrong, please try again'))
  }
};

// Delete education
export const deleteEducation = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/coach/education/${id}`);
    dispatch(UpdateProfileSuccess(res.data));
    dispatch(alertActions.success('Education deleted!'))
    window.location.reload();
  } catch (error) {
    dispatch(alertActions.error('Something went wrong, please try again'))
  }
};

// Add comment
export const addComment = (coachId, formData) => async dispatch => {
  try {
    const res = await axios.post(
      `/api/coach/comment/${coachId}`, formData);
    dispatch(AddCommentSuccess(res.data));
    dispatch(alertActions.success('Comment added!'))
  } catch (error) {
    dispatch(alertActions.error('Something went wrong, please try again'))
  }
};

// Delete comment
export const deleteComment = (coachId, commentId) => async dispatch => {
  try {
    await axios.delete(`/api/coach/comment/${coachId}/${commentId}`);

    dispatch(RemoveCommentSuccess(commentId));
    dispatch(alertActions.success('Comment deleted!'))
  } catch (error) {
    dispatch(alertActions.error('Something went wrong, please try again'))
  }
};