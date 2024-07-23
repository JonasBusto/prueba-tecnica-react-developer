import { createContext, ReactNode } from 'react';
import { useGetData } from '../hooks/useGetData';
import { useLoad } from '../hooks/useLoad';
import { ContextInterface } from '../interfaces/context';

export const AppContext = createContext<ContextInterface>({});

export function AppProvider({ children }: { children: ReactNode }) {
  useGetData();
  const { isLoading } = useLoad();

  return (
    <AppContext.Provider value={{ isLoading }}>{children}</AppContext.Provider>
  );
}
