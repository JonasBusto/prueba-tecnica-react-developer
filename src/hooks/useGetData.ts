import { useEffect } from 'react';
import { useAppDispatch } from './store';
import { getMoviesAndSeries } from '../store/movieSerie/thunks';

export function useGetData() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMoviesAndSeries());
  }, []);

  return {};
}
