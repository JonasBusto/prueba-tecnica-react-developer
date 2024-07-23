import { useEffect, useState } from 'react';
import { MovieSerie } from '../interfaces/movieSerie';

export function useFilter({ elements }: { elements: MovieSerie[] }) {
  const [filterSearch, setFilterSearch] = useState('');
  const [elementsFiltered, setElementsFiltered] = useState([...elements]);
  const [filterOrderTitle, setFilterOrderTitle] = useState('');

  const filterElements = () => {
    const arrayAux = [...elements];
    let arrayFilter = arrayAux;

    if (filterSearch === '') {
      arrayFilter = arrayAux;
    } else {
      arrayFilter = arrayAux.filter(
        (item) =>
          item.title.toLowerCase().includes(filterSearch) ||
          item.releaseYear.toString().includes(filterSearch)
      );
    }

    if (filterOrderTitle === 'title-asc') {
      arrayFilter.sort((a, b) => (a.title < b.title ? -1 : 0));
    } else if (filterOrderTitle === 'title-desc') {
      arrayFilter.sort((a, b) => (a.title > b.title ? -1 : 0));
    }

    setElementsFiltered(arrayFilter);
  };

  const handleChangeFilterSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterSearch(event.target.value);
  };

  const handleChangeOrderTitle = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterOrderTitle(event.target.value);
  };

  useEffect(() => {
    filterElements();
  }, [filterSearch, elements, filterOrderTitle]);

  return {
    handleChangeFilterSearch,
    handleChangeOrderTitle,
    elementsFiltered,
  };
}
