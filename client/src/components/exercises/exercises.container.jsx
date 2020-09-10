import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectExercisesFetching } from '../../redux/exercises/exercises.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';

import ExercisesOverview from './exercises-list.component';

const mapStateToProps = createStructuredSelector({
    loading: selectExercisesFetching
});


const ExercisesPageContainer = compose (
    connect(mapStateToProps),
    WithSpinner
)(ExercisesOverview)

export default ExercisesPageContainer;