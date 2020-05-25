import React, {useState, useEffect} from 'react';
import Pagination from '../pagination/pagination';
import axios from 'axios';
import { search } from '../../helpers/search';
import Spinner from '../../components/spinner/spinner.component';
import { deleteWorkout } from '../../redux/workouts/workouts.action';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import EditWorkout from './workout-edit-modal.component';

const WorkoutTable = ({ deleteWorkout }) => {
  const [workouts, setWorkouts] = useState([]);
  const [itemsCount, setItemsCount] = useState(1);
  const page = search.useQuery().get('page');
  //const { _id } = useSelector(state => state.athlete.athlete);

  useEffect(() => {
    async function fetchWorkoutData(){
    const res = await axios.get(`/api/workouts?page=${page || 1}`)
    setWorkouts(res.data)
    setItemsCount(+res.headers['x-total-count'] || 1);
} 
fetchWorkoutData()
}, [page])
  
  return (
    <div className='container'>
      { workouts === null ? <Spinner /> : 
        <div>
         
            <table className="table table-striped table-bordered" style={{ width: '50vw', marginTop: '5%', backgroundColor: 'white'}}>
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Coach Name</th>
                <th scope="col">Address</th>
                <th scope="col">Level</th>
                <th scope="col">Price</th>
                <th scope="col">Group/Individual</th>
                <th scope="col">Workout Date</th>
                <th scope="col">Actions</th>
            </tr>
            </thead> 
            <tbody>
                {workouts.map((workout, index) => (
                    <tr key={index}>
                    <th scope="col">{index + 1}</th>
                    <td>{workout.name}</td>
                    <td>{workout.address}</td>
                    <td>{workout.level}</td>
                    <td>{workout.price}</td>
                    <td>{workout.group ? 'Group' : 'Individual'}</td>
                    <td><Moment format="YYYY-MM-DD HH:mm">{workout.when}</Moment></td>
                    <td>
                    <div style={{ display: 'flex' }}>
                        <Button onClick={() => deleteWorkout(workout._id)} variant="outline-danger">Delete</Button>
                        <EditWorkout id={workout._id} />
                    </div>
                    </td>
                    </tr>
                ))}
            </tbody>
        </table> 
        <div style={{ marginLeft: '45%'}}>
        <Pagination
        selectedPage={page ? +page : 1}
        pagesCount={Math.ceil(itemsCount / 8)}
        />
        </div>
        </div>
      }
    </div>

    )
}
export default connect(null, {deleteWorkout})(WorkoutTable);