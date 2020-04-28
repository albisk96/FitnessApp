import React, { useState } from 'react';
import { connect } from 'react-redux'
import { JumboContainer, Center, Avatar, ProfileInfoContainer, StyledNav, BackgroundImage } from './athlete.styles'
import BmiData from '../charts/bmi.component';
import BodyFat from '../charts/body-fat.component';
import AdditionalData from '../charts/additional-data.component';
import AthleteForm from '../athlete-form/athlete-create.component';
import UpdateWeight from '../athlete-form/bmi-form.component';
import BodyFatForm from '../athlete-form/bodyFat-form.component';
import { Button, Tabs, Tab, Nav } from 'react-bootstrap';
import ProfileInfo from './athlete-profile.component'
import Trainings from './trainings.component';

const Athlete = ({ athlete: {athlete} }) => {
    return(
        <div>
        { athlete ? 
            <JumboContainer>
            <Center>
                <Avatar alt="" src={athlete.user.avatar} />
            </Center>
        
        <div className="container">
        <ProfileInfoContainer>
        <Tabs 
            id="controlled-tab-example"
            >
            <Nav eventKey="profile" title="Profile">
            <ProfileInfo athlete={athlete} />
            </Nav>
            <Nav eventKey="bmi" title="BMI Data">
            <Center>
            <h1>BMI Data</h1>
            <div style={{ marginTop: '3%', marginBottom: '3%', width: '50%'}}>
            <UpdateWeight />
            </div>
            <div>
              <BmiData bmi={athlete.bmi}/>
            </div>
            </Center>
            </Nav>
            <Nav eventKey="bodyFat" title="Body Data">
            <Center>
            <h1>Body Data</h1>
            <div style={{ marginTop: '3%', marginBottom: '3%', width: '50%' }}>
            <BodyFatForm />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <div style={{ width: '50%', margin: '1%'}}>
              <BodyFat bodyFat={athlete.bodyFat} />
            </div>
            <div style={{ width: '50%', margin: '1%'}}>
              <AdditionalData neck={athlete.neck} waist={athlete.waist} hip={athlete.hip} />
            </div>
            </div>
            </Center>
            </Nav>
            <Nav eventKey="myWorkouts" title="Trainings">
              <Trainings />
            </Nav>
          </Tabs>
        </ProfileInfoContainer>
        </div>
        </JumboContainer>
        : 
          <BackgroundImage>
        <div className="container">
                <Center>
                    <h1 style={{ color: 'white'}}>Please, create your Athlete profile!</h1>
                </Center>
                <AthleteForm />
          </div>
            </BackgroundImage>
    }
        </div>
    );
}

const mapStateToProps = state => ({
    athlete: state.athlete,
});

export default connect(mapStateToProps)(Athlete);