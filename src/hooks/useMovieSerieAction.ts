import { useAppSelector } from './store';

export function useMovieSerieAction() {
  const movies = useAppSelector((state) => state.movieSerie.movies);
  const series = useAppSelector((state) => state.movieSerie.series);

  return { movies, series };
}
