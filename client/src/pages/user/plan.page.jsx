import React, { useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../redux/athlete/api'
import Spinner from '../../components/spinner/spinner.component'

const WorkoutPlanPageContainer = lazy(() =>
  import('../../components/plan/plan.container')
);

const AthletePage = ({ getCurrentProfile }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
    
    return (
        <Suspense fallback={<Spinner />}>
            <div>
            <WorkoutPlanPageContainer />
            </div>
        </Suspense>
    )
}

const mapDispatchToProps = dispatch => ({
    getCurrentProfile: () => dispatch(getCurrentProfile())
  });

export default connect(null, mapDispatchToProps)(AthletePage);