import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectAthleteIsFetching } from '../../redux/athlete/athlete.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';

import AthleteOverview from './athlete.component';

const mapStateToProps = createStructuredSelector({
    loading: selectAthleteIsFetching
});


const AthletePageContainer = compose (
    connect(mapStateToProps),
    WithSpinner
)(AthleteOverview)

export default AthletePageContainer;