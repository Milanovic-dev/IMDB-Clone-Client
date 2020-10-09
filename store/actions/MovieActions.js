import {
  GET_MOVIES,
  SET_MOVIES,
  GET_MOVIE,
  SET_PAGE_MOVIE
} from '../actionTypes/MovieActionTypes';

export const getMovies = (payload) => ({
  type: GET_MOVIES,
  payload
});

export const setMovies = (payload) => ({
  type: SET_MOVIES,
  payload
});

export const getMovie = (payload) => ({
  type: GET_MOVIE,
  payload
});

export const setPageMovie = (payload) => ({
  type: SET_PAGE_MOVIE,
  payload
});
