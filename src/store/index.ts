import { configureStore } from '@reduxjs/toolkit';
import movieSerieReducer from './movieSerie/slice';

export const store = configureStore({
  reducer: {
    movieSerie: movieSerieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
