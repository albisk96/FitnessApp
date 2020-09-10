import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectAthleteIsFetching } from '../../redux/athlete/athlete.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';

import PlanOverview from './plan.component';

const mapStateToProps = createStructuredSelector({
    loading: selectAthleteIsFetching
});


const WorkoutPlanPageContainer = compose (
    connect(mapStateToProps),
    WithSpinner
)(PlanOverview)

export default WorkoutPlanPageContainer;