import React, { Fragment } from 'react';
import Spinner from '../spinner/spinner.component';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';

const WorkoutInformation = ({ workout }) => {
    return(
        <Fragment>
        {workout === null ? (
            <Spinner />
        ) :
           ( <Table striped bordered style={{ color: 'black', backgroundColor: '#fff' }}>
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
            </tr>
            </thead>
            <tbody>
                {workout.athlete.map((x, index) => (
                     x.user.name ? 
                    (<tr key={index}>
                        <th scope="col">{index + 1}</th>
                        <td>{x.user.name}</td>
                        <td>{x.user.email}</td>
                    </tr>) :
                    (<tr>
                        <th scope="col"></th>
                        <td></td>
                        <td></td>
                    </tr>)
                    
                ))
                }
            </tbody>                 
            </Table> )
        }
        </Fragment>
        )
}

export default WorkoutInformation;