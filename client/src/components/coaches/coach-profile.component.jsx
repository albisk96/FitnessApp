import React, {useEffect, Fragment} from 'react';
import { connect } from 'react-redux';
import Spinner from '../spinner/spinner.component';
import { getProfileById } from '../../redux/profile/api';
import { fetchWorkoutData } from '../../redux/workouts/workouts.action';
import Profile from '../profile/profile.component'

const CoachProfile = ({ fetchWorkoutData, getProfileById, profile: {profile, loading}, match, workout }) => {
    const nullProfile = !profile;
    useEffect(() => {
      getProfileById(match.params.id);
    }, [getProfileById, match.params.id, nullProfile]);

    useEffect(() => {
        fetchWorkoutData();
      }, [fetchWorkoutData]);
  
    console.log(workout)
    return(
        <Fragment>
        {profile === null || loading ? (
            <Spinner />
        ) : (<Profile profile={profile} workouts={workout} />)}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    profile: state.profile,
    workout: state.workout
});

export default connect(mapStateToProps, { getProfileById, fetchWorkoutData })(CoachProfile);