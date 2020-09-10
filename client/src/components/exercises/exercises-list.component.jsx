import React, { useState, useEffect } from 'react';
import Exercise from './exercises.component';
import Pagination from '../pagination/pagination';
import Search from '../search-box/search-box.component';
import { search } from '../../helpers/search';
import axios from 'axios';

const ExercisesList = () => {

    const [exercises, setExercises] = useState([]);
    const query = search.useQuery().get('query');
    const [itemsCount, setItemsCount] = useState(1);
    const page = search.useQuery().get('page');

   useEffect(() => {
    async function getExercisesList() {
          const res = await axios.get(`/api/exercise?page=${page || 1}${query ? `&query=${query}` : ''}`)
          setExercises(res.data)
          setItemsCount(+res.headers['x-total-count'] || 1)
      }
      getExercisesList()
   }, [page, query]) 

    return(
        <div className="container">
        <Search />
        {exercises.map((ex, index) => (
            <Exercise key={index} exercise={ex} />
        ))}
        <div style={{ marginLeft: '30%', marginBottom: '5%'}}>
        <Pagination
        selectedPage={page ? +page : 1}
        pagesCount={Math.ceil(itemsCount / 8)}
        />
        </div>
        </div>
    )
}

export default ExercisesList;