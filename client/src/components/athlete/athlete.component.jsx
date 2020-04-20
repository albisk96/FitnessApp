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
import Modal from '../modal/modal.component';


const Athlete = ({ athlete: {athlete} }) => {
  const [modalShow, setModalShow] = useState(false);

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
            <div style={{ marginTop: '3%', marginBottom: '3%' }}>
            <center>
                <button className="btn btn-outline-primary" onClick={() => setModalShow(true)}>Update Data</button>
            </center>
            <Modal show={modalShow} size="modal-50w" onHide={() => setModalShow(false)} title="Update your BMI data" component={<UpdateWeight />} />
            </div>
            <div>
              <BmiData bmi={athlete.bmi}/>
            </div>
            </Center>
            </Nav>
            <Nav eventKey="bodyFat" title="Body Data">
            <Center>
            <h1>Body Data</h1>
            <div style={{ marginTop: '3%', marginBottom: '3%'  }}>
            <center>
                <button className="btn btn-outline-primary" onClick={() => setModalShow(true)}>Update Data</button>
            </center>
            <Modal show={modalShow} size="modal-50w" onHide={() => setModalShow(false)} title="Update your body fat data" component={<BodyFatForm />} />
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
          </Tabs>
        </ProfileInfoContainer>
        </div>
        </JumboContainer>
        : 
          <BackgroundImage>
        <div className="container" style={{ marginTop: '1%'}}>
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