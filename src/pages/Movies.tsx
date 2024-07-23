import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useMovieSerieAction } from '../hooks/useMovieSerieAction';
import { MovieSerie } from '../components/items/MovieSerie';
import { useFilter } from '../hooks/useFilter';
import { useAppSelector } from '../hooks/store';
import { FormFilter } from '../components/items/FormFilter';
import '../styles/detail.css';
import { Load } from '../components/items/Load';
import { Error } from '../components/items/Error';

export function Movies() {
  const { movies } = useMovieSerieAction();
  const { elementsFiltered, handleChangeOrderTitle, handleChangeFilterSearch } =
    useFilter({
      elements: movies,
    });
  const { isLoading } = useContext(AppContext);
  const status = useAppSelector((state) => state.movieSerie.status);

  if (isLoading) {
    return <Load />;
  } else if (status === 'Fallido') {
    return <Error />;
  }

  return (
    <div>
      <FormFilter
        handleChangeOrderTitle={handleChangeOrderTitle}
        handleChangeFilterSearch={handleChangeFilterSearch}
      />
      {elementsFiltered.length === 0 ? (
        <p>Sin Resultados</p>
      ) : (
        <div className='row m-0'>
          {elementsFiltered.map((serie) => (
            <MovieSerie key={serie.title} serie={serie} />
          ))}
        </div>
      )}
    </div>
  );
}
