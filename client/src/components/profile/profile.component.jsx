import React, { Fragment } from 'react';
import ProfileForm from '../profile-form/create-profile.component';
import { connect } from 'react-redux';
import Experience from './experience/experience.component';
import Information from './information/information.component';
import Card from '../cards/card.component';
import {JumboContainer, Avatar, Center, ProfileInfoContainer, Line } from './profile.styles.jsx'
import { useAuth } from '../../contexts';

const Profile = ({ profile: { profile }, workouts }) => {
    const { session } = useAuth();

    const myWorkouts = workouts.workout.filter(x => x.user === session.id)

    return(
        <div>
            {profile ? 
            <Fragment>
            <div>
                <JumboContainer>
                    <Center>
                        <Avatar alt="" src={`https://picsum.photos/id/${Math.floor((Math.random() * 100) + 1)}/300/200`} />
                    </Center>
                </JumboContainer>
            </div>
            <div className="container">
                <ProfileInfoContainer>
                    <Center>
                        <Information user={profile.user}/>
                    </Center>
                    <Center style={{ marginBottom: '5%', marginTop: '5%'}}>
                        <h3>Experience</h3>
                        <Line />
                    </Center>
                    <Experience />
                    <Center style={{ marginBottom: '5%', marginTop: '5%'}}>
                        <h3>Education</h3>
                        <Line />
                    </Center>
                    <Experience />
                    <Center style={{ marginBottom: '5%', marginTop: '5%'}}>
                        <h3>Workouts</h3>
                        <Line />
                        {myWorkouts ? 
                            <Card workouts={myWorkouts} /> :
                            <h3>You dont have any workouts</h3>
                        }
                        
                    </Center>
                </ProfileInfoContainer>
            </div>
            </Fragment> : <ProfileForm />}
        </div>
    )
}

const mapStateToProps = state => ({
    profile: state.profile,
    workouts: state.workouts
});

export default connect(mapStateToProps)(Profile);