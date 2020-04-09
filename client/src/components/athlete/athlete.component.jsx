import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { JumboContainer, Center, Avatar, ProfileInfoContainer, PortfolioContainer, StyledWrap } from './athlete.styles'
import BmiData from '../charts/bmi.component';
import BodyFat from '../charts/body-fat.component';
import AdditionalData from '../charts/additional-data.component';
import AthleteForm from '../athlete-form/athlete-create.component';
import UpdateWeight from '../athlete-form/bmi-form.component';
import BodyFatForm from '../athlete-form/bodyFat-form.component';
import { Button, Tabs, Tab } from 'react-bootstrap'

const Athlete = ({ athlete: {athlete} }) => {
  const [key, setKey] = useState('profile');

    return(
        <div>
        { athlete ? 
            <div>
            <JumboContainer>
            <Center>
                <Avatar alt="" src={`https://picsum.photos/id/${Math.floor((Math.random() * 100) + 1)}/300/200`} />
            </Center>
        </JumboContainer>
        <div className="container">
        <ProfileInfoContainer>
        <Tabs 
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            >
            <StyledWrap eventKey="profile" title="Profile">
            <Center>
            <h1>{athlete.user.name}</h1>
            <h3>{`Status: ${athlete.bmi_status}`}</h3>
            <h3>{`Body Type: ${athlete.bodyType}`}</h3>
            </Center>
            </StyledWrap>
            <StyledWrap eventKey="charts" title="Charts">
            <Center>
            <h1>Profile Data</h1>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "10% 20%"}}>
              <UpdateWeight />
              <BodyFatForm />
            </div>
            <div>
              <BmiData bmi={athlete.bmi}/>
            </div>
            <div>
              <BodyFat bodyFat={athlete.bodyFat} />
            </div>
            <div>
              <AdditionalData neck={athlete.neck} waist={athlete.waist} hip={athlete.hip} />
            </div>
            </Center>
            </StyledWrap>
          </Tabs>
        </ProfileInfoContainer>
        </div>
        </div> 
        : 
        <div>
            <AthleteForm />
        </div>
    }
        </div>
    );
}

const mapStateToProps = state => ({
    athlete: state.athlete,
});

export default connect(mapStateToProps)(Athlete);