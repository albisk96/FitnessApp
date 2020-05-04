import React, {useState, useEffect} from 'react';
import WorkoutCard from '../cards/workout-card.component';
import Pagination from '../pagination/pagination';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { search } from '../../helpers/search';
import { CardColumnsContainer } from './workouts.styles';


const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);
  const { reservations } = useSelector(state => state.athlete.athlete);
  const [itemsCount, setItemsCount] = useState(1);
  const page = search.useQuery().get('page');

  useEffect(() => {
    async function fetchWorkoutData(){
    const res = await axios.get(`/api/workouts?page=${page || 1}`)
    setWorkouts(res.data)
    setItemsCount(+res.headers['x-total-count'] || 1);
} 
fetchWorkoutData()
}, [page])

  const reservation = reservations.map(x => x.workout)
  console.log(reservations.workout)
  const x = workouts.filter(x => x._id !== reservations.workout)
  const openWorkouts = workouts.filter(x => new Date(x.when) - new Date > 0)
  return (
    <div className='container'>
      <div style={{ marginTop: '5%'}}>
      { 
        <CardColumnsContainer>
          {openWorkouts.filter(x => x._id !== reservation).map((workout, index) => (
            <WorkoutCard key={index} workout={workout} />
          ))}
        </CardColumnsContainer>
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