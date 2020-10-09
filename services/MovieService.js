import BaseApiService from './BaseApiService';

const ENDPOINTS = {
  GET_MOVIES: (limit, page, title) =>
    `/movies?limit=${limit}&page=${page}&title=${title || ''}`
};

class MovieService extends BaseApiService {
  getMovies = (data) =>
    this.apiClient.get(ENDPOINTS.GET_MOVIES(data.limit, data.page, data.title));
}

export default new MovieService();
