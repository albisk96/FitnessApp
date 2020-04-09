import AthleteActionTypes from './athlete.types';

const INITIAL_STATE = {
	athlete: null,
	loading: true,
	errorMessage: undefined,
}

const athleteReducer = ( state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type){
        case AthleteActionTypes.UPDATE_ATHLETE_SUCCESS:
        case AthleteActionTypes.GET_ATHLETE_SUCCESS:
            return {
                ...state,
                athlete: payload,
                loading: false
            }
        case AthleteActionTypes.GET_ATHLETE_ERROR:
            return {
                ...state,
                errorMessage: payload,
                loading: false,
                athlete: null
            }
        default:
            return state
    }
};

export default athleteReducer;