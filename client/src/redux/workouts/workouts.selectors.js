import { createSelector } from 'reselect';

const selectWorkouts = state => state.workouts;

export const selectWorkout = createSelector(
    [selectWorkouts],
    workouts => workouts.workout
);

export const selectWorkoutsIsFetching = createSelector(
    [selectWorkouts],
    workouts => workouts.isLoading,
);