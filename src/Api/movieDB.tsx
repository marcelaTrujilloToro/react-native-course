import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '3e4461f470d5b2fcec79038f3711a522',
    language: 'es-ES',
  },
});

export default movieDB;
