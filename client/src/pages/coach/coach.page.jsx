import React, { useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux'
import { getProfiles } from '../../redux/profile/api'
import Spinner from '../../components/spinner/spinner.component'

const CoachesPageContainer = lazy(() =>
  import('../../components/coaches/coaches.container')
);

const CoachesPage = ({ getProfiles }) => {
    useEffect(() => {
        getProfiles();
      }, [getProfiles]);
    
    return (
        <Suspense fallback={<Spinner />}>
            <div>
            <CoachesPageContainer />
            </div>
        </Suspense>
    )
}

const mapDispatchToProps = dispatch => ({
    getProfiles: () => dispatch(getProfiles())
  });

export default connect(null, mapDispatchToProps)(CoachesPage);