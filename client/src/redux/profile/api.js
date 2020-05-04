import axios from 'axios';
import { getProfileSuccess, getProfilesSuccess, UpdateProfileSuccess, getProfileError, AddCommentSuccess,  RemoveCommentSuccess} from './profile.actions'

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
  export const createProfile = (formData) => async dispatch => {
    console.log(formData)
    try {  
      const res = await axios.post('/api/coach', formData);
      dispatch(getProfileSuccess(res.data));
      window.location.reload();
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

// Add comment
export const addComment = (coachId, formData) => async dispatch => {
  try {
    const res = await axios.post(
      `/api/coach/comment/${coachId}`, formData);
    dispatch(AddCommentSuccess(res.data));
  } catch (error) {
    dispatch(getProfileError(error.message));
  }
};

// Delete comment
export const deleteComment = (coachId, commentId) => async dispatch => {
  try {
    await axios.delete(`/api/coach/comment/${coachId}/${commentId}`);

    dispatch(RemoveCommentSuccess(commentId));
  } catch (error) {
    dispatch(getProfileError(error.message));
  }
};