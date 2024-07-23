import { Link, useLocation } from 'react-router-dom';

export function NavPage() {
  const { pathname } = useLocation();

  return (
    <nav className='d-flex flex-column'>
      <div className='first-nav d-flex justify-content-center'>
        <div className='row m-0 w-100 px-3 px-xl-0'>
          <div className='col-12 col-md-7 d-flex justify-content-center d-md-block p-0'>
            <Link to='/'>DEMO Streaming</Link>
          </div>
          <div className='col-12 col-md-5 p-0 d-flex justify-content-center justify-content-md-end align-items-center'>
            <Link to='/login'>Log in</Link>
            <Link to='/free-trial'>Start your free trial</Link>
          </div>
        </div>
      </div>
      <div className='second-nav px-3 px-xl-0'>
        <div>
          <p>
            Popular {pathname.slice(1) === '' ? 'Title' : pathname.slice(1)}
          </p>
        </div>
      </div>
    </nav>
  );
}
