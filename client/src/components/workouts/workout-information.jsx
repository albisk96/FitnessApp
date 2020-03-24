import React, { Fragment } from 'react';
import Spinner from '../spinner/spinner.component';
import { Table } from 'react-bootstrap';


const WorkoutInformation = ({ workout }) => {
    console.log(workout)
    return(
        <Fragment>
        {workout === null ? (
            <Spinner />
        ) : (
            <Table striped bordered hover>
            <tbody>
                <tr>
                <td>Title</td>
                <td>{workout.title}</td>
                </tr>
                <tr>
                <td>Coach name</td>
                <td>{workout.name}</td>
                </tr>
                <tr>
                <td>Description</td>
                <td>{workout.description}</td>
                </tr>
                <tr>
                <td>Type</td>
                <td>{workout.kind}</td>
                </tr>
                <tr>
                <td>Level</td>
                <td>{workout.level}</td>
                </tr>
                <tr>
                <td>Address</td>
                <td>{workout.address}</td>
                </tr>
                <tr>
                <td>Price</td>
                <td>{workout.price}</td>
                </tr>
                <tr>
                <td>Entries left</td>
                <td>{workout.entries}</td>
                </tr>
                <tr>
                <td>Date</td>
                <td>{workout.date}</td>
                </tr>
            </tbody>
            </Table>
            )}
        </Fragment>
    );
}

export default WorkoutInformation;