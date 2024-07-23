import { createAsyncThunk } from '@reduxjs/toolkit';
import { MovieSerie } from '../../interfaces/movieSerie';
import { getData } from '../../services/redux';

export const getMoviesAndSeries = createAsyncThunk<
  MovieSerie[],
  void,
  { rejectValue: string }
>('movieserie/getAll', getData);
