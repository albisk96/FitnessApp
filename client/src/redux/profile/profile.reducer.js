import ProfileActionTypes from './profile.types';

const INITIAL_STATE = {
    profile: null,
    profiles: [],
    isLoading: true,
    error: {}
}

const profileReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type){
        case ProfileActionTypes.GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                isLoading: false
            }
        case ProfileActionTypes.GET_PROFILE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state
    }
};

export default profileReducer;