import React from 'react';
import { connect } from 'react-redux';
import CoachItem from '../cards/coach-card.component';
import { CardColumns } from 'react-bootstrap';

const CoachesList =({ profile: { profiles } }) => {
    return(
    <div className="container">
    <CardColumns style={{ marginTop: '10%', columnCount: '4'}}>
        {profiles.length > 0 ? (
            profiles.map(coach => (
                <CoachItem key={coach._id} coach={coach} />
            ))
        ) : (
            <h3>No Coach Found</h3>
        )}
        </CardColumns>
    </div>
    );
}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps)(CoachesList);