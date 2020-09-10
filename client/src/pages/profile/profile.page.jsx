import React, { useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../redux/profile/api'
import { fetchWorkoutData } from '../../redux/workouts/workouts.action'
import Spinner from '../../components/spinner/spinner.component'


const ProfilePageContainer = lazy(() =>
  import('../../components/profile/profile.container')
);

const ProfilePage = ({ getCurrentProfile, fetchWorkoutData }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
    
    useEffect(() => {
        fetchWorkoutData();
    }, [fetchWorkoutData]);
    
    return (
        <Suspense fallback={<Spinner />}>
            <div>
            <ProfilePageContainer />
            </div>
        </Suspense>
    )
}

const mapDispatchToProps = dispatch => ({
    getCurrentProfile: () => dispatch(getCurrentProfile()),
    fetchWorkoutData: () => dispatch(fetchWorkoutData())
  });

export default connect(null, mapDispatchToProps)(ProfilePage);