import axios from 'axios';

export const getPopularMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=16167ebd5e587a3ec817c3c5992562e2',
  );
  return resp.data.results;
};
