import React, { useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux'
import { getExercisesList } from '../../redux/exercises/api'
import Spinner from '../../components/spinner/spinner.component'

const ExercisesPageContainer = lazy(() =>
  import('../../components/exercises/exercises.container')
);

const ExercisePage = ({ getExercisesList }) => {
    useEffect(() => {
        getExercisesList();
    }, [getExercisesList]);
    
    
    return (
        <Suspense fallback={<Spinner />}>
            <div>
            <ExercisesPageContainer />
            </div>
        </Suspense>
    )
}

const mapDispatchToProps = dispatch => ({
    getExercisesList: () => dispatch(getExercisesList())
  });

export default connect(null, mapDispatchToProps)(ExercisePage);