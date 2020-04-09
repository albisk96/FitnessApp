import { createSelector } from 'reselect';

const selectAthlete = state => state.athlete;

export const selectAthleteProfile = createSelector(
    [selectAthlete],
    athlete => athlete.athlete,
);

export const selectAthleteIsFetching = createSelector(
    [selectAthlete],
    athlete => athlete.loading,
);