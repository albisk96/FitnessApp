import React from 'react';
import { connect } from 'react-redux'
import { JumboContainer, PlanContainer, Center } from './plan.styles'
import { Accordion, Card, Button } from 'react-bootstrap';
import PlanForm from '../athlete-form/workout-generation.component';
import PlanTable from './plan-table.component'

const Plan = ({ athlete: {athlete} }) => {

    return(
    <JumboContainer>
    <div className='container'>
    <Center>
    {athlete ? 
        <PlanContainer>
            <h1 style={{ color: 'white'}}>Plan</h1>
            <div style={{ width: '50%'}}>
            <PlanForm />
            </div>
            <Accordion>
            {
                athlete.workout.map((plan, index) => (
                <Card style={{ border: '0px solid transparent' }}>
                <Card.Header style={{ backgroundColor: '#343a40' }}>
                <Accordion.Toggle as={Button} style={{ color: 'white' }} variant="link" eventKey={index}>
                    {`Workout Number ${index + 1}`}
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                <Card.Body style={{ padding: '0'}}>
                { plan.map(d => (
                    <PlanTable day={d.day} exercises={d.exercises} workout={plan}/>
                ))
                    
                }
                
                </Card.Body>
                </Accordion.Collapse>
                </Card>
                )) 
            }
            </Accordion>
        </PlanContainer>
        : <PlanContainer>
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