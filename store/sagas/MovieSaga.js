import { put, call } from 'redux-saga/effects';
import MovieService from '../../services/MovieService';
import { setMovies, setPageMovie } from '../actions/MovieActions';

export function* getMovies({ payload }) {
  try {
    const { data } = yield call(MovieService.getMovies, payload);
    yield put(setMovies(data.results));
  } catch (error) {
    console.error(error);
  }
}

export function* getPageMovie({ payload }) {
  try {
    const { data } = yield call(MovieService.getMovie, payload);
    yield put(setPageMovie(data));
  } catch (error) {
    console.error(error);
  }
}
