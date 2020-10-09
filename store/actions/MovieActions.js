import {
  GET_MOVIES,
  SET_MOVIES,
  GET_MOVIE,
  SET_PAGE_MOVIE,
  LIKE_MOVIE,
  DISLIKE_MOVIE,
  SET_LIKE_ERROR
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

export const likeMovie = (payload) => ({
  type: LIKE_MOVIE,
  payload
});

export const dislikeMovie = (payload) => ({
  type: DISLIKE_MOVIE,
  payload
});

export const setLikeError = (payload) => ({
  type: SET_LIKE_ERROR,
  payload
});
