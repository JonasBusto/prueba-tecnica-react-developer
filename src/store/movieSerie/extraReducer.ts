import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { MovieSerie, MovieSerieState } from '../../interfaces/movieSerie';
import { getMoviesAndSeries } from './thunks';

export const movieSerieExtraReducers = (
  builder: ActionReducerMapBuilder<MovieSerieState>
) => {
  builder
    .addCase(getMoviesAndSeries.pending, (state) => {
      state.status = 'Cargando';
    })
    .addCase(
      getMoviesAndSeries.fulfilled,
      (state, action: PayloadAction<MovieSerie[]>) => {
        state.status = 'Exitoso';
        state.movies = action.payload.filter(
          (movie) => movie.programType === 'movie'
        );
        state.series = action.payload.filter(
          (movie) => movie.programType === 'series'
        );
      }
    )
    .addCase(getMoviesAndSeries.rejected, (state, action) => {
      state.status = 'Fallido';
      state.error = action.payload;
    });
};
