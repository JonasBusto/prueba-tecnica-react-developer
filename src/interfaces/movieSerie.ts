import { Images } from './info';
import { InitialStateSlice } from './store';

export interface MovieSerie {
  title: string;
  description: string;
  programType: string;
  images: Images;
  releaseYear: number;
}

export interface MovieSerieState extends InitialStateSlice {
  movies: MovieSerie[];
  series: MovieSerie[];
}
