import { END } from 'redux-saga';
import BaseApiService from './BaseApiService';

const ENDPOINTS = {
  GET_MOVIES: (limit, page, title) =>
    `/movies?limit=${limit}&page=${page}&title=${title || ''}`,
  GET_MOVIE: (id) => `/movies/${id}`,
  LIKE: (id) => `/movies/like/${id}`,
  DISLIKE: (id) => `/movies/dislike/${id}`
};

const moviesPerPage = 5;

class MovieService extends BaseApiService {
  getMovies = (data) =>
    this.apiClient.get(
      ENDPOINTS.GET_MOVIES(moviesPerPage, data.page, data.title)
    );

  getMovie = (data) => this.apiClient.get(ENDPOINTS.GET_MOVIE(data));

  like = (data) => this.apiClient.put(ENDPOINTS.LIKE(data));

  dislike = (data) => this.apiClient.put(ENDPOINTS.DISLIKE(data));
}

export default new MovieService();
