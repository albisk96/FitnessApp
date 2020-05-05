import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Pagination from '../pagination/pagination';
import Search from '../search-box/search-box.component';
import { search } from '../../helpers/search';
import CoachItem from '../cards/coach-card.component';
import { CardColumns } from 'react-bootstrap';
import axios from 'axios';

const CoachesList =() => {
    const [coaches, setCoaches] = useState([]);
    const query = search.useQuery().get('query');
    const [itemsCount, setItemsCount] = useState(1);
    const page = search.useQuery().get('page');

    useEffect(() => {
        async function getProfiles() {
              const res = await axios.get(`/api/coach?page=${page || 1}${query ? `&query=${query}` : ''}`)
              setCoaches(res.data)
              setItemsCount(+res.headers['x-total-count'] || 1)
          }
          getProfiles()
       }, [page, query]) 
       console.log(query)
console.log(coaches)
    return(
    <div className="container">
    <Search />
    <CardColumns style={{ marginTop: '10%', columnCount: '4'}}>
           { coaches.map(coach => (
                <CoachItem key={coach._id} coach={coach} />
            ))}
        </CardColumns>
        <Pagination
        selectedPage={page ? +page : 1}
        pagesCount={Math.ceil(itemsCount / 8)}
        />
    </div>
    );
}


export default CoachesList;