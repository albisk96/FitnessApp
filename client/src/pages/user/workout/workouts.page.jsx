import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchWorkoutData } from '../../../redux/workouts/workouts.actions';

import Spinner from '../../../components/spinner/spinner.component';

const WorkoutsListContainer = lazy(() =>
  import('./workouts.container')
);

export const WorkoutsPage = ({ fetchWorkoutData, match }) => {
  useEffect(() => {
    fetchWorkoutData();
  }, [fetchWorkoutData]);

  console.log(match);
  return (
    <Suspense fallback={<Spinner />}>
    <Route
        exact
        path={`${match.path}`}
        component={WorkoutsListContainer}
      />
  </Suspense>
  );
};

const mapDispatchToProps = dispatch => ({
    fetchWorkoutData: () => dispatch(fetchWorkoutData())
});

export default connect(
  null,
  mapDispatchToProps
)(WorkoutsPage);