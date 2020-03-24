import { createSelector } from 'reselect';

const selectWorkouts = state => state.workout;

export const selectWorkout = createSelector(
    [selectWorkouts],
    workout => workout.workouts
);

export const selectWorkoutsIsFetching = createSelector(
    [selectWorkouts],
    workout => workout.loading,
);