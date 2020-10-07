import { GET_MOVIES, SET_MOVIES } from '../actionTypes/MovieActionTypes';

export const getMovies = (payload) => ({
  type: GET_MOVIES,
  payload
});

export const setMovies = (payload) => ({
  type: SET_MOVIES,
  payload
});
