import React, { Fragment } from 'react';
import Spinner from '../spinner/spinner.component';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';

const WorkoutInformation = ({ reservations }) => {
    return(
        <Fragment>
        {reservations === null && reservations.athlete === null ? (
            <Spinner />
        ) : reservations ? (
            <Table striped bordered style={{ color: 'black', backgroundColor: '#fff' }}>
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
            </tr>
            </thead>
            <tbody>
            {reservations.map( x => x.athlete.map((ath, index) => (
                <tr key={index}>
                    <th scope="col">{index + 1}</th>
                    <td>{ath.user.name}</td>
                    <td>{ath.user.email}</td>
                    </tr>
            )))}  
            </tbody>                 
            </Table>
            ) : 
            <Table striped bordered style={{ color: 'black', backgroundColor: '#fff' }}>
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>None</td>
                <td>None</td>
                <td>None</td>
            </tr>
            </tbody>                 
            </Table>
        }
        </Fragment>
    );
}

export default WorkoutInformation;