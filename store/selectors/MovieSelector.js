import { createSelector } from 'reselect';

const selectMovieDomain = (state) => state.movie;

export const makeSelectMovieList = createSelector(
  selectMovieDomain,
  (substate) => substate.movies
);
