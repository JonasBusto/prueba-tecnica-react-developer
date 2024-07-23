import { useEffect, useState } from 'react';
import { useAppSelector } from './store';

export function useLoad() {
  const status = useAppSelector((state) => state.movieSerie.status);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status !== 'Cargando' && status !== 'Inactivo') {
      setIsLoading(false);
    }
  }, [status]);

  return { isLoading };
}
