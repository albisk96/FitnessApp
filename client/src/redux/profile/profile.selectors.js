import { createSelector } from 'reselect';

const selectProfile = state => state.profile;

export const selectProfilesIsFetching = createSelector(
    [selectProfile],
    profile => profile.loading,
);