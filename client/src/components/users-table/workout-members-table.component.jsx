import React, { Fragment } from 'react';
import Spinner from '../spinner/spinner.component';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';

const WorkoutInformation = ({ reservations }) => {
    console.log(reservations)
    return(
        <Fragment>
        {reservations === null ? (
            <Spinner />
        ) : (
            <Table striped bordered style={{ color: 'black', backgroundColor: '#fff' }}>
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
            </tr>
            </thead>
            <tbody>
            {reservations.map((user, index) => (
                <tr key={index}>
                    <th scope="col">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    </tr>
            ))}  
            </tbody>                 
            </Table>
            )}
        </Fragment>
    );
}

export default WorkoutInformation;