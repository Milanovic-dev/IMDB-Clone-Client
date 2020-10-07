import { SET_MOVIES } from '../actionTypes/MovieActionTypes';

const initialState = {
  movies: []
};
const MovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MOVIES:
      return { ...state, movies: payload };
    default:
      return state;
  }
};

export default MovieReducer;
