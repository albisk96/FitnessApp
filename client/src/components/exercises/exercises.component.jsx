import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'

const ExercisesList = ({ exercise, key }) => {
    return(
        <div style={{ margin: '5% 5%' }}>
        <Card key={key}>
            <Card.Header>
            <h2>{exercise.name}</h2>
            </Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {exercise.description}
                </p>
                <footer className="text-muted">
                <ul>
                    <li>{`Best for ${exercise.muscles}`}</li>
                    <li>{exercise.mechanicsType}</li>
                    <li>{exercise.exerciseType}</li>
                </ul>
                </footer>
                </blockquote>
            </Card.Body>
            </Card>
        </div>
    )
}

const mapStateToProps = state => ({
    exercises: state.exercises,
});

export default connect(mapStateToProps)(ExercisesList);