import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';

const Trainings = () => {
    const { reservations } = useSelector(state => state.athlete.athlete);
    
    return(
        <div style={{ marginTop: '5%' }}>
            <Table striped bordered hover style={{ backgroundColor: 'white'}}>
        <thead>
            <tr>
            <th>Title</th>
            <th>Coach</th>
            <th>Group/Individual</th>
            <th>Address</th>
            <th>Price</th>
            <th>Starts</th>
            </tr>
        </thead>
        <tbody>
        {reservations.map((x, index) => (
            <tr key={index}>
            <td>{x.title}</td>
            <td>{x.name}</td>
            <td>{x.kind}</td>
            <td>{x.address}</td>
            <td>{x.price}</td>
            <td><Moment format="YYYY MMM Do LT">{x.when}</Moment></td>
            </tr>
        ))}
        </tbody>
        </Table>
    </div>
    );
}

export default Trainings;