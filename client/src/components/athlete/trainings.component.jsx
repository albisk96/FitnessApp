import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import axios from 'axios';
import Spinner from '../spinner/spinner.component';

const Trainings = () => {
    const [workouts, setWorkouts] = useState()
    const { _id } = useSelector(state => state.athlete.athlete);
    useEffect(() => {
        async function getWorkouts() {
              const res = await axios.get('/api/workouts')
              setWorkouts(res.data)
          }
          getWorkouts()
       }, []) 
    console.log(workouts)
    console.log(_id)
    return(
        <div style={{ marginTop: '5%' }}>
            <Table striped bordered hover style={{ backgroundColor: 'white'}}>
        <thead>
            <tr>
            <th>Title</th>
            <th>Coach</th>
            <th>Address</th>
            <th>Price</th>
            <th>Starts</th>
            </tr>
        </thead>
        <tbody>
        { workouts === null && workouts.athlete === null ? <Spinner /> : workouts ?
            workouts.filter(workout => workout.athlete.map(x =>_id === _id)).map((x, index) => (
            <tr key={index}>
            <td>{x.title}</td>
            <td>{x.name}</td>
            <td>{x.address}</td>
            <td>{x.price}</td>
            <td><Moment format="YYYY MMM Do LT">{x.when}</Moment></td>
            </tr>
        )) : 
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
    }
        </tbody>
        </Table>
    </div>
    );
}

export default Trainings;