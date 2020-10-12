import {
  SET_LIKE_ERROR,
  SET_MOVIES,
  SET_PAGE_MOVIE
} from '../actionTypes/MovieActionTypes';

const initialState = {
  movies: [],
  pageMovie: null,
  error: ''
};
const MovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MOVIES:
      return { ...state, movies: payload };
    case SET_PAGE_MOVIE:
      return { ...state, pageMovie: payload };
    case SET_LIKE_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default MovieReducer;
