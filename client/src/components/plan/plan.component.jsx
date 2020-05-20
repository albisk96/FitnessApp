import React from 'react';
import { connect } from 'react-redux'
import { JumboContainer, PlanContainer, Center } from './plan.styles'
import { Accordion, Card, Button } from 'react-bootstrap';
import PlanForm from '../athlete-form/workout-generation.component';
import PlanTable from './plan-table.component'
import Spinner from '../spinner/spinner.component';
import moment from 'moment';

const Plan = ({ athlete: {athlete} }) => {

    
    const age = moment().diff(athlete.DOB, 'years');
    function calculateData(data){
        if(data.length > 0){
            return data[data.length - 1];
        } else if (data){
            return data;
        } else {
            return 'There is no data'
        }
    };

    return(
    <JumboContainer>
    <div className='container'>
    <Center>
    {athlete ? 
        <PlanContainer>
            <h1 style={{ color: 'white'}}>Plan</h1>
            <div style={{ width: '50%'}}>
            <PlanForm />
            <div>
            <h3>Your heart ratio during cardio should be around</h3>
            <div style={{ margin: '5% 5%', justifyContent: 'space-between', display: 'flex', margin: '10% 30%'}}>
                <i style={{ fontSize: '4rem', color: 'red' }} className="fas fa-heartbeat"></i>
                    <p style={{ fontSize: '3rem' }}>{Math.ceil((220 - age) * 0.65)}</p>
                <i style={{ fontSize: '4rem', color: 'red' }} className="fas fa-heartbeat"></i>
            </div>        
            </div>
            </div>
            <Accordion>
            {
                athlete.workout !== null ? 
                <Card style={{ border: '0px solid transparent' }}>
                <Card.Header style={{ backgroundColor: '#343a40' }}>
                <Accordion.Toggle as={Button} style={{ color: 'white' }} variant="link" eventKey={1}>
                    Workout Plan 
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={1}>
                <Card.Body style={{ padding: '0'}}>
                { calculateData(athlete.workoutPlan).map(d => (
                    <PlanTable day={d.day} exercises={d.exercises} workout={calculateData(athlete.workoutPlan)}/>
                ))
                    
                }
                
                </Card.Body>
                </Accordion.Collapse>
                </Card>
                 : <Spinner />
            }
            </Accordion>
        </PlanContainer>
        : 
        <PlanContainer>
            <div>Please, create your Profile first</div>
        </PlanContainer>
    }
        </Center>
        </div>
    </JumboContainer>
    );
}

const mapStateToProps = state => ({
    athlete: state.athlete,
});

export default connect(mapStateToProps)(Plan);