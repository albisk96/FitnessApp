import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectWorkoutsIsFetching, selectWorkout } from '../../../redux/workouts/workouts.selectors';
import WithSpinner from '../../../components/with-spinner/with-spinner.component';
import WorkoutList from '../../../components/workouts/workout-list.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectWorkoutsIsFetching,
});

const WorkoutContainer = compose (
    connect(mapStateToProps),
    WithSpinner
)(WorkoutList)

export default WorkoutContainer;