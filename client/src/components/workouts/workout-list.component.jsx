import React, {useState} from 'react';
import { connect } from 'react-redux';
import WorkoutCard from '../cards/workout-card.component';
import Pagination from '../pagination/pagination';
import { CardColumnsContainer } from './workouts.styles';
import Moment from 'react-moment';

const WorkoutList = ({ workout: {workouts} }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = workouts.filter(x => new Date(x.when) - new Date > 0).slice(indexOfFirstPost, indexOfLastPost);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container'>
      <div style={{ marginTop: '5%'}}>
      { 
        <CardColumnsContainer>
          {currentPosts.map((workout, index) => (
            <WorkoutCard key={index} workout={workout} />
          ))}
          </CardColumnsContainer>
      }
      <Pagination postsPerPage={postsPerPage} totalPosts={workouts.length} paginate={paginate}/>
      </div>
    </div>
    )
}

const mapStateToProps = state => ({
  workout: state.workout
});



export default connect(mapStateToProps)(WorkoutList);