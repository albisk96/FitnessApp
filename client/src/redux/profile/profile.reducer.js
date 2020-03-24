import ProfileActionTypes from './profile.types';

const INITIAL_STATE = {
	profile: null,
    profiles: [],
	loading: true,
	errorMessage: undefined,
}

const profileReducer = ( state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type){
        case ProfileActionTypes.UPDATE_PROFILE_SUCCESS:
        case ProfileActionTypes.GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case ProfileActionTypes.GET_PROFILES_SUCCESS:
            return {
                ...state,
                profiles: payload,
                loading: false
            }
        case ProfileActionTypes.GET_PROFILE_ERROR:
            return {
                ...state,
                errorMessage: payload,
                loading: false,
                profile: null
            }
        case ProfileActionTypes.CLEAR_PROFILE_SUCCESS:
            return {
                ...state,
                profile: null,
                loading: false
            }
        default:
            return state
    }
};

export default profileReducer;