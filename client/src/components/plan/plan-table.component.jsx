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
                <th>Reps</th>
                <th>Sets</th>
            </tr>
        </thead>
        <tbody>
            {exercises.map(x => (
                <tr>
                <td style={{ width: '50%'}}> 
                    {x.exercise.name}  {x.exercise.muscles ? `(${x.exercise.muscles})` : ''}  {x.exercise.mechanicsType ? `(${x.exercise.mechanicsType})` : ''}
                </td>
                {
                    x.min ? <td>{x.min}</td> : <td>{'X'}</td>
                }
                <td>{x.reps}</td>
                <td>{x.sets}</td>
                </tr>
            ))}  
        </tbody>
        </Table>
        </div>
    )
}

export default PlanTable;