import { Link } from 'react-router-dom';
import '../../styles/footer.css';

export function Footer() {
  return (
    <footer className='mt-auto'>
      <div>
        <div className='row m-0'>
          <div className='col-12 px-5 px-md-4 px-lg-3'>
            <Link to='/'>Home</Link>
            <span>|</span>
            <Link to='/'>Terms and Conditions</Link>
            <span>|</span>
            <Link to='/'>Privacy Policy</Link>
            <span>|</span>
            <Link to='/'>Collection Statement</Link>
            <span>|</span>
            <Link to='/'>Help</Link>
            <span>|</span>
            <Link to='/'>Manage Account</Link>
          </div>
        </div>
        <div className='row m-0'>
          <div className='col-12 footer-copyright px-5 px-md-4 px-lg-3 py-2 pb-3'>
            <p>Copyright 2024 DEMO Streaming. All Rights Reserved.</p>
          </div>
        </div>
        <div className='row m-0'>
          <div className='col-12 col-md-6 footer-contain-social px-5 px-md-4 px-lg-3'>
            <a href='' target='_blank'>
              <img src='/public/social/facebook-white.svg' alt='' />
            </a>
            <a href='' target='_blank'>
              <img src='/public/social/twitter-white.svg' alt='' />
            </a>
            <a href='' target='_blank'>
              <img src='/public/social/instagram-white.svg' alt='' />
            </a>
          </div>
          <div className='col-12 col-md-6 footer-contain-store mt-5 mt-md-0  px-5 px-md-4 px-lg-3'>
            <div className='row m-0 d-flex justify-content-start justify-content-md-end'>
              <a
                className='col-12 col-sm-4 p-0 d-flex justify-content-center mb-3 mb-sm-0 d-sm-block'
                href=''
                target='_blank'
              >
                <img src='/public/store/app-store.svg' alt='' />
              </a>
              <a
                className='col-12 col-sm-4 p-0 d-flex justify-content-center mb-3 mb-sm-0 d-sm-block'
                href=''
                target='_blank'
              >
                <img src='/public/store/play-store.svg' alt='' />
              </a>
              <a
                className='col-12 col-sm-4 p-0 d-flex justify-content-center mb-3 mb-sm-0 d-sm-block'
                href=''
                target='_blank'
              >
                <img src='/public/store/windows-store.svg' alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
