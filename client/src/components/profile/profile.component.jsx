import React, { Fragment, useEffect } from 'react';
import ProfileForm from '../profile-form/create-profile.component';
import { connect } from 'react-redux';
import Education from './education-and-achievements/education.component';
import Achievements from './education-and-achievements/achievements.component';
import Information from './information/information.component';
import MyWorkoutList from '../../components/workouts/profile-workout.component';
import UpdateEducationForm from '../profile-form/update-education.component';
import UpdateAchievementsForm from '../profile-form/update-achievements.component';
import IconButton from '../icon-button/icon.component';
import ProfileAvatar from './avatar/avatar.component';
import AddWorkout from '../workouts/add-workout.component';
import { Center, ProfileInfoContainer, Line, PortfolioContainer } from './profile.styles.jsx'
import { useAuth } from '../../contexts';

const Profile = ({ profile: { profile }, workout: {workouts} }) => {
    const { session } = useAuth();
    
    const myProfile = (
        <Fragment>
        <Center style={{marginBottom: "2%"}}>
        <p>Update your portfolio</p>
        </Center>
        <PortfolioContainer>
            <IconButton modalTitle="Update Education" iconName="fas fa-graduation-cap" componentInModal={<UpdateEducationForm education={profile.education} />} />
            <IconButton modalTitle="Update Achievements" iconName="fas fa-trophy" componentInModal={<UpdateAchievementsForm achievements={profile.achievements} />} />
        </PortfolioContainer>      
        <Line />    
        </Fragment>
    );
    const myWorkouts = workouts.filter(x => x.user === session.id)
    const profileWorkouts = workouts.filter(x => x.user === profile.user._id)
    return(
        <div>
            {profile ? 
            <Fragment>
            <div>
                <ProfileAvatar profile={profile} />
            </div>
            <div className="container">
            <ProfileInfoContainer>
                { profile.user._id === session.id ? myProfile : '' }
                    <Center>
                        <Information user={profile.user}/>
                    </Center>
                    <Center style={{ marginBottom: '5%', marginTop: '5%'}}>
                        <h3>Education</h3>
                        <Line />
                    </Center>
                    { profile.education !== null ? <Education education={profile.education} /> : <center>You need to update your education profile</center>}
                    <Center style={{ marginBottom: '5%', marginTop: '5%'}}>
                        <h3>Achievements</h3>
                        <Line />
                    </Center>
                    { profile.achievements !== null ? <Achievements achievements={profile.achievements} /> : <center>You need to update your achievements profile</center>}
                    <Center style={{ marginBottom: '5%', marginTop: '5%'}}>
                        <h3>Workouts</h3>
                        <Line />
                        { profile.user._id === session.id ? 
                            <Fragment>
                                <AddWorkout className="btn btn-outline-danger my-2 my-sm-0" modalTitle="Create a workout" buttonName="Add New" /> 
                                <MyWorkoutList workouts={myWorkouts} />
                            </Fragment>
                            : <MyWorkoutList workouts={profileWorkouts} />
                        }
                         
                    </Center>
                </ProfileInfoContainer>
            </div>
            </Fragment> : 
            <div className="container" style={{ marginTop: '3%'}}>
                <Center>
                    <h3>Please, create your Coach profile!</h3>
                </Center>
                <ProfileForm />
            </div>
        }
        </div>
    )
}

const mapStateToProps = state => ({
    profile: state.profile,
    workout: state.workout
});

export default connect(mapStateToProps)(Profile);