import { Link } from 'react-router-dom';
import '../styles/home.css';

export function Home() {
  return (
    <div className='d-flex row m-0 justify-content-start contain-card-home'>
      <Link className='col-12 col-sm-6' to='/series'>
        <div className='d-flex flex-column'>
          <div className='d-flex justify-content-center align-items-center'>
            <img className='w-100' src='/public/placeholder.png' alt='' />
          </div>
          <p>Popular series</p>
        </div>
      </Link>
      <Link className='col-12 col-sm-6' to='/movies'>
        <div className='d-flex flex-column'>
          <div className='d-flex justify-content-center align-items-center'>
            <img className='w-100' src='/public/placeholder.png' alt='' />
          </div>
          <p>Popular movies</p>
        </div>
      </Link>
    </div>
  );
}
