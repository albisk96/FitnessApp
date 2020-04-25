import { createSelector } from 'reselect';

const selectExercises = state => state.exercises;

export const selectExercisesList = createSelector(
    [selectExercises],
    exercises => exercises.exercises,
);

export const selectExercisesFetching = createSelector(
    [selectExercises],
    exercises => exercises.loading,
);