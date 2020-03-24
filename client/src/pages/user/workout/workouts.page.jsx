import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';

import { fetchWorkoutData } from '../../../redux/workouts/workouts.action';

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
      <WorkoutsListContainer />
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