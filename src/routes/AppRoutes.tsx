import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { Series } from '../pages/Series';
import { Error404 } from '../pages/Error404';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/series' element={<Series />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
