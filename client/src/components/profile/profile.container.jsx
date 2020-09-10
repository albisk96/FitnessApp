import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectProfilesIsFetching } from '../../redux/profile/profile.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';

import ProfileOverview from './profile.component';

const mapStateToProps = createStructuredSelector({
    loading: selectProfilesIsFetching,
});

const ProfilePageContainer = compose (
    connect(mapStateToProps),
    WithSpinner
)(ProfileOverview)

export default ProfilePageContainer;