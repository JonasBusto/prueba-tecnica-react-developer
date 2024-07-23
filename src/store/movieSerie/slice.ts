import { createSlice } from '@reduxjs/toolkit';
import { movieSerieExtraReducers } from './extraReducer';
import { MovieSerieState } from '../../interfaces/movieSerie';

const initialState: MovieSerieState = {
  movies: [],
  series: [],
  status: 'Inactivo',
  error: null,
};

export const movieSerieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: movieSerieExtraReducers,
});

export default movieSerieSlice.reducer;
