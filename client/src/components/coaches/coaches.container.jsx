import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectProfilesIsFetching } from '../../redux/profile/profile.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';

import CoachesList from './coaches-list.component';

const mapStateToProps = createStructuredSelector({
    loading: selectProfilesIsFetching,
});


const CoachesPageContainer = compose (
    connect(mapStateToProps),
    WithSpinner
)(CoachesList)

export default CoachesPageContainer;