import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Spinner from '../../components/spinner/spinner.component';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';

const TableReservations = ({ workouts }) => {
    const [current, setCurrent] = useState()
    useEffect(() => {
        async function getCurrentProfile() {
              const res = await axios.get('/api/coach/me')
              setCurrent(res.data._id)
          }
          getCurrentProfile()
       }, []) 

    return(
        <div>
        { !workouts && !current ? (
            <Spinner />
        ) : 
           ( <Table striped bordered style={{ color: 'black', backgroundColor: '#fff' }}>
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Price</th>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Address</th>
            </tr>
            </thead>
            <tbody>
                {workouts.filter(x => x.coach === current).map((x, index) => (
                     x ? 
                    (<tr key={index}>
                        <th scope="col">{index + 1}</th>
                        <td>{x.user.name}</td>
                        <td>{x.user.email}</td>
                        <td>{x.price}</td>
                        <td>{x.title}</td>
                        <td>{x.when}</td>
                        <td>{x.address}</td>
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
        </div>
        )
}

export default TableReservations;