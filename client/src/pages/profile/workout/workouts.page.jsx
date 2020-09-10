import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { search } from '../../../helpers/search';

import { fetchWorkoutData } from '../../../redux/workouts/workouts.action';

import Spinner from '../../../components/spinner/spinner.component';

const WorkoutsListContainer = lazy(() =>
  import('./workouts.container')
);

export const WorkoutsPage = ({ fetchWorkoutData }) => {
  const page = search.useQuery().get('page');
  useEffect(() => {
    fetchWorkoutData(page);
  }, [page]);

  return (

    <Suspense fallback={<Spinner />}>
      <div>
      <WorkoutsListContainer />
      </div>
    </Suspense>
  );
};

const mapDispatchToProps = dispatch => ({
    fetchWorkoutData: (page) => dispatch(fetchWorkoutData(page))
});

export default connect(
  null,
  mapDispatchToProps
)(WorkoutsPage);