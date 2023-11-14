import axios from 'axios';

const API_KEY = 'dfced028369c4b906b9773d4a7a301c6';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrendingMovies = () =>
  axiosInstance.get('/trending/get-trending');
export const searchMovies = query =>
  axiosInstance.get('/search/search-movies', { params: { query } });
export const getMovieDetails = movieId =>
  axiosInstance.get(`/movies/get-movie-details/${movieId}`);
export const getMovieCredits = movieId =>
  axiosInstance.get(`/movies/get-movie-credits/${movieId}`);
export const getMovieReviews = movieId =>
  axiosInstance.get(`/movies/get-movie-reviews/${movieId}`);
