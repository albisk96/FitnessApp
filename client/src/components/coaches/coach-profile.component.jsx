import React, {useEffect, Fragment} from 'react';
import { connect } from 'react-redux';
import Spinner from '../spinner/spinner.component';
import { getProfileById } from '../../redux/profile/api';
import Profile from '../profile/profile.component'

const CoachProfile = ({ getProfileById, profile: {profile, loading}, match }) => {
    const nullProfile = !profile;
    useEffect(() => {
      getProfileById(match.params.id);
    }, [getProfileById, match.params.id, nullProfile]);
  
    return(
        <Fragment>
        {profile === null || loading ? (
            <Spinner />
        ) : (<Profile profile={profile}/>)}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfileById })(CoachProfile);