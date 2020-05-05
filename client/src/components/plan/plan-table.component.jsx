import React from 'react';
import { Table } from 'react-bootstrap';

const PlanTable = ({ workout, day, exercises }) => {
    return(
        <div>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>{day}</th>
                <th>Minutes</th>
                <th>Reps x Sets</th>

            </tr>
        </thead>
        <tbody>
            {exercises.map(x => (
                <tr>
                <td style={{ width: '50%'}}> 
                    {x.exercise.name}  
                    {x.exercise.muscles ? `(${x.exercise.muscles})` : ''}  
                    {x.exercise.mechanicsType ? `(${x.exercise.mechanicsType})` : ''}
                    {x.exercise.exerciseType === 'cardio' || x.exercise.exerciseType === 'stretching' ? `(${x.exercise.exerciseType})` : ''}
                </td>
                {
                    x.min ? <td>{x.min}</td> : <td>{''}</td>
                }
                {
                    x.reps ? <td>{x.reps} x {x.sets}</td> : 
                    x.exercise.muscles === 'abs' ? <td> 3 x Max </td> : <td>{' '}</td>
                }
                </tr>
            ))}  
        </tbody>
        </Table>
        </div>
    )
}

export default PlanTable;