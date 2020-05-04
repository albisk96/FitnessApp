import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { search } from '../../../helpers/search';

import { fetchWorkoutData } from '../../../redux/workouts/workouts.action';
import { getCurrentProfile } from '../../../redux/athlete/api'

import Spinner from '../../../components/spinner/spinner.component';

const WorkoutsListContainer = lazy(() =>
  import('./workouts.container')
);

export const WorkoutsPage = ({ fetchWorkoutData, getCurrentProfile, athlete: {athlete, loading} }) => {
  const page = search.useQuery().get('page');
  const nullAthlete = !athlete;
  useEffect(() => {
    fetchWorkoutData(page);
  }, [page, nullAthlete]);

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    // <div>
    // {athlete === null || loading ? (
    //   <Spinner />
    // ) : (<WorkoutsListContainer page={page} />)}
    // </div>
    <Suspense fallback={<Spinner />}>
    <div>
    <WorkoutsListContainer />
    </div>
</Suspense>
  );
};

const mapStateToProps = state => ({
  athlete: state.athlete
});

const mapDispatchToProps = dispatch => ({
    fetchWorkoutData: (page) => dispatch(fetchWorkoutData(page)),
    getCurrentProfile: () => dispatch(getCurrentProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutsPage);