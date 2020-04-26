import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import WorkoutCard from '../cards/workout-card.component';
import Pagination from '../pagination/pagination';
import axios from 'axios';
import { search } from '../../helpers/search';
import { CardColumnsContainer } from './workouts.styles';


const WorkoutList = () => {

  const [workouts, setWorkouts] = useState([]);

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


  return (
    <div className='container'>
      <div style={{ marginTop: '5%'}}>
      { 
        <CardColumnsContainer>
          {workouts.map((workout, index) => (
            <WorkoutCard key={index} workout={workout} />
          ))}
        </CardColumnsContainer>
      }
      <Pagination
      selectedPage={page ? +page : 1}
      pagesCount={Math.ceil(itemsCount / 5)}
      />
      </div>
    </div>
    )
}

export default WorkoutList;