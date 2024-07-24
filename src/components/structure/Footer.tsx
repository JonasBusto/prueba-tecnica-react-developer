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
            <Link to='/terms'>Terms and Conditions</Link>
            <span>|</span>
            <Link to='/privacy'>Privacy Policy</Link>
            <span>|</span>
            <Link to='/collection'>Collection Statement</Link>
            <span>|</span>
            <Link to='/help'>Help</Link>
            <span>|</span>
            <Link to='/account'>Manage Account</Link>
          </div>
        </div>
        <div className='row m-0'>
          <div className='col-12 footer-copyright px-5 px-md-4 px-lg-3 py-2 pb-3'>
            <p>Copyright 2024 DEMO Streaming. All Rights Reserved.</p>
          </div>
        </div>
        <div className='row m-0'>
          <div className='col-12 col-md-6 footer-contain-social px-5 px-md-4 px-lg-3'>
            <a href='https://www.facebook.com/' target='_blank'>
              <img src='/social/facebook-white.svg' alt='' />
            </a>
            <a href='https://x.com/' target='_blank'>
              <img src='/social/twitter-white.svg' alt='' />
            </a>
            <a href='https://www.instagram.com/' target='_blank'>
              <img src='/social/instagram-white.svg' alt='' />
            </a>
          </div>
          <div className='col-12 col-md-6 footer-contain-store mt-5 mt-md-0  px-5 px-md-4 px-lg-3'>
            <div className='row m-0 d-flex justify-content-start justify-content-md-end'>
              <a
                className='col-12 col-sm-4 p-0 d-flex justify-content-center mb-3 mb-sm-0 d-sm-block'
                href='https://www.apple.com/la/app-store/'
                target='_blank'
              >
                <img src='/store/app-store.svg' alt='' />
              </a>
              <a
                className='col-12 col-sm-4 p-0 d-flex justify-content-center mb-3 mb-sm-0 d-sm-block'
                href='https://play.google.com/'
                target='_blank'
              >
                <img src='/store/play-store.svg' alt='' />
              </a>
              <a
                className='col-12 col-sm-4 p-0 d-flex justify-content-center mb-3 mb-sm-0 d-sm-block'
                href='https://www.microsoft.com/es-ad/store/b/home'
                target='_blank'
              >
                <img src='/store/windows-store.svg' alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
