import React, { useState } from 'react';
import { connect } from 'react-redux';
import Exercise from './exercises.component';
import Pagination from '../pagination/pagination';
import { SearchBox } from '../search-box/search-box.component';

const ExercisesList = ({ exercises: {exercises} }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const [search, setSearch] = useState('')
  
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const onSearchCange = event => {
        setSearch(event.target.value)
      }

    const filteredExercises = exercises.filter(exercise => (
        exercise.name.slice(indexOfFirstPost, indexOfLastPost).toLowerCase().includes(search.toLowerCase())
    ));

    return(
        <div className="container">
        <SearchBox onChange={onSearchCange} />
        {filteredExercises.map((ex, index) => (
            <Exercise key={index} exercise={ex} />
        ))}
        <div style={{ marginLeft: '30%', marginBottom: '5%'}}>
        <Pagination postsPerPage={postsPerPage} totalPosts={exercises.length} paginate={paginate}/>
        </div>
        </div>
    )
}

const mapStateToProps = state => ({
    exercises: state.exercises,
});

export default connect(mapStateToProps)(ExercisesList);