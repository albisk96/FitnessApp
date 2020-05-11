import React, {useState, useEffect} from 'react';
import WorkoutCard from '../cards/workout-card.component';
import Pagination from '../pagination/pagination';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { search } from '../../helpers/search';
import { CardColumnsContainer } from './workouts.styles';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);
  const [itemsCount, setItemsCount] = useState(1);
  const page = search.useQuery().get('page');
  const { _id } = useSelector(state => state.athlete.athlete);

  useEffect(() => {
    async function fetchWorkoutData(){
    const res = await axios.get(`/api/workouts?page=${page || 1}`)
    setWorkouts(res.data)
    setItemsCount(+res.headers['x-total-count'] || 1);
} 
fetchWorkoutData()
}, [page])

const myWorkouts = workouts.map(x => x.athlete.map( y => y._id !== _id))
console.log(myWorkouts)
const openWorkouts = workouts.filter(x => new Date(x.when) - new Date > 0 && x.group)
  
  return (
    <div className='container'>
      <div style={{ marginTop: '5%'}}>
      { 
        openWorkouts ?
        <CardColumnsContainer>
          {openWorkouts.map((workout, index) => (
            <WorkoutCard key={index} workout={workout} />
          ))}
        </CardColumnsContainer> :
        <h3>Workout does not exist yet</h3>
      }
      <Pagination
      selectedPage={page ? +page : 1}
      pagesCount={Math.ceil(itemsCount / 8)}
      />
      </div>
    </div>
    )
}

export default WorkoutList;