import {useEffect, useState} from 'react';
import movieDB from '../Api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/IMovie';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [peliculaCartelera, setPeliculaCartelera] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');

    setPeliculaCartelera(resp.data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    // now_playing
    getMovies();
  }, []);

  return {peliculaCartelera, isLoading};
};
