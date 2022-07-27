import {useEffect, useState} from 'react';
import movieDB from '../Api/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/IMovie';

interface IPeliculasState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [moviesState, setMoviesState] = useState<IPeliculasState>({
    nowPlaying : [],
    popular : [],
    topRated : [],
    upcoming : [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');

    const reponse = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: reponse[0].data.results,
      popular: reponse[1].data.results,
      topRated: reponse[2].data.results,
      upcoming: reponse[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    // now_playing
    getMovies();
  }, []);

  return {...moviesState, isLoading};
};
