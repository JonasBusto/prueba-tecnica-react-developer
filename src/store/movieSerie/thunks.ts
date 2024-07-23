import { createAsyncThunk } from '@reduxjs/toolkit';
import { MovieSerie } from '../../interfaces/movieSerie';

export const getMoviesAndSeries = createAsyncThunk<
  MovieSerie[],
  void,
  { rejectValue: string }
>('movieserie/getAll', async () => {
  const res = await fetch(
    `https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json`
  );
  const data = await res.json();
  return data.entries;
});
