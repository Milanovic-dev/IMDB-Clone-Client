import { SET_MOVIES, SET_PAGE_MOVIE } from '../actionTypes/MovieActionTypes';

const initialState = {
  movies: [],
  pageMovie: null
};
const MovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MOVIES:
      return { ...state, movies: payload };
    case SET_PAGE_MOVIE:
      return { ...state, pageMovie: payload };
    default:
      return state;
  }
};

export default MovieReducer;
