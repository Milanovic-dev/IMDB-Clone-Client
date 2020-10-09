import BaseApiService from './BaseApiService';

const ENDPOINTS = {
  GET_MOVIES: (limit, page, title) =>
    `/movies?limit=${limit}&page=${page}&title=${title || ''}`,
  GET_MOVIE: (id) => `/movies/${id}`
};

const moviesPerPage = 5;

class MovieService extends BaseApiService {
  getMovies = (data) =>
    this.apiClient.get(
      ENDPOINTS.GET_MOVIES(moviesPerPage, data.page, data.title)
    );

  getMovie = (data) => {
    return this.apiClient.get(ENDPOINTS.GET_MOVIE(data));
  };
}

export default new MovieService();
